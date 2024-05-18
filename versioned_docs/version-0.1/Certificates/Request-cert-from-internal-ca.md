---
draft: false
id: Request_a_Certificate_from_internal_CA
title: Request Certificate from internal CA
sidebar_label: Request Cert from internal CA
sidebar_position: 3
pagination_label: Request Cert from internal CA
description: Requesting a Certificate from an Internal Certificate Authority.
toc_max_heading_level: 4
custom_edit_url:
tags: [Certificates]
---

## Generating a CSR

Generate a CSR from another server, doing this from IIS is a tried and tested method.

## Submitting the request to the CA

1. Open a **web browser**.
2. Browse to your **Certificate Authority website**.

:::tip Certificate Authority website URL
Enter the address of your CA followed by `/certsrv` for example `http://ca server name/certsrv` in the Address bar.
:::

3. Click Request a Certificate. Navigate to your Certificate Authorities certsrv URL.
4. Click submit an advanced certificate request.

![Internal-ca-002](@site/static/img/docs/Certificates/Internal-ca/internal-ca-002.jpeg)

5. Paste in the CSR.

![Internal-ca-002](@site/static/img/docs/Certificates/Internal-ca/internal-ca-003.jpeg)

:::tip Certificate template
Make sure to change the template you want to use if that is applicable.
:::

![Internal-ca-002](@site/static/img/docs/Certificates/Internal-ca/internal-ca-004.jpeg)

## Completing the Request

Your certificate should be approved almost instantly and some download options will appear. Select whatever download option is best for you; I'd suggest renaming the certificate file you download, it'll have a generic name otherwise.

:::tip
The chain option downloads the Certificate Authority certs (Root and Sub-CAs in the chain) as well, all the way back to the root ca.
:::