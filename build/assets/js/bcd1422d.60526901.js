"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[7115],{7792:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=i(4848),t=i(8453);const r={draft:!1,id:"Harmful_Files_prompt",title:"Harmful files promtp on Entra joined device",sidebar_label:"Harmful files promtp on Entra joined device",sidebar_position:3,pagination_label:"Harmful files promtp on Entra joined device",description:"How to resolve the harmful files prompt on an azure ad joined device.",toc_max_heading_level:4,custom_edit_url:null,tags:["WindowsOS","Application","MDM"]},s=void 0,a={id:"Windows Desktop OS/App Management/Harmful_Files_prompt",title:"Harmful files promtp on Entra joined device",description:"How to resolve the harmful files prompt on an azure ad joined device.",source:"@site/docs/Windows Desktop OS/App Management/Harmful-Apps-Promtp.md",sourceDirName:"Windows Desktop OS/App Management",slug:"/Windows Desktop OS/App Management/Harmful_Files_prompt",permalink:"/docs/Windows Desktop OS/App Management/Harmful_Files_prompt",draft:!1,unlisted:!1,editUrl:null,tags:[{label:"WindowsOS",permalink:"/docs/tags/windows-os"},{label:"Application",permalink:"/docs/tags/application"},{label:"MDM",permalink:"/docs/tags/mdm"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,id:"Harmful_Files_prompt",title:"Harmful files promtp on Entra joined device",sidebar_label:"Harmful files promtp on Entra joined device",sidebar_position:3,pagination_label:"Harmful files promtp on Entra joined device",description:"How to resolve the harmful files prompt on an azure ad joined device.",toc_max_heading_level:4,custom_edit_url:null,tags:["WindowsOS","Application","MDM"]},sidebar:"tutorialSidebar",previous:{title:"Uninstall McAfee",permalink:"/docs/Microsoft Intune/App Management/destroy-mcafee"},next:{title:"Get around Microsoft Store Block",permalink:"/docs/Windows Desktop OS/App Management/Install_apps_from_MS_when_store_is_blocked"}},l={},d=[{value:"The Error message",id:"the-error-message",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Remediation",id:"remediation",level:2}];function p(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"the-error-message",children:"The Error message"}),"\n",(0,o.jsx)(n.p,{children:"This prompt will be shown to a user when access on-prem file shares."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"popup",src:i(6802).A+"",width:"616",height:"375"})}),"\n",(0,o.jsx)(n.h2,{id:"scenario",children:"Scenario"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Users have OneDrive Configured on their endpoints and an on-premise file server mapped."}),"\n",(0,o.jsx)(n.li,{children:"Authentication to the on-premise drive is done via WHfB."}),"\n",(0,o.jsx)(n.li,{children:"When moving documents between OneDrive and the on-premise file server. There\u2019s a windows prompt saying that these files might be harmful to your computer."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"remediation",children:"Remediation"}),"\n",(0,o.jsx)(n.p,{children:"Add references to the locations in the IE trusted sites locations using intune Policy."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Created a Device Configuration Profile, Settings catalog."}),"\n",(0,o.jsx)(n.li,{children:"Find the settings."}),"\n",(0,o.jsx)(n.li,{children:"Windows Components > Internet Explorer > Internet Control Panel > Security Page"}),"\n",(0,o.jsx)(n.li,{children:"Enter the info in the format below."}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:".sharepointonline.com, 2"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://autologon.microsoftazuread-sso.com",children:"https://autologon.microsoftazuread-sso.com"}),", 1"]}),"\n",(0,o.jsx)(n.li,{children:"file://*.customerdomain.co.uk, 1"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},6802:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/HarmfulFiles-b68cd6dbc327be35f2adf535b4a302bd.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);