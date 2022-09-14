---
# Common-Defined params
title: "Disable Startup Programs Delay | Windows 10"
date: "2020-04-13T14:06:43Z"
description: "Guide to Disable the Delay in Startup Programs on Windows 10"
categories:
  - "Windows"
tags:
  - "disable startup delay windows 10"
  - "disable startup delay"
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
Disable the delay before loading the startup programs in Windows 10.
<!--more-->
Windows 10 waits for the desktop to load before loading the startup programs by default. This delay can be disabled through the registry. However, it is undesirable to have such delay if your PC has a SSD since those are fast.
***
## Disable the Delay
Warning: Registry Editor is a powerful tool and misusing it can render your system unstable or even inoperable.  
1. Click the Start button. Search for "Registry" and select the **Registry Editor**.  
![1](/img/startup-delay-win10/1.png)
2. Click **Yes** on the User Account Control prompt.
3. Go to `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer`.  
![2](/img/startup-delay-win10/2.png)
4. Right-click the **Explorer** subkey and select **New - Key**.  
![3](/img/startup-delay-win10/3.png)
5. Name the new key **Serialize**.  
![4](/img/startup-delay-win10/4.png)
6. Select the **Serialize** subkey. Right-click on the blank white space. Select **New - DWORD (32-bit) Value**.
7. Right-click the new value, select **Rename** and name it `StartupDelayInMSec`.
8. Double-click the new value. Put **0** in the box and click **OK**.  
![6](/img/startup-delay-win10/5.png)
9. Restart the PC.
***
## One-click Method
1. Download the REG file below. Right-click it and select **Save link as...**.  
[Disable_StartupDelay.reg](/Disable_StartupDelay.reg)  
2. Double-click the downloaded file.
3. Click **Yes**.