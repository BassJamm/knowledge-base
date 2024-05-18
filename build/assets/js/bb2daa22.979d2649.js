"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[1391],{6337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const s={title:"Automate Scripts in Azure",description:"Setting up an Automation Account in Azure to script things.",slug:"Automate-scripts-in-Azure",date:"2023-10-27T15:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Azure","Automation","Scripting"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},r=void 0,a={permalink:"/blog/Automate-scripts-in-Azure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-27-Automation-Account/Setup-Automation-Account.md",source:"@site/blog/2023-10-27-Automation-Account/Setup-Automation-Account.md",title:"Automate Scripts in Azure",description:"Setting up an Automation Account in Azure to script things.",date:"2023-10-27T15:00:00.000Z",tags:[{label:"Azure",permalink:"/blog/tags/azure"},{label:"Automation",permalink:"/blog/tags/automation"},{label:"Scripting",permalink:"/blog/tags/scripting"}],readingTime:6.316666666666666,hasTruncateMarker:!0,authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],frontMatter:{title:"Automate Scripts in Azure",description:"Setting up an Automation Account in Azure to script things.",slug:"Automate-scripts-in-Azure",date:"2023-10-27T15:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Azure","Automation","Scripting"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,lastUpdatedAt:1716029867e3,prevItem:{title:"Backing up Resources in Azure",permalink:"/blog/Backing-up-resources-with-AzBackup"},nextItem:{title:"Azure ligthhouse Setup",permalink:"/blog/Setup-Azure-Lighthouse"}},l={authorsImageUrls:[void 0]},c=[{value:"What&#39;s my goal for this?",id:"whats-my-goal-for-this",level:2},{value:"Outline",id:"outline",level:2},{value:"Setup the Resource Group and Automation Account",id:"setup-the-resource-group-and-automation-account",level:2},{value:"Apply permissions to Managed(System assigned) Identity",id:"apply-permissions-to-managedsystem-assigned-identity",level:2},{value:"The command",id:"the-command",level:2},{value:"Setup Automation Runbook",id:"setup-automation-runbook",level:2},{value:"Install any Modules",id:"install-any-modules",level:2},{value:"Test Script",id:"test-script",level:2},{value:"Create the Script",id:"create-the-script",level:3},{value:"Test Script",id:"test-script-1",level:3},{value:"Setup the Schedule",id:"setup-the-schedule",level:2},{value:"Testing",id:"testing",level:2},{value:"Testing the script",id:"testing-the-script",level:3},{value:"Error handling",id:"error-handling",level:4},{value:"Confirm the data export",id:"confirm-the-data-export",level:3},{value:"Further notes",id:"further-notes",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this post, are some steps for setting up an Automation account for running scripts against Azure AD. As well as lessons and tips I learnt along the way."}),"\n",(0,o.jsx)(t.p,{children:"Azure Automation Accounts are a cloud-based service in Microsoft Azure designed to simplify and streamline routine IT management tasks. They provide an efficient way to automate, schedule, and orchestrate repetitive processes, helping organizations save time, reduce errors, and improve operational efficiency."}),"\n",(0,o.jsx)(t.h2,{id:"whats-my-goal-for-this",children:"What's my goal for this?"}),"\n",(0,o.jsx)(t.p,{children:"My situation is this: I frequently receive requests to generate reports from Azure AD and Intune (Endpoint Manager). These requests occur on a monthly or, in some cases, a weekly basis, especially when there's an ongoing issue being troublshooted that impacts the reporting."}),"\n",(0,o.jsx)(t.p,{children:"Each time I get a report request, I have to log into the environment, execute my script, and send the report via email to the same suspects. While this process may not seem overly burdensome, the scripts are on my machine (archaic I know), I wrote them and I think, that noone else should have to be running them manually!"}),"\n",(0,o.jsx)(t.p,{children:"To simplify this, I aim to automate the scripts on a monthly schedule and retain the flexibility to run them whenever needed."}),"\n",(0,o.jsx)(t.admonition,{title:"The Information from here on out.",type:"note",children:(0,o.jsx)(t.p,{children:"All of the informaiton below is from my setting this up for the 1st time and noting down what I have done and any issues I come across. If you want best practices etc, check out the Microsoft docs."})}),"\n",(0,o.jsx)(t.h2,{id:"outline",children:"Outline"}),"\n",(0,o.jsx)(t.admonition,{title:"Run As accounts deprecation",type:"danger",children:(0,o.jsx)(t.p,{children:"Run As accounts are being deprecated, managed identities are replacing this."})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Setup the Resource Group and Automation Account."}),"\n",(0,o.jsx)(t.li,{children:"Setup the Identity for the Automation Account, this is key to running scripts gainst Azure Active Directoy and Office 365 resources."}),"\n",(0,o.jsx)(t.li,{children:"Create ourselves a Runbook, that sits inside the Automation Account."}),"\n",(0,o.jsx)(t.li,{children:"Install the relevant modules for the code we want to run."}),"\n",(0,o.jsx)(t.li,{children:"Write ourselves a little script."}),"\n",(0,o.jsx)(t.li,{children:"Setup a schedule for the Runbook."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"setup-the-resource-group-and-automation-account",children:"Setup the Resource Group and Automation Account"}),"\n",(0,o.jsx)(t.admonition,{title:'Assumption of you "knowing what you are doing"',type:"note",children:(0,o.jsx)(t.p,{children:"I (maybe wrongly so) am assuming you have setup Azure resources before and know the basics of this process."})}),"\n",(0,o.jsx)(t.p,{children:"Before you charge into this part."}),"\n",(0,o.jsx)(t.p,{children:"Make sure you Select the same region as the resources you want to query, if the account is to query something else, like Azure AD or Office 365, the region is not so important. Also, have a good idea what your security requirments are for the Automation Account."}),"\n",(0,o.jsx)(t.p,{children:"Setup the Automation Account:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate to the Azure portal."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Search"})," for Automation Account in the search bar."]}),"\n",(0,o.jsxs)(t.li,{children:["Select the ",(0,o.jsx)(t.strong,{children:"Automation Account"})," option, ",(0,o.jsx)(t.strong,{children:"Click create"})," in the middle of the screen ",(0,o.jsx)(t.strong,{children:"or Click +Add"})," in the top left."]}),"\n",(0,o.jsx)(t.li,{children:"Fill in the necessary information."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"When you Select the Advanced Tab",type:"info",children:(0,o.jsx)(t.p,{children:"Here you can decide whether you want to use a System assigned or User Assigned Identity. Long story short, the System Assigned Identity can only be used by this one Automation Account, the User Assigned Identity can be used by multiple resources."})}),"\n",(0,o.jsx)(t.h2,{id:"apply-permissions-to-managedsystem-assigned-identity",children:"Apply permissions to Managed(System assigned) Identity"}),"\n",(0,o.jsx)(t.p,{children:"You'll need to apply the permissions to the Managed Identity using PowerShell unfortunatly, a Microsoft seem to have decided to make this difficult for us!"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://aztoso.com/security/microsoft-graph-permissions-managed-identity/.",children:"Reference for where this came from"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/powershell/module/azuread/new-azureadserviceapproleassignment?view=azureadps-2.0",children:"Microsoft reference for command"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Role names",type:"caution",children:(0,o.jsxs)(t.p,{children:["You'll need to find the correct role\\permission name that you want to assign using the script below. ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0",children:"Try this Microsoft doc for the Microosft Graph API permissions"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"the-command",children:"The command"}),"\n",(0,o.jsx)(t.p,{children:"The below is a script you can run but, you can run it line by line to see what is going on if that's more comfortable. The general gist is that you are applying the permissions from the Microsoft Graph App to your Managed Identity."}),"\n",(0,o.jsx)(t.p,{children:"Annotated the hell out of it as the script logic really confused me."}),"\n",(0,o.jsx)(t.admonition,{title:"Heads up!",type:"tip",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"It takes a few minutes for this change to show in the GUI."}),"\n",(0,o.jsx)(t.li,{children:"If the permission already exists the prompt will error on the final command."}),"\n"]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",metastring:"showLineNumbers",children:'\n# Your tenant id.\n$TenantID="Add your tenant ID"\n# Microsoft Graph App ID (DON\'T CHANGE).\n$GraphAppId = "00000003-0000-0000-c000-000000000000"\n# Name of the manage identity (same as the Logic App name).\n$DisplayNameOfMSI="Add display name of Enterprise App" \n# Check the Microsoft Graph documentation for the permission you need for the operation.\n$PermissionName = "Add your permission here" \n\n# Install the module (You need admin on the machine)\nInstall-Module AzureAD \n\n# Connect to Azure AD via tenant ID, you\'ll need an admin account to login with though.\nConnect-AzureAD -TenantId $TenantID\n# Collects the Target System Managed Identities information into the MSI variable.\n$MSI = (Get-AzureADServicePrincipal -Filter "displayName eq \'$DisplayNameOfMSI\'")\nStart-Sleep -Seconds 10\n# Store the Microsoft Graph API informaiton into the GraphServicePrincipal variable.\n$GraphServicePrincipal = Get-AzureADServicePrincipal -Filter "appId eq \'$GraphAppId\'"\n# Searches Microsoft Graph API for the value matching the PermissionName variable populated above and stores this in the AppRole Variable.\n$AppRole = $GraphServicePrincipal.AppRoles |  Where-Object {$_.Value -eq $PermissionName -and $_.AllowedMemberTypes -contains "Application"}\n# Assigned the permission from the Microsoft Graph API to the target Managed Identity.\nNew-AzureADServiceAppRoleAssignment -ObjectId $MSI.ObjectId -ResourceId $GraphServicePrincipal.ObjectId -Id $appRole.Id -PrincipalId $MSI.ObjectId\n'})}),"\n",(0,o.jsx)(t.h2,{id:"setup-automation-runbook",children:"Setup Automation Runbook"}),"\n",(0,o.jsx)(t.p,{children:'The Runbook is the container if you like for your script and anything that relates to the "task" of running it.'}),"\n",(0,o.jsx)(t.admonition,{title:"Runtime Version",type:"tip",children:(0,o.jsx)(t.p,{children:"Be extra careful of this, it cannot be changed after the fact and will limit the modules that will work with it to the runtime version you select (If that makes sense!)."})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Sign in to the Azure portal."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Search for"})," and Select ",(0,o.jsx)(t.strong,{children:"Automation Accounts"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["On the Automation Accounts page, ",(0,o.jsx)(t.strong,{children:"Select your Automation account"})," from the list."]}),"\n",(0,o.jsxs)(t.li,{children:["From the Automation account, ",(0,o.jsx)(t.strong,{children:"Select Runbooks"})," under Process Automation to open the list of runbooks."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click Create"})," a runbook and fill in the information below."]}),"\n",(0,o.jsx)(t.li,{children:"Click Create to create the runbook."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"install-any-modules",children:"Install any Modules"}),"\n",(0,o.jsx)(t.p,{children:"Here we need to install any PowerShell modules we want to use with our Scripts; make sure they match the runtime of your Runbooks."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Sign in to the Azure portal."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Search for"})," and Select ",(0,o.jsx)(t.strong,{children:"Automation Accounts"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["On the Automation Accounts page, ",(0,o.jsx)(t.strong,{children:"Select your Automation account"})," from the list."]}),"\n",(0,o.jsxs)(t.li,{children:["From the Automation account, ",(0,o.jsx)(t.strong,{children:"Select Modules"})," under Shared Resources."]}),"\n",(0,o.jsx)(t.li,{children:"In here you can see a list of currently installed modules and you can add more by Clicking on the +Add a module button."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You may find that you have to search around a bit for the module that you do actually want and when you do find the module you want, search for the command that you want to use, sometimes the module name is right but, the command is missing!"})}),"\n",(0,o.jsx)(t.h2,{id:"test-script",children:"Test Script"}),"\n",(0,o.jsx)(t.h3,{id:"create-the-script",children:"Create the Script"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate to your runbook."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click Edit"})," at the top."]}),"\n",(0,o.jsxs)(t.li,{children:["Here you can ",(0,o.jsx)(t.strong,{children:"enter your script"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Useful options on the left hand side to note:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"CMDLETS"}),", which you can use to find commands from the installed modules."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"ASSETS"}),", which will show you the various resources available to your runbooks which are saved within your automation account resource."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"test-script-1",children:"Test Script"}),"\n",(0,o.jsx)(t.p,{children:"Once your done and ready to test."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click on Test pane"})," at the top."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click Start"})," in the top left to being running the scrpt."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"I found it really hard to get my head around how this works for some reason. So expect that this may take quite a few tries to get right."}),"\n",(0,o.jsxs)(t.admonition,{title:"Storage Account Keys",type:"caution",children:[(0,o.jsx)(t.p,{children:"Before you can use the script as a base, you'll need to store the storage account key as a variable in your Automation account."}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Open your ",(0,o.jsx)(t.strong,{children:"Automation Account"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.strong,{children:"Variables"})," under Shared Resources."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Add a variable"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Create a new ",(0,o.jsx)(t.strong,{children:"string variable"}),"."]}),"\n"]}),(0,o.jsx)(t.p,{children:"See the script for how to reference these in your runbooks."})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",metastring:"showLineNumbers",children:'# Ensures you do not inherit an AzContext in your runbook\nDisable-AzContextAutosave -Scope Process | Out-Null\n\n#Storage Account Information \n$StorageACCKey = Get-AutomationVariable -Name \'stgacckey01\' \n$ContainerName = "Enter the blob container name"\n\n# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n\n$Users = Get-AzADUser | Select-Object DisplayName, Id, Mail, UserPrincipalName\n\nWrite-Output $Users\n\n# Exports the data in the $Users variable into a local environmental variable that will store the information whilst running in the Automation account. \n$Users | Export-Csv "$Env:temp\\Users.csv" -notypeinformation\n\n# Creates a new context to enable connection to the storage account. \n$Context = New-AzureStorageContext -StorageAccountName "whautomationfiledump" -StorageAccountKey $StorageACCKey\n\n# This copes the csv file in the $Env:temp/MFAState.csv variable and copies it to the blob. \nSet-AzureStorageBlobContent -Context $Context -Container $ContainerName -File "$Env:temp\\Users.csv" -Blob "Users.csv" -force\n'})}),"\n",(0,o.jsx)(t.admonition,{title:"In my experience",type:"tip",children:(0,o.jsxs)(t.p,{children:["The test window is not like a command promtp and will not output the commands running or anything at all apart from really confusing errors. Try to build error catching into your script, use the ",(0,o.jsx)(t.code,{children:"try, catch"})," commands to write the errors to the promtp for debugging. More in this in the testing section at the bottom."]})}),"\n",(0,o.jsx)(t.h2,{id:"setup-the-schedule",children:"Setup the Schedule"}),"\n",(0,o.jsxs)(t.p,{children:["This has been mostly regurgitated from ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/automation/shared-resources/schedules#create-a-new-schedule-in-the-azure-portal",children:"this Microsoft link here."})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Automation account, on the left-hand pane ",(0,o.jsx)(t.strong,{children:"Select Schedules"})," under Shared Resources."]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Add a schedule"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Select whether the schedule runs once or on a reoccurring schedule by Selecting Once or Recurring.","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["If you Select Once, ",(0,o.jsx)(t.strong,{children:"specify a start time"})," and then ",(0,o.jsx)(t.strong,{children:"Select Create"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["If you Select Recurring, ",(0,o.jsx)(t.strong,{children:"specify a start time"}),". For Recur every, ",(0,o.jsx)(t.strong,{children:"Select how often"})," you want the runbook to repeat. Select by hour, day, week, or month."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Press Create"})," to complete."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You must publish the runbook before you can assign the schedule to it."})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsx)(t.li,{children:"Head back to your Runbook."}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Link to schedule"}),"at the top."]}),"\n",(0,o.jsxs)(t.li,{children:["Click the option to ",(0,o.jsx)(t.strong,{children:"Link a schedule to your runbook"}),",  ",(0,o.jsx)(t.strong,{children:"Select the schedule"})," you created from the list."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click OK"})," to complete."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsx)(t.h3,{id:"testing-the-script",children:"Testing the script"}),"\n",(0,o.jsx)(t.h4,{id:"error-handling",children:"Error handling"}),"\n",(0,o.jsx)(t.p,{children:"The test pane window for the most part will not output useful errors or show you how the script is running. I'd suggest building error handling and status updates into your script if you wish during debugging, it will help immensely."}),"\n",(0,o.jsxs)(t.p,{children:["An example of the ",(0,o.jsx)(t.code,{children:"try, catch"})," command sytax is below."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",metastring:"showLineNumbers",children:'# Connect using a Managed Service Identity\ntry {\n    Connect-AzAccount -Identity\n}\ncatch{\n    Write-Output "Unable to login. Aborting."; \n    exit\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["I'd also suggest using ",(0,o.jsx)(t.code,{children:"write-output"})," all over the place to confirm progress and variables etc."]}),"\n",(0,o.jsx)(t.admonition,{title:"Shout out",type:"info",children:(0,o.jsx)(t.p,{children:"Shout out to the VS code module for Automation Accounts, it'll let you pull down the runbook contents and edit in VsCode and upload it again. Highly recommend using this."})}),"\n",(0,o.jsx)(t.h3,{id:"confirm-the-data-export",children:"Confirm the data export"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to your ",(0,o.jsx)(t.strong,{children:"storage account"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"File shares or Containers option"}),", wherever you saved your data to."]}),"\n",(0,o.jsxs)(t.li,{children:["Click into the share\\container, ",(0,o.jsx)(t.strong,{children:"find your file"})," and Click on the ",(0,o.jsx)(t.strong,{children:"3 dots"})," to the right of it."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Click View\\edit"}),", it should display a basic output of the file."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"further-notes",children:"Further notes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Run As accounts are being deprecated, this method is by far the easiest to use when trying to pull info from AzureAD and Office 365."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);