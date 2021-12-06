---
date: 2021-12-06T01:00:00.000Z
date1: "2021-12-06:02:17+10:00"
draft: false
title: "Using touch id with AWS SSO"
tags: ["sso","mfa"]
series: ["Cloud"]
categories: ["Blog"]
toc: true
---

So a fellow AWS Hero recently tweeted that TouchID is now supported by AWS SSO, so of course, I wanted to give this a quick go:

<div class="center">

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I have MAJOR and BREAKING news: TouchID is now supported by AWS SSO as a MFA device when using Safari 🎉🎉🎉<br><br>Previously you could only use it from Chrome, but now it works from Safari too!</p>&mdash; Vlad Ionescu (he/him) (@iamvlaaaaaaad) <a href="https://twitter.com/iamvlaaaaaaad/status/1466747612674105350?ref_src=twsrc%5Etfw">December 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</div>

## Configuring multi factor auth

First up, I have to go to my Master account within the organisation, navigate to AWS SSO and tick security keys and built-in authenticators: 
![](/img/blog/touch-id-with-aws-sso/configure-multi-factor-auth.png)

## SSO MFA Devices
Next I head on over to login to AWS SSO and click on MFA Devices where I'm presented with a Register Device button: 
![](/img/blog/touch-id-with-aws-sso/mfa-devices.png)


## Register MFA Device
After clicking the register device button, I'm presented a dialog box with 3 options and of course, I'll choose the built-in authenticator for the Apple TouchId and follow the prompts to set it up: 
![](/img/blog/touch-id-with-aws-sso/register-mfa-device.png)

And that's it - log out and log back in with all that TouchId goodness - sooo good!
