---
# Common-Defined params
title: "Shutdown, Restart and Log Off Shortcuts | Windows"
date: "2020-02-19T00:08:30+08:00"
description: "Guide to create a shutdown desktop shortcut and pin it to the taskbar (optional) on Windows."
categories:
  - "Windows"
tags:
  - "windows 10 shutdown shortcut"
  - "shutdown shortcut"
  - "easy shutdown"
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
Make shut down, restart and log off visible on the desktop by creating shutdown, restart, and log off desktop shortcuts on Windows 10.
<!--more-->
Normally, shutting down, restarting or logging off a PC while using Windows 10 takes 2-3 clicks. One can pin those shortcuts to the taskbar for much more easier access. Just be careful not to click those while working.
<!--more-->
***
## Creating the Shortcuts
1. Right-click any empty space on the Desktop and go to **New > Shortcut**.  
    ![1](/img/win10-shutdown-shortcut/1.png)
2. In the *Type the location of the item*, put **shutdown /s /t 0 /f** then click **Next**.  
    ![2](/img/win10-shutdown-shortcut/2.png)
3. Put a name (whatever name you want) for the shortcut then click **Finish**.  
    ![3](/img/win10-shutdown-shortcut/3.png)
4. Right-click the shortcut. Click **Properties**.  
    ![4](/img/win10-shutdown-shortcut/4.png)
5. Click **Change Icon**.  
    ![5](/img/win10-shutdown-shortcut/5.png)
6. Click **OK**.  
    ![6](/img/win10-shutdown-shortcut/6.png)
7. Select an icon from the list below. Once you have selected an icon, click **OK**. You can also select icons from a different file by clicking **Browse** and selecting .ico, .exe, .dll files that contain icons.  
    ![7](/img/win10-shutdown-shortcut/7.png)
8. Click **OK**.  
    ![8](/img/win10-shutdown-shortcut/8.png)
9. Congratulations!  
    ![9](/img/win10-shutdown-shortcut/9.png)
10. Repeat steps 1-8 for the restart and log off icons. Just change the location in the *Type in the location of the item*.
    * For restart: **shutdown /r /t 0 /f**
    * For log off: **shutdown /l**
***
## Optional: Pin the Shortcuts to the Taskbar
1. Right-click the shortcut that you created then click **Pin to taskbar**.  
    ![10](/img/win10-shutdown-shortcut/10.png)
2. The shortcut will now be pinned to the Taskbar. You can now execute that pinned shortcut with a single click.  
    ![11](/img/win10-shutdown-shortcut/11.png)
3. Repeat steps 1 and 2 for restart and log off shortcuts if you want to.
***
# Conclusion
Enjoy faster shutdown, restart and log off actions with those desktop shortcuts! It might be helpful whenever one is in a hurry.
