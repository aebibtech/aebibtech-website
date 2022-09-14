---
# Common-Defined params
title: "Enable the Administrator account in Windows 10"
date: "2020-02-19T16:17:50+08:00"
description: "Guide to enable the Administrator account in Windows 10"
categories:
  - "Windows"
tags:
  - "enable administrator account windows 10"
  - "enable admin account"
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
The Administrator account in Windows 10 is disabled by default for security reasons.
<!--more-->
Enable the Administrator account if you have any sane reason to do so.  
The fastest way to do it is through the command line.
<!--more-->
***
## Enabling the Administrator Account
1. Click the **Start** button (the Windows icon).
2. Type **command**. Press Enter or click **Command Prompt** in the list.  
    ![1](/img/win10-admin-account/1.png)
3. At the **Command Prompt**, type **net user administrator /active:yes**.  
    ![2](/img/win10-admin-account/2.png)
***
# Conclusion
You should now be able to login with the Administrator account. Make sure to change the password to something secure!
