---
draft: false
id: Generating CSRs
title: Generating CSRs
hide_title: false
hide_table_of_contents: false
sidebar_label: Generating CSRs
sidebar_position: 2
toc_max_heading_level: 4 
pagination_label: Generating CSRs
tags: [Certificates]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Reinstate admin privileges for a customer's Azure CSP subscriptions.
---

## What is a CSR?

:::tip What does it stand for?

CSR stands for Certificate signing request.

:::

The CSR contains information (e.g. common name, organization, country) the Certificate Authority (CA) will use to create your certificate. It also contains the public key that will be included in your certificate and is signed with the corresponding private key.

## Creating one (Windows IIS)

The most common method of generating or creating a CSR is via Internet Information Services (IIS), which is a microsoft product that runs on the Windows OS as part of a server installation.

:::tip What other methods are there?

There are lots of different methods to generate a CSR file, it depends on what operation system you're running. [Try this link for more information](https://support.globalsign.com/ssl/ssl-certificates-installation/certificate-signing-request-csr-overview).

:::

1. **Access the Server:** Remote Desktop (RDP) or log in to a Windows machine running IIS.
2. **Open IIS:** To open the Internet Information Services (IIS) Manager, simply type "IIS" in the Windows start menu search bar and click on the app when it appears.
3. **Select the Server:** Inside the IIS Manager, locate and click on the Server Name corresponding to your IIS instance.
4. **Manage Certificates:** In the center menu, navigate to the Security section and double-click on Server Certificates.
5. **Create Certificate Request:** Within the Server Certificates window, go to the Actions menu on the right and select Create Certificate Request.
6. **Complete Certificate Request:** The Request Certificate Wizard will appear. You will be prompted to enter specific information in the Distinguished Name Properties window. Fill in the required details as instructed.
7. **Proceed:** After entering the necessary information, click Next to continue the certificate request process.

:::caution Mandatory information
You must fill the Common Name in with the domain that you wish to cover with the certificate. If you wanted to create a certificate for "www.finepies.com", that is what must be in the Common Name field.
:::

8. In the Cryptographic Service Provider Properties window leave the top field as Microsoft RSA SChannel Cryptographic Provider.
9. Make sure the **minimum Bit length is set ot 2048** or higher.
10. Click **Next**.
11. **Save the text file** someone easy to find and you're done.

Take the CSR file to your certificate authority, internal or externally hosted and upload your CSR, you'll get a certificate back again.

## Final steps

Depending on what you want to use the certificate for, you may need to "complete" the certificate.

1. Access **IIS** again.
2. From the center menu **double-click Server Certificates** in the Security section.
3. Click **Complete Certificate Request**.
4. **Complete the Wizard** and it will have imported the certificate into the store you selected.

You'll now be able to export the certificate and the private key should you need to.