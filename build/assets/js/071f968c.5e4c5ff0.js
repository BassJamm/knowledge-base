"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[6799],{1816:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(4848),o=s(8453);const l={draft:!1,id:"Useful Conditional Access Policies",title:"Useful Conditional Access Policies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Useful CA Policies",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Useful CA Policies",tags:[],custom_edit_url:null,description:"Descibes the settings an uses of some good Conditional Access policies to setup."},t=void 0,c={id:"Microsoft Entra/Conditional Access/Useful Conditional Access Policies",title:"Useful Conditional Access Policies",description:"Descibes the settings an uses of some good Conditional Access policies to setup.",source:"@site/versioned_docs/version-0.1/Microsoft Entra/Conditional Access/Useful-Policies.md",sourceDirName:"Microsoft Entra/Conditional Access",slug:"/Microsoft Entra/Conditional Access/Useful Conditional Access Policies",permalink:"/docs/Microsoft Entra/Conditional Access/Useful Conditional Access Policies",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.1",sidebarPosition:1,frontMatter:{draft:!1,id:"Useful Conditional Access Policies",title:"Useful Conditional Access Policies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Useful CA Policies",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Useful CA Policies",tags:[],custom_edit_url:null,description:"Descibes the settings an uses of some good Conditional Access policies to setup."},sidebar:"tutorialSidebar",previous:{title:"Decom an Azure AD App",permalink:"/docs/Microsoft Entra/Applications/Decom an Azure AD App"}},r={},a=[{value:"Require a Compliant Windows Device",id:"require-a-compliant-windows-device",level:2},{value:"Require MFA for Admins",id:"require-mfa-for-admins",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'This doc outlines some useful "stock" CA policies that can be implemented at almost any organisation if they\'re not present already.'}),"\n",(0,i.jsx)(n.admonition,{title:"Microsoft Common CA Policies",type:"info",children:(0,i.jsxs)(n.p,{children:["You can find a list of common polices ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-admin-mfa",children:"here"}),", along with the settings and how to implement them.\nI have specifically only listed ones I have previously setup or come across."]})}),"\n",(0,i.jsx)(n.h2,{id:"require-a-compliant-windows-device",children:"Require a Compliant Windows Device"}),"\n",(0,i.jsx)(n.p,{children:"This policy will require the user to login\\access tenant resources from a device that is policy compliant with your organisation."}),"\n",(0,i.jsx)(n.p,{children:"Assignments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Users"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include: All Users  (Preferably target a group that has all users using Intune.)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Target Resources"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include: All Cloud Apps."}),"\n",(0,i.jsx)(n.li,{children:"Exclude: Intune and Intune Enrolment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditions"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Device Platforms: Windows (as an example)"}),"\n",(0,i.jsxs)(n.li,{children:["Locations:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include: All Locations."}),"\n",(0,i.jsx)(n.li,{children:"Exclude: Office Locations (for example)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Controls"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Grant: Device to be compliant (Select require one control.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"require-mfa-for-admins",children:"Require MFA for Admins"}),"\n",(0,i.jsx)(n.p,{children:"Admin accounts are often targeted for attacks so enforcing MFA is a good idea."}),"\n",(0,i.jsx)(n.p,{children:"Assignments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Select Users or workload identities"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include: Directory Roles or User accounts depending on the above selection."}),"\n",(0,i.jsx)(n.li,{children:"Exclude: Any break glass accounts."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Target Resources"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include: All Cloud Apps."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditions"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"None"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Controls"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Grant access, Require multifactor authentication."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const o={},l=i.createContext(o);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);