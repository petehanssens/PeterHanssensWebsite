---
date: 2019-05-26T01:00:00.000Z
draft: false
title: "ALB to Lambda with Auth0 authentication"
description: "ALB to Lambda with Auth0 authentication"
image: "/img/square_headshot.jpg"
tags: ["ALB","Cloudformation","Lambda","Auth0"]
series: ["Architecture"]
categories: ["Blog"]
toc: true
---

## ALB to Lambda with Auth0 authentication

I've put together a cloudformation template to create an application load balancer that points to a lambda function which returns a simple HTML page. When you connect to it, it requires you to authenticate via Auth0. I hope you enjoy it!

A special mention to [s0enke](https://github.com/s0enke/cloudformation-templates/blob/master/templates/lambda-alb-sam-sample.yaml) for the ALB SAM Lambda template as well as [sandrinodm](https://medium.com/@sandrinodm/securing-your-applications-with-aws-alb-built-in-authentication-and-auth0-310ad84c8595) for the securing an ALB with Auth0 blogpost - both helped a great deal to quickly put this together.

```yaml
AWSTemplateFormatVersion: 2010-09-09
Transform: AWS::Serverless-2016-10-31
Description: HelloWorld Lambda function template for Application Load Balancer Lambda as target
Parameters: 
  VPC:
    Type: AWS::EC2::VPC::Id
  SubnetA:
    Type: AWS::EC2::Subnet::Id
  SubnetB:
    Type: AWS::EC2::Subnet::Id
  Certificate:
    Type: String
    # Update with the certificate ARN from Certificate Manager, which must exist in the same region.
    Default: 'arn:aws:acm:region:123456789012:certificate/00000000-0000-0000-0000-000000000000'
  ServiceName:
    Type: String
    # update with the name of the service
    Default: MyService
  LoadBalancerPort:
    Type: Number
    Default: 443
  HostedZoneName:
    Type: String
    Default: company.com
  Subdomain:
    Type: String
    Default: myservice
  AuthorizationEndpoint: 
    Type: String
    Default: https://domain.au.auth0.com/authorize
  ClientId: 
    Type: String
    Default: clientid
  ClientSecret: 
    Type: String
    Default: clientsecret
  Issuer: 
    Type: String
    Default: https://domain.au.auth0.com/
  TokenEndpoint: 
    Type: String
    Default: https://domain.au.auth0.com/oauth/token
  UserInfoEndpoint: 
    Type: String
    Default: https://domain.au.auth0.com/userinfo

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      Description: An Application Load Balancer Lambda Target that returns "HelloWorld"
      Handler: index.handler
      Runtime: python3.7
      InlineCode: |
        def handler(event, context): 
          return {
            "statusCode": 200,
            "statusDescription": "HTTP OK",
            "isBase64Encoded": False,
            "headers": {
              "Content-Type": "text/html"
            },
            "body": "<h1>Hello from Lambda!</h1>"
          }
      Timeout: 1
  LoadBalancerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: !Join ['', [!Ref ServiceName, LoadBalancerSecurityGroup]]
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: !Ref LoadBalancerPort
          ToPort: !Ref LoadBalancerPort
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
  TargetGroup:
    Type: AWS::ElasticLoadBalancingV2::TargetGroup
    DependsOn: HelloWorldFunctionInvokePermission
    Properties:
      Name: !Join ['', [!Ref ServiceName, TargetGroup]]
      TargetType: lambda
      Targets:
      - Id: !GetAtt HelloWorldFunction.Arn
  ListenerHTTPS:
    Type: AWS::ElasticLoadBalancingV2::Listener
    Properties:
      DefaultActions:
        - TargetGroupArn: !Ref TargetGroup
          Type: forward
      LoadBalancerArn: !Ref LoadBalancer
      Port: !Ref LoadBalancerPort
      Protocol: HTTPS
      Certificates:
        - CertificateArn: !Ref Certificate
  HttpRedirectListener:
    Type: AWS::ElasticLoadBalancingV2::Listener
    DependsOn:
      - LoadBalancer
    Properties:
      DefaultActions:
        - RedirectConfig:
            Host: "#{host}"
            Path: "/#{path}"
            Port: 443
            Protocol: "HTTPS"
            Query: "#{query}"
            StatusCode: HTTP_301
          Type: redirect
      LoadBalancerArn: !Ref 'LoadBalancer'
      Port: 80
      Protocol: HTTP
  HttpsListenerRule:
    Type: AWS::ElasticLoadBalancingV2::ListenerRule
    Properties: 
      Actions: 
        - Type: authenticate-oidc
          Order: 1
          AuthenticateOidcConfig:
            AuthorizationEndpoint: !Ref AuthorizationEndpoint
            ClientId: !Ref ClientId
            ClientSecret: !Ref ClientSecret
            Issuer: !Ref Issuer
            TokenEndpoint: !Ref TokenEndpoint
            UserInfoEndpoint: !Ref UserInfoEndpoint
        - Type: forward
          Order: 2
          TargetGroupArn: !Ref TargetGroup
      Conditions: 
        - Field: path-pattern
          Values: 
            - '/'
      ListenerArn: !Ref ListenerHTTPS
      Priority: 1
  LoadBalancer:
    Type: AWS::ElasticLoadBalancingV2::LoadBalancer
    Properties:
      LoadBalancerAttributes:
        # this is the default, but is specified here in case it needs to be changed
        - Key: idle_timeout.timeout_seconds
          Value: 60
      Name: !Join ['', [!Ref ServiceName, LoadBalancer]]
      # "internal" is also an option
      Scheme: internet-facing
      SecurityGroups:
        - !Ref LoadBalancerSecurityGroup
      Subnets:
        - !Ref SubnetA
        - !Ref SubnetB
  DNSRecord:
    Type: AWS::Route53::RecordSet
    Properties:
      HostedZoneName: !Join ['', [!Ref HostedZoneName, .]]
      Name: !Join ['', [!Ref Subdomain, ., !Ref HostedZoneName, .]]
      Type: A
      AliasTarget:
        DNSName: !GetAtt LoadBalancer.DNSName
        HostedZoneId: !GetAtt LoadBalancer.CanonicalHostedZoneID
  HelloWorldFunctionInvokePermission:
    Type: AWS::Lambda::Permission
    Properties:
      FunctionName: !GetAtt HelloWorldFunction.Arn
      Action: 'lambda:InvokeFunction'
      Principal: elasticloadbalancing.amazonaws.com
``` 
