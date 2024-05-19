"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[9359],{9219:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=i(4848),n=i(8453);const a={draft:!1,id:"Request_a_Certificate_from_internal_CA",title:"Request Certificate from internal CA",sidebar_label:"Request Cert from internal CA",sidebar_position:3,pagination_label:"Request Cert from internal CA",description:"Requesting a Certificate from an Internal Certificate Authority.",toc_max_heading_level:4,custom_edit_url:null,tags:["Certificates"]},s=void 0,o={id:"Certificates/Request_a_Certificate_from_internal_CA",title:"Request Certificate from internal CA",description:"Requesting a Certificate from an Internal Certificate Authority.",source:"@site/docs/Certificates/Request-cert-from-internal-ca.md",sourceDirName:"Certificates",slug:"/Certificates/Request_a_Certificate_from_internal_CA",permalink:"/docs/Certificates/Request_a_Certificate_from_internal_CA",draft:!1,unlisted:!1,editUrl:null,tags:[{label:"Certificates",permalink:"/docs/tags/certificates"}],version:"current",lastUpdatedAt:1716046713e3,sidebarPosition:3,frontMatter:{draft:!1,id:"Request_a_Certificate_from_internal_CA",title:"Request Certificate from internal CA",sidebar_label:"Request Cert from internal CA",sidebar_position:3,pagination_label:"Request Cert from internal CA",description:"Requesting a Certificate from an Internal Certificate Authority.",toc_max_heading_level:4,custom_edit_url:null,tags:["Certificates"]},sidebar:"tutorialSidebar",previous:{title:"Request Cert from internal CA",permalink:"/docs/Certificates/Formats_and_Conversions"},next:{title:"Network Security Groups",permalink:"/docs/Microsoft Azure/Networking/Network Security Groups"}},c={},l=[{value:"Generating a CSR",id:"generating-a-csr",level:2},{value:"Submitting the request to the CA",id:"submitting-the-request-to-the-ca",level:2},{value:"Completing the Request",id:"completing-the-request",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"generating-a-csr",children:"Generating a CSR"}),"\n",(0,r.jsx)(t.p,{children:"Generate a CSR from another server, doing this from IIS is a tried and tested method."}),"\n",(0,r.jsx)(t.h2,{id:"submitting-the-request-to-the-ca",children:"Submitting the request to the CA"}),"\n",(0,r.jsx)(t.admonition,{title:"Certificate Authority websi\xdfte URL",type:"tip",children:(0,r.jsxs)(t.p,{children:["Enter the address of your CA followed by ",(0,r.jsx)(t.code,{children:"/certsrv"}),"\xa0for example\xa0",(0,r.jsx)(t.code,{children:"http://ca server name/certsrv"}),"\xa0in the Address bar."]})}),"\n",(0,r.jsxs)(t.p,{children:["Open a\xa0",(0,r.jsx)(t.strong,{children:"web browser"}),".\nBrowse to your\xa0",(0,r.jsx)(t.strong,{children:"Certificate Authority website"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image1",src:i(5391).A+"",width:"2000",height:"880"})}),"\n",(0,r.jsx)(t.p,{children:"Click\xa0Request a Certificate. Navigate to your Certificate Authorities certsrv URL."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image1",src:i(8082).A+"",width:"2000",height:"964"})}),"\n",(0,r.jsx)(t.p,{children:"Click\xa0submit an advanced certificate request."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image1",src:i(8937).A+"",width:"2000",height:"1745"})}),"\n",(0,r.jsx)(t.p,{children:"Paste in the CSR."}),"\n",(0,r.jsx)(t.admonition,{title:"Certificate template",type:"tip",children:(0,r.jsx)(t.p,{children:"Make sure to change the template you want to use if that is applicable."})}),"\n",(0,r.jsx)(t.h2,{id:"completing-the-request",children:"Completing the Request"}),"\n",(0,r.jsx)(t.p,{children:"Your certificate should be approved almost instantly and some download options will appear. Select whatever download option is best for you; I'd suggest renaming the certificate file you download, it'll have a generic name otherwise."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image1",src:i(7315).A+"",width:"2000",height:"1196"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"The chain option downloads the Certificate Authority certs (Root and Sub-CAs in the chain) as well, all the way back to the root ca."})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5391:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/internal-ca-001-920ad1710a42e1ddd750c4841555b425.jpeg"},8082:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/internal-ca-002-f40b4ad024f90ccf7a248bcec52da458.jpeg"},8937:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/internal-ca-003-6f0684cb7b10fe5601ca3171687eaf3d.jpeg"},7315:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/internal-ca-005-c389079d8eaf1c0d8bb36f910de83599.jpeg"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var r=i(6540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);