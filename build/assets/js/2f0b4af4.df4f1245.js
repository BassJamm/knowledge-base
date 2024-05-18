"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[1922],{7528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),i=n(8453);const o={sidebar_position:1,id:"Decom an Azure AD App",title:"Decom an Azure AD App",description:"Suggested guidance for decommissioning an Azure AD App.",tags:["AzureAD","AppRegistrations"],custom_edit_url:"https://github.com/BassJamm/The-IT-Knowledge-base/"},r=void 0,a={id:"Microsoft Entra/Applications/Decom an Azure AD App",title:"Decom an Azure AD App",description:"Suggested guidance for decommissioning an Azure AD App.",source:"@site/versioned_docs/version-0.1/Microsoft Entra/Applications/Decom-Ent-App.md",sourceDirName:"Microsoft Entra/Applications",slug:"/Microsoft Entra/Applications/Decom an Azure AD App",permalink:"/docs/Microsoft Entra/Applications/Decom an Azure AD App",draft:!1,unlisted:!1,editUrl:"https://github.com/BassJamm/The-IT-Knowledge-base/",tags:[{label:"AzureAD",permalink:"/docs/tags/azure-ad"},{label:"AppRegistrations",permalink:"/docs/tags/app-registrations"}],version:"0.1",lastUpdatedAt:1716029867e3,sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Decom an Azure AD App",title:"Decom an Azure AD App",description:"Suggested guidance for decommissioning an Azure AD App.",tags:["AzureAD","AppRegistrations"],custom_edit_url:"https://github.com/BassJamm/The-IT-Knowledge-base/"},sidebar:"tutorialSidebar",previous:{title:"Network Security Groups",permalink:"/docs/Microsoft Azure/Networking/Network Security Groups"},next:{title:"Useful CA Policies",permalink:"/docs/Microsoft Entra/Conditional Access/Useful Conditional Access Policies"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Locate the App",id:"locate-the-app",level:2},{value:"Confirm the App is not longer used",id:"confirm-the-app-is-not-longer-used",level:2},{value:"Delete the App from Azure AD",id:"delete-the-app-from-azure-ad",level:2}];function p(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Must be an owner of the application or have admin privileges."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"locate-the-app",children:"Locate the App"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign in to the\xa0",(0,s.jsx)(t.strong,{children:"Azure portal"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Search and\xa0",(0,s.jsx)(t.strong,{children:"select"}),"\xa0the Azure Active Directory app."]}),"\n",(0,s.jsxs)(t.li,{children:["Under\xa0",(0,s.jsx)(t.strong,{children:"Manage"}),", select\xa0",(0,s.jsx)(t.strong,{children:"App registrations"}),"\xa0and select the application(Desktop Portal) that you want to configure."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"confirm-the-app-is-not-longer-used",children:"Confirm the App is not longer used"}),"\n",(0,s.jsx)(t.p,{children:"Prevent access via the app to determine it is not being used, change the following Application settings using the Azure AD portal."}),"\n",(0,s.jsx)(t.p,{children:"Overview Page"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Enabled for users to sign-in?"}),"\xa0- Set this setting to NO. With this off, the application cannot be used."]}),"\n",(0,s.jsx)(t.p,{children:"Users and Groups Page"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Remove all groups\\users"}),"\xa0(Screenshot them incase they need to be re-added)."]}),"\n",(0,s.jsx)(t.p,{children:"Permissions Page"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Remove all Admin and User consented permissions"}),"\xa0(Screenshot them incase they need to be re-added)."]}),"\n",(0,s.jsx)(t.h2,{id:"delete-the-app-from-azure-ad",children:"Delete the App from Azure AD"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["From the\xa0",(0,s.jsx)(t.strong,{children:"Overview page"}),", select\xa0",(0,s.jsx)(t.strong,{children:"Delete."})]}),"\n",(0,s.jsx)(t.li,{children:"Read the deletion consequences. Check the box if one appears at the bottom of the pane."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Select Delete"}),"\xa0to confirm that you want to delete the app."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);