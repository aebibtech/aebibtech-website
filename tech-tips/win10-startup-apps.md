---
# Common-Defined params
title: "Manage Start Up Applications | Windows 10"
date: "2020-03-05T01:51:22+08:00"
description: "Guide for managing startup applications on Windows 10"
image: "/img/win10-startup-apps/slow-pc.png"
categories:
  - "Windows"
tags:
  - "windows 10 disable startup applications"
  - "win10 disable startup apps"
  - "windows 10 startup"
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
Manage the applications that start up when Windows 10 loads.
<!--more-->
![slow-pc](/img/win10-startup-apps/slow-pc.png)
<!--more-->
Having many applications that start up when Windows loads can cause delays which can affect your productivity. That delay would be a couple of seconds for PCs with a Solid State Disk as the boot drive while it can be several minutes for PCs with a Hard Disk Drive as the boot drive. Start up programs can be disabled to minimize the loading time of Windows 10 and make your PC usable as soon as possible.
***
## Warning
Proceed with caution. Disabling some start up applications may cause the applications that require those to malfunction!  
Check the publisher of your application. Applications with the same publisher might indicate that those depend on each other.
<!--more-->
![2](/img/win10-startup-apps/2.png)
***
## Disabling Start Up Applications using Task Manager
1. Right-click the **Taskbar** and select **Task Manager**.  
![1](/img/win10-startup-apps/1.png)  
2. Check the **Startup impact** of the application and also decide whether you need it or not on start up.
3. Go to the **Startup** tab. Right-click the application that will be disabled and select **Disable**.  
If you made a mistake and wish to revert it, just right-click the application again and select **Enable**.  
![3](/img/win10-startup-apps/3.png)  
***
## Disable Start Up Applications using Autoruns
You can use the Autoruns application from Sysinternals for more control of your start up applications.  
You can disable shell extensions, services and many more with this application.
1. Download Autoruns from **[here](https://live.sysinternals.com/autoruns.exe)**.
2. Open the file that you downloaded.
3. Uncheck by clicking the check box at the left side of the application to disable it.  
If you made a mistake and wish to revert it, just click the check box at the left side of the application again.  
![4](/img/win10-startup-apps/4.png)
***
# Conclusion
Minimizing the number of applications that start up can make the PC load quicker and be able to use it as soon as possible.
