---
# Common-Defined params
title: "Chocolatey Package Manager | Windows 10"
date: "2020-02-19T17:17:48+08:00"
description: "Guide to install the Chocolatey Package Manager in Windows 10"
categories:
  - "Windows"
tags:
  - "chocolatey"
  - "windows 10 install chocolatey"
  - "chocolatey windows 10"
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
A package manager automates the process of installing, upgrading, configuring, and removing applications for an operating system in a consistent manner.
<!--more-->
People usually install software by opening a browser, going to the software's website and finally downloading the software and then install it.
By using a package manager, you just use the package manager to search for the software you need, then install it. Easier, right?
<!--more-->
***
## Install Chocolatey
1. Right-click the **Start** button (the Windows icon). Select **Windows PowerShell (Admin)**.  
    ![1](/img/win10-install-chocolatey/1.png)
2. Copy this command:  
`Set-ExecutionPolicy Bypass -Scope Process -Force; iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex`  
then paste it to the Windows PowerShell window by right-clicking a blank space in the window. Press **Enter**.  
    ![2](/img/win10-install-chocolatey/2.png)
***
## Installing a software using Chocolatey
1. Open a **Command Prompt** or **Windows PowerShell** window.
2. Type `choco search <package name>`. Press **Enter**.  
For example: I want to install the **Steam** gaming platform. I will type: `choco search steam`.  
    ![3](/img/win10-install-chocolatey/3.png)
3. If it exists, then you can install the software by typing `choco install <package name>`.  
Example: `choco install steam`  
Optional: Add `-y` to the command to say "yes" to all of the questions (prompts). `choco install steam -y`  
    ![4](/img/win10-install-chocolatey/4.png)
4. You can find the software that you installed in the Start menu.
***
## Uninstalling software that was installed using Chocolatey
* To uninstall software, type `choco uninstall <package name>`.  
Example: `choco uninstall Steam`  
    ![5](/img/win10-install-chocolatey/5.png)
***
# Conclusion
Using a package manager makes installing software easier. For more information regarding **Chocolatey**, visit **https://chocolatey.org/docs**.
