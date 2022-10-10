---
# Common-Defined params
title: "Fix ThinkPad E580 Sound in Linux"
date: "2022-10-06T12:25:06+08:00"
description: "Fix ThinkPad E580 sound issues in Linux."
categories:
  - "Linux"
  - "linux"
  - "sound"
tags:
  - "thinkpad e580 sound linux"
  - "e580 sound linux fix"
  - "fix sound e580 linux"
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
In this guide, I will be sharing the steps that I did in order to fix my sound issues on my Lenovo ThinkPad E580 on Linux. I am currently running Nobara Linux (a Fedora-based distro). This should work with any mainstream distro.
<!-- more -->
***
## Problems with E580 Sound on Linux
1. Speakers does not produce sound. Sometimes, it does.
1. Sound output does not automatically switch to headphones when such is plugged in.
***
## The Fix
1. Open a terminal.
1. Paste this command:  
`sudo sh -c "echo options snd-hda-intel model=headphone-mic-pin >> /etc/modprobe.d/sound-fixup.conf"`
1. Press Enter.

## Regenerate the initramfs
Run the corresponding command for your distro.  
If your distro is not listed, refer to your distro's documentation on regenerating the initramfs.  
The common ones:  

For Fedora:  
`sudo dracut --regenerate-all --force`  

For Ubuntu:  
`sudo update-initramfs -u`  

For Arch:  
`sudo mkinitcpio -P`  

Restart your laptop afterwards. The sound on your Lenovo ThinkPad E580 should be better. The output will automatically switch to headphones when such is plugged, and to speakers when headphones is unplugged.