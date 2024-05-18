"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[2580],{3724:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const r={draft:!1,id:"Formats_and_Conversions",title:"Formats and Conversions",sidebar_label:"Formats & Converting",sidebar_position:3,pagination_label:"Request Cert from internal CA",description:"Requesting a Certificate from an Internal Certificate Authority.",toc_max_heading_level:4,custom_edit_url:null,tags:["Certificates"]},o=void 0,a={id:"Certificates/Formats_and_Conversions",title:"Formats and Conversions",description:"Requesting a Certificate from an Internal Certificate Authority.",source:"@site/versioned_docs/version-0.1/Certificates/Formats-and-Conversions.md",sourceDirName:"Certificates",slug:"/Certificates/Formats_and_Conversions",permalink:"/docs/Certificates/Formats_and_Conversions",draft:!1,unlisted:!1,editUrl:null,tags:[{label:"Certificates",permalink:"/docs/tags/certificates"}],version:"0.1",sidebarPosition:3,frontMatter:{draft:!1,id:"Formats_and_Conversions",title:"Formats and Conversions",sidebar_label:"Formats & Converting",sidebar_position:3,pagination_label:"Request Cert from internal CA",description:"Requesting a Certificate from an Internal Certificate Authority.",toc_max_heading_level:4,custom_edit_url:null,tags:["Certificates"]},sidebar:"tutorialSidebar",previous:{title:"Generating CSRs",permalink:"/docs/Certificates/Generating CSRs"},next:{title:"Request Cert from internal CA",permalink:"/docs/Certificates/Request_a_Certificate_from_internal_CA"}},l={},c=[{value:"Certificate Formats",id:"certificate-formats",level:2},{value:"X.509 certificate encoding formats and extensions",id:"x509-certificate-encoding-formats-and-extensions",level:3},{value:"PEM (Base64 (ASCII))",id:"pem-base64-ascii",level:3},{value:"PKCS#7 (Base64 (ASCII))",id:"pkcs7-base64-ascii",level:3},{value:"DER (Binary)",id:"der-binary",level:3},{value:"PKCS#12 (Binary)",id:"pkcs12-binary",level:3},{value:"Convertion to different formats",id:"convertion-to-different-formats",level:2},{value:"Open SSL",id:"open-ssl",level:3},{value:"Installing Open SSL",id:"installing-open-ssl",level:3},{value:"Using Open SSL",id:"using-open-ssl",level:3},{value:"Before you begin",id:"before-you-begin",level:3},{value:"PFX file with separate key file",id:"pfx-file-with-separate-key-file",level:3},{value:"PFX to PEM with Private Key File",id:"pfx-to-pem-with-private-key-file",level:3}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"certificate-formats",children:"Certificate Formats"}),"\n",(0,t.jsx)(i.p,{children:"All you need to know is that there are several file extension types and encoding formats. Plus, in order to successfully install an SSL on your server, you need to know which type exactly your server or device requires."}),"\n",(0,t.jsx)(i.h3,{id:"x509-certificate-encoding-formats-and-extensions",children:"X.509 certificate encoding formats and extensions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:".pem, *.crt, *.ca-bundle, *.cer, *.p7b, *.p7s files contain one or more X.509 digital certificate files that use base64 (ASCII) encoding. You get one of those in a zip file."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"You may also encounter *.pfx files. This is an archive file format for storing several cryptographic objects in a single file. In the scope of SSL certificates for SSL/TLS client and SSL/TLS web server authentication, a .pfx file must contain the end-entity certificate (issued for your domain), a matching private key, and may optionally include an intermediate certification authority (a.k.a. a CA Bundle). All this is wrapped up in a single file which is then protected with a pfx password. A Private key must be kept secret and is something that you generate alongside with the certificate signing request (CSR) by using an available tool."}),"\n",(0,t.jsx)(i.h3,{id:"pem-base64-ascii",children:"PEM (Base64 (ASCII))"}),"\n",(0,t.jsx)(i.p,{children:"A PEM file is a text format, the pem file contains the certificates inforamtion in a Hash format, which can be placed into an application."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:".pem"}),"\n",(0,t.jsx)(i.li,{children:".crt"}),"\n",(0,t.jsx)(i.li,{children:".ca-bundle"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can decode the Hash using a tool such as this online one, paste the text into the tool for it to show you the information.\xa0",(0,t.jsx)(i.a,{href:"https://www.sslshopper.com/certificate-decoder.html",children:"https://www.sslshopper.com/certificate-decoder.html"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Covernsions001",src:n(6395).A+"",width:"2000",height:"1757"})}),"\n",(0,t.jsx)(i.p,{children:"You can also do this using OpenSSL from your computer with the command openssl x509 -in certificate.crt -text -noout"}),"\n",(0,t.jsx)(i.h3,{id:"pkcs7-base64-ascii",children:"PKCS#7 (Base64 (ASCII))"}),"\n",(0,t.jsx)(i.p,{children:"Are mostly used in Windows or Java-based server environments (e.g. Internet Information Server (IIS), MS Exchange server, Java Tomcat, etc). PKCS#7 certificate file includes the end-entity certificate (the one issued to your domain name), plus one or more trusted intermediate certification authority files."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:".p7b"}),"\n",(0,t.jsx)(i.li,{children:".p7s"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"der-binary",children:"DER (Binary)"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:".der"}),"\n",(0,t.jsx)(i.li,{children:".cer"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"These files are very often used for Microsoft IIS services."}),"\n",(0,t.jsx)(i.h3,{id:"pkcs12-binary",children:"PKCS#12 (Binary)"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:".pfx"}),"\n",(0,t.jsx)(i.li,{children:".p12"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"convertion-to-different-formats",children:"Convertion to different formats"}),"\n",(0,t.jsx)(i.h3,{id:"open-ssl",children:"Open SSL"}),"\n",(0,t.jsx)(i.h3,{id:"installing-open-ssl",children:"Installing Open SSL"}),"\n",(0,t.jsx)(i.p,{children:"Install Chocolatey (Package Manager), Link to document ."}),"\n",(0,t.jsx)(i.h3,{id:"using-open-ssl",children:"Using Open SSL"}),"\n",(0,t.jsx)(i.h3,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Create a folder"}),"\xa0and place the pfx file into the folder."]}),"\n",(0,t.jsxs)(i.li,{children:["To load openssl,\xa0",(0,t.jsx)(i.strong,{children:"open cmd as admin"}),", navigate to \u201c",(0,t.jsx)(i.strong,{children:"C:\\Program Files\\OpenSSL-Win64"}),"\u201d, run the\xa0",(0,t.jsx)(i.strong,{children:"start.bat"}),"\xa0file to launch openssl."]}),"\n",(0,t.jsx)(i.li,{children:"Change to the folder containing the pfx file and run the following commands."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"pfx-file-with-separate-key-file",children:"PFX file with separate key file"}),"\n",(0,t.jsx)(i.p,{children:"Follow the guidance in the above section before proceeding."}),"\n",(0,t.jsx)(i.p,{children:"Type the following commands into your admin command prompt."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"openssl pkcs12 -in nameofyourcertificate.pfx -nocerts -nodes -out privatekey.key"}),"\xa0",(0,t.jsx)(i.code,{children:"openssl pkcs12 -in nameofyourcertificate.pfx -clcerts -nokeys -out certificate.cer"})]}),"\n",(0,t.jsx)(i.p,{children:"This will create a privatekey.key file (containing the private keys) and certificate.cer (containing the certificate)."}),"\n",(0,t.jsx)(i.h3,{id:"pfx-to-pem-with-private-key-file",children:"PFX to PEM with Private Key File"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://stackoverflow.com/questions/15413646/converting-pfx-to-pem-using-openssl",children:"Stack OverFlow link"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Follow the guidance in the\xa0",(0,t.jsx)(i.a,{href:"https://github.com/BassJamm/The-IT-Knowledge-base/blob/main/docs/Certificates/Formats%20%26%20Conversion.md#before-you-begin",children:"Before you begin"}),"\xa0section above before proceeding."]}),"\n",(0,t.jsx)(i.p,{children:"To convert a PFX file to a PEM file that contains both the certificate and private key (you'll need the private key for the PFX file to do this)."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"openssl pkcs12 -in filename.pfx -out cert.pem -nodes"})}),"\n",(0,t.jsx)(i.p,{children:"To convert a PFX file to separate public and private key PEM files (you'll need the private key for the PFX file to do this):"}),"\n",(0,t.jsx)(i.p,{children:"Extracts the private key form a PFX to a PEM file:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"openssl pkcs12 -in filename.pfx -nocerts -out key.pem"})}),"\n",(0,t.jsx)(i.p,{children:"Exports the certificate (includes the public key only):"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"openssl pkcs12 -in filename.pfx -clcerts -nokeys -out cert.pem"})}),"\n",(0,t.jsx)(i.p,{children:"Removes the password (paraphrase) from the extracted private key (optional):"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"openssl rsa -in key.pem -out server.key"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6395:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/formats&conversions-001-0496c8cdf8af83994accbc4e4addfa14.jpeg"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);