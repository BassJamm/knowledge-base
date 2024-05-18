"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[5194],{8474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(4848),o=t(8453);const r={title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",slug:"Defender-for-Endpoint-Woes",date:"2023-08-05T11:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Defender","Azure"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/Defender-for-Endpoint-Woes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-12-Defender-Woes/Microsoft-Defender-for-Endpoint-Woes.md",source:"@site/blog/2023-09-12-Defender-Woes/Microsoft-Defender-for-Endpoint-Woes.md",title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",date:"2023-08-05T11:00:00.000Z",tags:[{label:"Defender",permalink:"/blog/tags/defender"},{label:"Azure",permalink:"/blog/tags/azure"}],readingTime:1.3333333333333333,hasTruncateMarker:!0,authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],frontMatter:{title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",slug:"Defender-for-Endpoint-Woes",date:"2023-08-05T11:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Defender","Azure"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Azure ligthhouse Setup",permalink:"/blog/Setup-Azure-Lighthouse"}},d={authorsImageUrls:[void 0]},a=[{value:"The Investigation",id:"the-investigation",level:2},{value:"What Solved It",id:"what-solved-it",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'For the last 3 months our monitoring team at my workplace has been spammed with alerts about the Windows Defender Advanced Threat Protection Service has entered the "stopped" state for one 2012 R2 server.'}),"\n",(0,s.jsx)(n.p,{children:"Quickly followed about 6 minutes later with another alert saying, the service is okay."}),"\n",(0,s.jsxs)(n.admonition,{title:"Quick Social Plug",type:"info",children:[(0,s.jsx)(n.p,{children:"Check out my other post locations: -"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://willh.hashnode.dev/",children:"HashNode Link"})}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"the-investigation",children:"The Investigation"}),"\n",(0,s.jsxs)(n.p,{children:["From checking the alert, I could see the service was stopping and starting but, no real reason as to why it was doing this. This is when I turned to PowerShell (",(0,s.jsx)(n.em,{children:"still unsure of why I did this over trusty Event Viewer, just seems to be my default now"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Quickly smashed out the below command to see what I could find."}),"\n",(0,s.jsx)(n.p,{children:"This promptly spat out these errors."}),"\n",(0,s.jsx)(n.p,{children:"After googling this (as any techy would), there are a lot of mentions of this error message all over the place with suggestions to do the following:-"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Disable or uninstall any other AV products on the device."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run a Full system scan for viruses."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run a System File Checker scan from the command line, ",(0,s.jsx)(n.code,{children:"sfc /scannow"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Re-install the Defender for Endpoint on that device."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the OS to a new version (",(0,s.jsx)(n.em,{children:"A bit extreme mind you however, new OS versions have much better support for Defender, you don't need this service on Server 2016 and above, so it's still valid!"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-solved-it",children:"What Solved It"}),"\n",(0,s.jsx)(n.p,{children:"The short answer is, I'm not 100% certain."}),"\n",(0,s.jsxs)(n.p,{children:["Our first port of call was to remove the ",(0,s.jsx)(n.em,{children:"System Center Endpoint Protection"})," application, which we probably should have done before installing the ",(0,s.jsx)(n.em,{children:"Defender for Endpoint"})," application to be honest."]}),"\n",(0,s.jsx)(n.p,{children:"Secondly, we off-boarded the appliance from Defedner and then on-boarded it again by doing the following: -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Download the off-boarding script from your Defender portal."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the navigation pane, select Settings > Endpoints > Device management > Offboarding."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Off-Board the Server using the script provided by Microsoft below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"C:\\Packages\\Plugins\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\versionNo\\Install.ps1."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The command is, ",(0,s.jsx)(n.code,{children:"Install.ps1 -OffboardingScript .\\WindowsDefenderATPOffboardingScript_valid_until_*.cmd"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reboot the server."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the Defender application is gone from Programs and Features and that the Services are gone. If not, manually uninstall using Programs and Features."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On-Board the server again using the script provided by Microsoft. Command below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"C:\\Packages\\Plugins\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\versionNo\\Install.ps1."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The command is, ",(0,s.jsx)(n.code,{children:".\\Install.ps1 -OnboardingScript .\\WindowsDefenderATPOnboardingScript_valid_until_*.cmd"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reboot the server."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Hopefully this helps somone!"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);