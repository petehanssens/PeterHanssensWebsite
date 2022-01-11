---
date: 2020-07-15T01:00:00.000Z
draft: false
title: "Setting up a streaming platform"
description: "How does one run OBS and Streamlab reliably in the cloud"
image: "/img/blog/streaming-platform/StreamingArchitecture.png"
tags: ["OBS","Twitch","YouTube",]
series: ["Community"]
categories: ["Blog"]
toc: true
---

# Getting started

Okay so let's get straight to it - this is what we are trying to achieve:

![](/img/blog/streaming-platform/StreamingArchitecture.png)


## AWS Workspaces

So firstly, you'll want to get yourself an AWS GraphicsPro Windows Workspace. These are quite powerful instances with 16 vCPU's, 122 gig of RAM and a GPU with 8 gig of video memory.

![](/img/blog/streaming-platform/workspaces.png)

WARNING: these things are expensive, they're either $1,232 per month in the Sydney region or $81 up front and $14.34 per hour so you'll want to use them sparingly!!!

## Things you need to install

- Download some media onto your Workspace
- VLC + NDI
- Setup OBS.Ninja
- Streamlabs for OBS

## Download some media onto your Workspace

It's important to have a few bits of media on your workspace to help with doing some nice scenes with OBS - you will get what I'm talking about when we get to that part.

Some suggestions:

- a png export of a slide from powerpoint to use as a holding slide.
- some royalty free background music
- a pre-recorded video of yourself - perhaps say something into your webcam for a few minutes!

## VLC setup

You will want to download and install VLC as well as the NDI plugin and this is probably the best blog to follow in that regard: https://www.newtek.com/blog/tips/vlc-media-player-and-newtek-ndi-vlc-plugin/

![](/img/blog/streaming-platform/VLC-logo.jpg)

## OBS Ninja setup

Getting setup with OBS Ninja couldn't be easier, simply go to this URL: https://obs.ninja/ and enter a unique room name that's easy to remember and voila, you're ready to roll. To access the director room, you'll need to use the following query string ?director=room_name

![](/img/blog/streaming-platform/obsNinja.png)

## Streamlabs setup

Okay here's where you will need to do some work. What we will need to setup is the following:

- scenes
- inputs

![](/img/blog/streaming-platform/streamlabs.png)
