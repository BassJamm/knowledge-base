---
draft: false
id: Useful Conditional Access Policies
title: Useful Conditional Access Policies
hide_title: false
hide_table_of_contents: false
sidebar_label:  Useful CA Policies
sidebar_position: 1
toc_max_heading_level: 4
pagination_label: Useful CA Policies
tags: []
custom_edit_url: 
description: Descibes the settings an uses of some good Conditional Access policies to setup.
---


This doc outlines some useful "stock" CA policies that can be implemented at almost any organisation if they're not present already.

:::info Microsoft Common CA Policies
You can find a list of common polices [here](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-admin-mfa), along with the settings and how to implement them.
I have specifically only listed ones I have previously setup or come across.
:::

## Require a Compliant Windows Device

This policy will require the user to login\access tenant resources from a device that is policy compliant with your organisation.

Assignments:

- **Users**:
  - Include: All Users  (Preferably target a group that has all users using Intune.)
- **Target Resources**:
  - Include: All Cloud Apps.
  - Exclude: Intune and Intune Enrolment.
- **Conditions**:
  - Device Platforms: Windows (as an example)
  - Locations:
    - Include: All Locations.
    - Exclude: Office Locations (for example).
- **Access Controls**:
  - Grant: Device to be compliant (Select require one control.)

---

## Require MFA for Admins

Admin accounts are often targeted for attacks so enforcing MFA is a good idea.

Assignments:

- **Select Users or workload identities**.
  - Include: Directory Roles or User accounts depending on the above selection.
  - Exclude: Any break glass accounts.
- **Target Resources**:
  - Include: All Cloud Apps.
- **Conditions**:
  - None
- **Access Controls**:
  - Grant access, Require multifactor authentication.

---
