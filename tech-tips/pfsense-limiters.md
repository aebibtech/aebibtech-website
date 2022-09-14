---
# Common-Defined params
title: "pfSense Limiters for Online Gaming"
date: "2020-02-12T01:55:16+08:00"
description: "Guide to set up limiters on pfSense for onlien gaming."
categories:
  - "Networking"
  - "pfSense"
tags:
  - "limiters"
  - "pfsense limiters"
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
Eliminate lags while gaming at home!
<!--more-->
Are you tired of high pings while gaming? Having to wait for them to sleep just to play your favorite online game? Then this guide is for you!  
We will be using the limiters feature of pfSense to end your gaming misery.
<!--more-->
**There is one downside to using limiters, there is no way to limit torrents!**
***
## Setting up Aliases
1. Right-click **[this](/aliases.xml)** link and click **Save link as** and then **Save** to a folder that you can remember.
2. Go to **Diagnostics > Backup & Restore**.
3. In the **Restore Backup** section, select the following:
    * Restore Area: Aliases
    * Configuration file: **[aliases.xml](/aliases.xml)** - the one that you saved in Step 1 of **Setting up Aliases**.
4. Click **Restore Configuration**. 
    ![pfsense-limiters-1](/img/pfsense-gaming-setup/pfsense-limiters-1.png)
***
## Setting up Limiters
1. Open a new tab and go to https://speedtest.net (or any speed testing site) to check your upload and download speeds.
2. Go to **Firewall > Traffic Shaper**.
3. Go to **Limiters**.
4. Click **New Limiter**.
5. Set the following:
    * Check **Enable limiter and its children**.
    * Name: **Download**
    * Bandwidth: **75% of Download Speed**
6. Click **Save** at the bottom of the page.
7. Click **Apply Changes** at the top of the page.
8. Repeat Steps 5,6,7 for **Upload**.
    ![pfsense-limiters-5](/img/pfsense-gaming-setup/pfsense-limiters-5.png)
    
***
## Setting up Firewall Rules
1. Go to **Firewall > Rules**. Click **LAN**.
2. Click the **Add** button with the up arrow.
3. Set the following:
    * Protocol: **TCP/UDP**
    * Destination Port Range:
        * From: **(other)** In the **Custom** Field, type **BrowsePorts**.
        * To: **(other)** In the **Custom** Field, type **BrowsePorts**.
4. Click **Display Advanced**.
    ![pfsense-limiters-fr-5](/img/pfsense-gaming-setup/pfsense-limiters-fr-5.png)
5. Set the following under **Advanced Options**:
    * In/Out pipe:
        * First box: **Upload**
        * Second box: **Download**
6. Click **Save** at the bottom of the page.
     ![pfsense-limiters-fr-6](/img/pfsense-gaming-setup/pfsense-limiters-fr-6.png)
7. Click **Apply Changes** at the top of the page.
8. Go to **Status > Filter Reload**. Click **Reload Filter**.
***
# Conclusion
Try to play an online game while watching YouTube or Netflix. If it does not lag (the ping is low), then **Congratulations!**  
Say goodbye to high pings and lags while gaming online!
