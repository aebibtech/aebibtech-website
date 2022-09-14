---
# Common-Defined params
title: "pfSense Installation Guide"
date: "2020-02-11T22:54:38+08:00"
description: "Learn how to install pfSense"
categories:
  - "Networking"
  - "pfSense"
tags:
  - "pfsense"
  - "pfsense install"
#menu: main # Add page to a menu. Options: main, footer
#draft: true

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
pfSense is an open source firewall/router computer software distribution based on FreeBSD.
<!--more-->
It is installed on a physical computer or a virtual machine to make a dedicated firewall/router for a network. It can be configured and upgraded through a web-based interface, and requires no knowledge of the underlying FreeBSD system to manage.
<!--more-->
***
# What you will need:
## Hardware/Equipment
  - A PC or Laptop (usually at home you have Windows OS) for preparing the pfSense installer
  - PC with 2 LAN ports - This will serve as the pfSense router.
  - WiFi Router - pfSense router and other devices will be connected here.
  - At least 3 network cables.
  - 2GB (or more) USB Flash Drive/Stick (whatever you call it)
## Software
  - pfSense Installer (download [here][1])
  - Win32 Disk Imager (download [here][2])
  - 7-zip (download [here][3])
  
  [1]: https://sgpfiles.pfsense.org/mirror/downloads/pfSense-CE-memstick-2.4.4-RELEASE-p3-amd64.img.gz
  [2]: https://sourceforge.net/projects/win32diskimager/files/latest/download
  [3]: https://www.7-zip.org/a/7z1900-x64.exe
***
## Turn off Wi-Fi router's DHCP Server
Refer to your Wi-Fi router's manual for information regarding this. This will ensure that the devices get its configuration from the pfSense router.
***
## Prepare the pfSense Installer
1. Download and install Win32 Disk Imager (link above).
2. Download the pfSense Installer (link above). Select the USB Memstick Installer.
3. Install 7-zip. ***Skip this step if you already have it (or another archive software).***
4. Extract the pfSense Installer using 7-zip or another archive program.
5. Open Win32 Disk Imager.  
  ![win32diskimager](/img/pfsense-gaming-setup/main-w32di.jpeg)
6. Select the **extracted** pfSense Installer. It is an .img file.  
  ![pfsense.img](/img/pfsense-gaming-setup/select-pfsense-installer.PNG)
7. A make sure that you have selected the correct device(your USB drive). Click **Write**.  
  ![selected-pfsense-installer](/img/pfsense-gaming-setup/selected-pfsense-installer.PNG)
8. Click **Yes**.  
  ![warning-w32di](/img/pfsense-gaming-setup/warning-w32di.PNG)
9. Wait for the process to finish. Close Win32 Disk Imager.  
  ![write-successful](/img/pfsense-gaming-setup/write-successful.PNG)
***
## Install pfSense
<!--more-->
Now we will be installing pfSense.  
Connect the keyboard, monitor and the pfSense installer USB flash drive to the PC that you chose to use. Turn on (or restart) the PC.  
  
1. Boot the PC from the USB flash drive. Refer to your motherboard's manual to find out how.  
  ![boot-menu](/img/pfsense-gaming-setup/boot-menu.jpg)
2. Wait for it to reach this screen. Accept the notice by pressing **Enter**.  
  ![pfsense-install-1](/img/pfsense-gaming-setup/pfsense-install-1.png)
3. Select **Install** and press Enter.  
  ![pfsense-install-2](/img/pfsense-gaming-setup/pfsense-install-2.png)
4. Select your desired keymap. I will just select **Continue with default keymap** here since I use the US keymap and press Enter.  
  ![pfsense-install-3](/img/pfsense-gaming-setup/pfsense-install-3.png)
5. Select **Auto (UFS)** and press Enter.  
  ![pfsense-install-4](/img/pfsense-gaming-setup/pfsense-install-4.png)
6. Wait for the install to finish. When the install finishes, select **No** and press Enter.  
  ![pfsense-install-5](/img/pfsense-gaming-setup/pfsense-install-5.png)  
  ![pfsense-install-6](/img/pfsense-gaming-setup/pfsense-install-6.png)
7. Select **Shell** and press Enter.  
  ![pfsense-install-7](/img/pfsense-gaming-setup/pfsense-install-7.png)
8. Type **poweroff** and press Enter. The PC will shut down.  
  ![pfsense-install-8](/img/pfsense-gaming-setup/pfsense-install-8.png)
9. Unplug the pfSense installer USB flash drive. This will make sure that it boots from the disk where pfSense is installed when the PC is turned on.  
10. Connect the network cable from your Internet modem to one of the network ports in the pfSense router.
11. Connect the pfSense router to the WiFi router using a network cable.
12. Turn on the PC. Wait for it to completely load pfSense.  
***
## pfSense Initial Configuration
1. Type **2** and press Enter. Type the number of your LAN interface and press Enter. In this case, it is **2**.  
  ![pfsense-initial-1](/img/pfsense-gaming-setup/pfsense-initial-1.png)
2. Press Enter after typing each required information.
    1. Enter the desired LAN IP Address. Remember what you put in here. It will be used later.
    2. Enter the subnet bit count. This sets how many IP addresses are available for use. Refer to **[this](https://www.comparitech.com/net-admin/subnetting-guide/)** guide for more information.
    3. Leave the IPv4 upstream gateway blank.
    4. Leave the LAN IPv6 address blank unless you use one.
    5. Enable the DHCP server by typing **y**.
    6. Enter the start address of the IPv4 client address range in the format xxx.xxx.xxx.xxx.
    7. Enter the end address of the IPv4 client address range in the format xxx.xxx.xxx.xxx.
    8. Type **y** in the "Do you want to revert to HTTP as the webConfigurator protocol?" This will prevent errors in the web browser later.
    ![pfsense-initial-3](/img/pfsense-gaming-setup/pfsense-initial-3.png)
3. Connect a PC or laptop to the WiFi router using a network cable.
4. Try to browse a website (e.g. Facebook). If the website loads, then we can proceed to the next step.
5. Disconnect the monitor and the keyboard from the pfSense router.
6. Open your web browser (Google Chrome, Firefox, etc.). Type the LAN IP address that you put earlier. In this case, it is **192.168.78.254**. 
7. Login with the following credentials: username: *admin* password:  *pfsense*.
8. Click **Accept** in the blue dialog. You can read it if you want to do so.
9. Close the **Netgate Services and Support** by clicking on the **x**. You can purchase support from them if you need to.
10. Change your admin account password via the User Manager. Enter your password in the two password fields. Click **Save** at the bottom of the page.
11. Go to **System > Advanced > Firewall/NAT**. In the **Firewall Optimization**, select **Conservative**.
12. (Optional) If you forward ports a lot (for PS4 as an example), then set the **NAT Reflection for Port Forwards** to **Pure NAT**.
13. Click **Save** at the bottom of the page.
14. (Optional) If your WAN IP Address resides on a private network (e.g. 192.168.0.1). Do the following:
    * Go to **Interfaces > WAN**. At the bottom of the page, uncheck the **Block private addresses and loopback addresses** and the **Block bogon networks**.
    * Click **Save**.
    ![pfsense-initial-8](/img/pfsense-gaming-setup/pfsense-initial-8.png)
***
# Conclusion
Congratulations on your pfSense router! Having one gives you features that you do not normally find in your ISP router and cheap routers.
