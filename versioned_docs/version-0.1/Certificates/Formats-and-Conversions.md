---
draft: false
id: Formats_and_Conversions
title: Formats and Conversions
sidebar_label: Formats & Converting
sidebar_position: 3
pagination_label: Request Cert from internal CA
description: Requesting a Certificate from an Internal Certificate Authority.
toc_max_heading_level: 4
custom_edit_url:
tags: [Certificates]
---

## Certificate Formats

All you need to know is that there are several file extension types and encoding formats. Plus, in order to successfully install an SSL on your server, you need to know which type exactly your server or device requires.

### X.509 certificate encoding formats and extensions

- .pem, *.crt, *.ca-bundle, *.cer, *.p7b, *.p7s files contain one or more X.509 digital certificate files that use base64 (ASCII) encoding. You get one of those in a zip file.

You may also encounter *.pfx files. This is an archive file format for storing several cryptographic objects in a single file. In the scope of SSL certificates for SSL/TLS client and SSL/TLS web server authentication, a .pfx file must contain the end-entity certificate (issued for your domain), a matching private key, and may optionally include an intermediate certification authority (a.k.a. a CA Bundle). All this is wrapped up in a single file which is then protected with a pfx password. A Private key must be kept secret and is something that you generate alongside with the certificate signing request (CSR) by using an available tool.

### PEM (Base64 (ASCII))

A PEM file is a text format, the pem file contains the certificates inforamtion in a Hash format, which can be placed into an application.

- .pem
- .crt
- .ca-bundle

You can decode the Hash using a tool such as this online one, paste the text into the tool for it to show you the information. https://www.sslshopper.com/certificate-decoder.html

![Covernsions001](@site/static/img/Docs/Certificates/formats-&-conversions/formats&conversions-001.jpeg)

You can also do this using OpenSSL from your computer with the command openssl x509 -in certificate.crt -text -noout

### PKCS#7 (Base64 (ASCII))

Are mostly used in Windows or Java-based server environments (e.g. Internet Information Server (IIS), MS Exchange server, Java Tomcat, etc). PKCS#7 certificate file includes the end-entity certificate (the one issued to your domain name), plus one or more trusted intermediate certification authority files.

- .p7b
- .p7s

### DER (Binary)

- .der
- .cer

These files are very often used for Microsoft IIS services.

### PKCS#12 (Binary)

- .pfx
- .p12

## Convertion to different formats

### Open SSL

### Installing Open SSL

Install Chocolatey (Package Manager), Link to document .

### Using Open SSL

### Before you begin

1. **Create a folder** and place the pfx file into the folder.
2. To load openssl, **open cmd as admin**, navigate to “**C:\Program Files\OpenSSL-Win64**”, run the **start.bat** file to launch openssl.
3. Change to the folder containing the pfx file and run the following commands.

### PFX file with separate key file

Follow the guidance in the above section before proceeding.

Type the following commands into your admin command prompt.

`openssl pkcs12 -in nameofyourcertificate.pfx -nocerts -nodes -out privatekey.key` `openssl pkcs12 -in nameofyourcertificate.pfx -clcerts -nokeys -out certificate.cer`

This will create a privatekey.key file (containing the private keys) and certificate.cer (containing the certificate).

### PFX to PEM with Private Key File

[Stack OverFlow link](https://stackoverflow.com/questions/15413646/converting-pfx-to-pem-using-openssl).

Follow the guidance in the [Before you begin](https://github.com/BassJamm/The-IT-Knowledge-base/blob/main/docs/Certificates/Formats%20%26%20Conversion.md#before-you-begin) section above before proceeding.

To convert a PFX file to a PEM file that contains both the certificate and private key (you'll need the private key for the PFX file to do this).

`openssl pkcs12 -in filename.pfx -out cert.pem -nodes`

To convert a PFX file to separate public and private key PEM files (you'll need the private key for the PFX file to do this):

Extracts the private key form a PFX to a PEM file:

`openssl pkcs12 -in filename.pfx -nocerts -out key.pem`

Exports the certificate (includes the public key only):

`openssl pkcs12 -in filename.pfx -clcerts -nokeys -out cert.pem`

Removes the password (paraphrase) from the extracted private key (optional):

`openssl rsa -in key.pem -out server.key`