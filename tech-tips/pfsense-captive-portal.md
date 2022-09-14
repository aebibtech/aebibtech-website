---
# Common-Defined params
title: "pfSense Captive Portal Setup"
date: "2020-02-17T15:03:31+08:00"
description: "pfSense Captive Portal Setup"
categories:
  - "Networking"
tags:
  - "pfsense"
  - "captive portal"
  - "wifi security"
  - "limit wifi time"
draft: true
  #menu: main # Add page to a menu. Options: main, footer

# Theme-Defined params
#comments: true # Enable/disable Disqus comments for specific post
#authorbox: false # Enable/disable Authorbox for specific post
#toc: true # Enable/disable Table of Contents for specific post
#mathjax: true # Enable/disable MathJax for specific post
#related: true # Enable/disable Related content for specific post
#featured:
#  url: image.jpg # relative path of the image
#  alt: A scale model of the Eiffel tower # alternate text for the image
#  caption: Eiffel tower model # image caption
#  credit: Unknown author # image credit
#  previewOnly: false # show only preview image (true/false)
---
Have you seen something like this when you connect to a free Wi-Fi hotspot?  
![sample](/img/pfsense-captive-portal/sample.jpg)
<!--more-->
This is a **captive portal**. A captive portal is a Web page that the user of a public-access network is obliged to view and interact with before access is granted. Captive portals are typically used by business centers, airports, hotel lobbies, coffee shops, and other venues that offer free Wi-Fi hot spots for Internet users.
<!--more-->
My reasons for implementing a captive portal:
 * To prevent clever neighbors from connecting to my network.
 * To limit my youngest brother's screen time. Excessive screen time caused my brother's eyesight deterioration and distraction while studying.
<!--more-->
We will be using the Captive Portal feature of pfSense for this guide. Refer to my previous **[guide](/guides/pfsense-gaming-setup)** for setting up pfSense if you don't have set up one yet.  
We will implement permanent users, temporary users, and time limits for each user in this guide.
***
## Set up Captive Portal

***
## Set up Permanent Users

***
## Set up Temporary Users using Vouchers
