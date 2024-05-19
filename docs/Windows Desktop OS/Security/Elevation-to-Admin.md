---
draft: false
id: Elevate_to_Admin_with_UAC_Disabled
title: Elevate to Admin with UAC disabled
sidebar_label: Elevate to Admin with UAC disabled
sidebar_position: 3
pagination_label: Get around UAC and elevate to admin
description: Get around UAC and elevate to admin.
toc_max_heading_level: 4
custom_edit_url:
tags: [WindowsOS]
---

Press and hold down the Windows key on the keyboard and then, whilst holding the Windows key press the letter R.

A small box called “Run” should appear in the bottom left corner of the screen.

![UAC-Elevation](../../../static/img/Docs/WindowsDesktop/UAC-Elevation-001.png)

In the box, you want to type the following:

`Runas /user:azuread\username@domain.co.uk cmd`

![UAC-Elevation](../../../static/img/Docs/WindowsDesktop/UAC-Elevation-003.png)

Then, type PowerShell to launch the app within the same window.

![UAC-Elevation](../../../static/img/docs/WindowsDesktop/UAC-Elevation-002.png)

To launch PowerShell as an elevated prompt, in the window type `Start-Process PowerShell.exe -Verb RunAs` (the capitalisation doesn't matter.)
