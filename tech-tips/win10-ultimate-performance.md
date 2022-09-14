---
# Common-Defined params
title: "Ultimate Performance Power Plan | Windows 10"
date: "2020-03-03T02:46:24+08:00"
description: "Guide to enable the Ultimate Performance Power Plan on Windows 10."
categories:
  - "Windows"
tags:
  - "windows 10 ultimate performance power plan"
  - "windows 10 ultimate performance"
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
Squeeze more performance out from your PC that is running Windows 10.
<!--more-->
Windows 10's Balanced power plan is optimized to let the PC save power. This is useful especially for laptops that has a battery. Desktops don't necessarily need this feature. Unless you want to save power. The Ultimate Performance power plan is a new feature in Windows 10 that was designed for high-end desktops.
<!--more-->
Your computer will use all the power it can in Ultimate Performance mode to make sure that its hardware runs at the best possible performance it can. It essentially disables every single power-saving feature imaginable that lets you enjoy a slight performance boost.

The head of Windows Insider, Dona Sarkar, explains some of the more technical aspects:

>This new policy builds on the current High-Performance policy, and it goes a step further to eliminate micro-latencies associated with fine grained power management techniques. As the power scheme is geared towards reducing micro-latencies, it may directly impact hardware and consume more power than the default balanced plan.
<!--more-->
The term “micro-latencies” is used to describe the “warm-up period” that your hardware goes through when it needs more power. The operating system is fine-tuning the power output to match the needs of the hardware. There will be a very tiny delay between the time the OS realizes that a component needs to draw more power and the time it gets the extra power.
<!--more-->
The new power plan is available only for Windows 10 Pro for Workstations. It is hidden for Windows 10 Pro and below. However, it can be enabled from the command line.
***
## Unhide the Ultimate Performance Power Plan
**Skip this step if you have Windows 10 Pro for Workstations.**
1. Press the **Start** button. Type `command`. Under Command Prompt, click **Run as Administrator**. The UAC prompt will appear. Just click Yes.  
![1](/img/win10-ultimate-performance/1.png)  
2. Type `powercfg /l` in the Command Prompt to print the list of available power plans.
3. Copy and paste this command to the Command Prompt then press Enter:  
`powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61`  
![2](/img/win10-ultimate-performance/2.png)  
***
## Enabling the Ultimate Performance Power Plan
1. Type `control` in the Command Prompt and press Enter. This will open the Control Panel.
2. Go to **System and Security - Power Options**.
3. Click the arrow at the right of *Show additional plans*.
4. Finally, select the **Ultimate Performance** power plan.
![3](/img/win10-ultimate-performance/3.png)  
***
# Conclusion
Congratulations! You have enabled the Ultimate Performance power plan on Windows 10. Doing this will let you squeeze out more performance out of your PC.
