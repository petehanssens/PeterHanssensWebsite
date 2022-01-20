---
date: 2022-01-20T01:00:00.000Z
draft: false
title: "Tracking my blog with Cloudwatch RUM"
description: "How to implement Cloudwatch RUM on a nextjs app"
image: "/img/blog/cloudwatch-rum/ash-edmonds-fsI-_MRsic0-unsplash.jpg"
tags: ["aws","dev"]
series: ["Cloud"]
categories: ["Blog"]
toc: true
---

![A nice Rum cocktail!](/img/blog/cloudwatch-rum/ash-edmonds-fsI-_MRsic0-unsplash.jpg)

Hey folks, so at last months/years re:Invent, Cloudwatch RUM was announced... no it's not a rum dispensing service but rather a real-user monitoring service for websites.

I thought it was finally a good time to get some user metrics on who is using my website and its performance as well as giving this new service a go!

# Getting started

So to dive right it, I headed over to AWS and into Cloudwatch and clicked on RUM on the left hand side panel:

![Cloudwatch RUM](/img/blog/cloudwatch-rum/cloudwatch-rum.png)

I click on add an app monitor and add in the following details:

1. App monitor name

2. Application domain

3. And then leave all of the default options.

I'm then given a javascript snippet that I need to add to the heads in each page of my nextjs website:

```javascript
(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.getElementsByTagName('script')[0]);})('cwr','xxx','1.0.0','ap-southeast-2','https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js',{sessionSampleRate:1,guestRoleArn:"arn:aws:iam::xxx:role/RUM-Monitor-ap-southeast-2-xxx-xxx-Unauth",identityPoolId:"ap-southeast-2:xxx",endpoint:"https://dataplane.rum.ap-southeast-2.amazonaws.com",telemetries:["performance","errors","http"],allowCookies:true,enableXRay:true});
```

I add this to my /public folder of my nextjs app:

```bash
/public/rum-tracking.js
```

After that, I go ahead and add the following snippet to my SEO component inside the header tag:

```javascript
<script type="text/javascript" src="/rum-tracking.js"></script>
```

After that, I make a commit, cut a branch and push and then raise a PR which kicks off a deployment.

## Looking at the results

Stepping through the results on the first pane, 1.1k ms which is 1.1 seconds - reasonable but I'm no web dev so most certainly could be better.

![Performance](/img/blog/cloudwatch-rum/performance.png)

Mostly good on the web vitals although the cummulative layout shift needs attention.

![Web vitals](/img/blog/cloudwatch-rum/web-vitals.png)

Mostly good on the page load steps although it would be good to address the DOM processing time!

![Page loads](/img/blog/cloudwatch-rum/page-loads.png)


I hope you found this useful - and thanks for playing along!
