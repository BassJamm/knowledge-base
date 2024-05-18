---
title: Microsoft Defender for Endpoint Woes
description: Windows services hating each other on Server 2012 R2.
slug: Defender-for-Endpoint-Woes
date: 2023-08-05T11:00
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [Defender,Azure]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

For the last 3 months our monitoring team at my workplace has been spammed with alerts about the Windows Defender Advanced Threat Protection Service has entered the "stopped" state for one 2012 R2 server.

Quickly followed about 6 minutes later with another alert saying, the service is okay.
<!--truncate-->
:::info Quick Social Plug

Check out my other post locations: -

- [HashNode Link](https://willh.hashnode.dev/)

:::

## The Investigation

From checking the alert, I could see the service was stopping and starting but, no real reason as to why it was doing this. This is when I turned to PowerShell (*still unsure of why I did this over trusty Event Viewer, just seems to be my default now*).

Quickly smashed out the below command to see what I could find.

This promptly spat out these errors.

After googling this (as any techy would), there are a lot of mentions of this error message all over the place with suggestions to do the following:-

1. Disable or uninstall any other AV products on the device.

2. Run a Full system scan for viruses.

3. Run a System File Checker scan from the command line, `sfc /scannow`.

4. Re-install the Defender for Endpoint on that device.

5. Update the OS to a new version (*A bit extreme mind you however, new OS versions have much better support for Defender, you don't need this service on Server 2016 and above, so it's still valid!*)

## What Solved It

The short answer is, I'm not 100% certain.

Our first port of call was to remove the *System Center Endpoint Protection* application, which we probably should have done before installing the *Defender for Endpoint* application to be honest.

Secondly, we off-boarded the appliance from Defedner and then on-boarded it again by doing the following: -

- Download the off-boarding script from your Defender portal.

  - In the navigation pane, select Settings &gt; Endpoints &gt; Device management &gt; Offboarding.

- Off-Board the Server using the script provided by Microsoft below.

  - `C:\Packages\Plugins\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\versionNo\Install.ps1.`

  - The command is, `Install.ps1 -OffboardingScript .\WindowsDefenderATPOffboardingScript_valid_until_*.cmd`

- Reboot the server.

- Check the Defender application is gone from Programs and Features and that the Services are gone. If not, manually uninstall using Programs and Features.

- On-Board the server again using the script provided by Microsoft. Command below.

  - `C:\Packages\Plugins\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\versionNo\Install.ps1.`

  - The command is, `.\Install.ps1 -OnboardingScript .\WindowsDefenderATPOnboardingScript_valid_until_*.cmd`

- Reboot the server.

Hopefully this helps somone!