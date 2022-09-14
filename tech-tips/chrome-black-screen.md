---
# Common-Defined params
title: "Google Chrome Black Screen Fix | Windows"
date: "2020-03-03T02:22:35+08:00"
description: "Guide to fix Google Chrome Black Screen on Windows."
categories:
  - "Chrome"
  - "Windows"
tags:
  - "google chrome black screen"
  - "chrome black screen"
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
Fix Google Chrome's black screen issue on Windows.
<!--more-->
Did you have something like this when you opened Google Chrome?  
<!--more-->
![0](/img/chrome-black-screen/0.png)
<!--more-->
The fix for this problem is to **clear Google Chrome's Shader Cache**.
***
## Causes
* You installed a new graphics card.
* Some files in the shader cache are corrupt.
***
## Clear the Shader Cache
1. Make sure that Google Chrome is closed.
2. Open a File Explorer (or Windows Explorer) window.
3. Put **`C:\Users\<username>\AppData\Local\Google\Chrome\User Data\ShaderCache\GPUCache`** in the Address bar. Press Enter.  
*Note: Replace \<username\> with your user's name. In this case, my user's name is Administrator.*  
![1](/img/chrome-black-screen/1.png)
4. Press **Ctrl+A** and then **Shift+Delete** and click **Yes** to delete everything in the Shader Cache.
![2](/img/chrome-black-screen/2.png)
5. Re-open Google Chrome. It should work normally.
***
# Conclusion
Congratulations! You have fixed Google Chrome's black screen. You will not be suprised anymore when it happens again.
