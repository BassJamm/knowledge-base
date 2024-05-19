---
draft: false
id: destroy-mcafee
title: Uninstall McAfee
sidebar_label: Uninstall McAfee
sidebar_position: 3
pagination_label: Uninstall McAfee
description: Remove McAfee using Intune and PowerShell.
toc_max_heading_level: 4
custom_edit_url:
tags: [Intune,Apps,Uninstall]
---

:::note
[Blog post I stole the steps from](https://www.tbone.se/2021/03/05/mcafee-cleanup-with-intune/)
:::

## Creating the Uninstall package

1. Download [McAfee Consumer Product Removal Tool](https://download.mcafee.com/molbin/iss-loc/SupportTools/MCPR/MCPR.exe).
2. Start the downloaded **MCPR.exe** and then **Hold it open…**.
3. While this dialog is open, navigate to the unpacked source files in: `%localappdata%\temp`.
4. Copy the folder MCPR to a suitable place for packageing, for example `c:\temp\McAfeeRemover`.
5. **Close the** still open **McAfee Software** Removal tool by clicking cancel.
6. Create a Powershell script in the folder above, for example `c:\temp\McAfeeRemover\McAfeeRemover.ps1`.

:::warning
I had some issues using the most up to date removal tool, if the script keeps failing for no reason, I'd suggest searching the internet for an older version of the tool.
:::

```Powershell
<#  Pre-Reqs

    Follow guidance: https://www.tbone.se/2021/03/05/mcafee-cleanup-with-intune/
    
#>

# Run the cleanup tool
# Remove the older application installation versions of McAfee
$program= ".\McCleanup.exe"
$programArg= "-p StopServices,MFSY,PEF,MXD,CSP,Sustainability,MOCP,MFP,APPSTATS,Auth,EMproxy,FWdiver,HW,MAS,MAT,MBK,MCPR,McProxy,McSvcHost,VUL,MHN,MNA,MOBK,MPFP,MPFPCU,MPS,SHRED,MPSCU,MQC,MQCCU,MSAD,MSHR,MSK,MSKCU,MWL,NMC,RedirSvc,VS,REMEDIATION,MSC,YAP,TRUEKEY,LAM,PCB,Symlink,SafeConnect,MGS,WMIRemover,RESIDUE -v -s"
$process = Start-Process $program -ArgumentList $ProgramArg -passthru -Wait -NoNewWindow

# Remove the Microsoft Store apps from McAfee
$RemoveApp = 'Mcafee'
Get-AppxPackage -AllUsers | Where-Object Name -Match $RemoveApp | Remove-AppxPackage
Get-AppxPackage | Where-Object Name -Match $RemoveApp | Remove-AppxPackage
Get-AppxProvisionedPackage -Online | Where-Object PackageName -Match $RemoveApp | Remove-AppxProvisionedPackage -Online
```

## Create an IntuneWin package with the Microsoft Win32 Content Prep Tool

Catalog files are used to enable Win32 apps in Windows 10 S mode -- they are specific to Application Control which is the mechanism that S Mode uses to enforce and control applications. Lots of details on this at https://docs.microsoft.com/en-us/mem/intune/apps/apps-win32-s-mode.