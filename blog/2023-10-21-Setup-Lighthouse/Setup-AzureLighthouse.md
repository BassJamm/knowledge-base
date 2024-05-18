---
draft: false
title: Azure ligthhouse Setup
description: The lesssons I have learned setting up Azure Ligthouse.
slug: Setup-Azure-Lighthouse
date: 2023-10-21T13:00
toc_max_heading_level: 5
authors:
  - name: Will
    title: Creator of the IT KB.
    url: https://github.com/BassJamm?tab=repositories
tags: [Azure, Lighthouse]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

In this post, are the lessons learned when I first setup Azure Lighthouse as well as things I have picked up over the course of my year of using/supporting it within the company I work for.

<!--truncate-->

Azure Lighthouse serves as a central command hub for businesses and service providers in the Azure cloud. It simplifies the management of various Azure accounts, making it a breeze to oversee resources and services while boosting security and efficiency. Think of it as your go-to control center for all things Azure.

## Online Reading

Below are some links that are good reading before you dig into setting up the application.

- [Microsoft doc - What is Azure Lighthouse?](https://learn.microsoft.com/en-us/azure/lighthouse/overview).
- [Microsoft doc - Onboard a customer to Azure Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/onboard-customer).

## Setup Guidance

You've got some key areas to think about here before you get started, Azure AD and your Azure Lighthouse offering/delegation. Before you get cracking think about the following:

> These are all explained further down!

Azure Active Directory:

- Are you going to create seperate groups per department.
- What is your naming convention going to be.

Azure Lighthouse offering/delegation:

- Offering Naming Convention (Client will see this).
- Offering Description (Client will see this).
- Authorisations.
- Delegation Scopes (Subscription level or Resource Group Leve.)

:::caution My Opinions
I'd highly recommend reviewing the links mentioned in the Online Reading section for up to date information. The information following this point are from my notes.
:::

### Azure AD

To set things up, start by creating some groups within Azure AD. These groups will include the satff members who need access to the customer/client through Azure lighthouse. You have the flexibility to make these groups as detailed and numerous as needed.

I recommend considering two key roles, these roles can be fine-tuned to meet your specific requirements:

- *Azure Lighthouse Contributor*
- *Azure Lighthouse Reader*

:::tip Role Assignment to staff business roles.
Initially, I attempted to set up separate groups for each department, such as Operations, Service Desk, and Finance. While this approach worked well for the technical teams, it didn't meet my expectations when it came to granting access to billing information for the Finance team. After extensive testing, I discovered that using direct or named accounts, or leveraging the Microsoft Partner Center, provided a more effective solution.
:::

### Azure Lighthouse Offering

#### ARM Template

Below is an outline and suggestion for each relevant configurable options for the ARM template.

:::info On-boarding multiple Subscriptions or Resource Groups for one client\customer.
You have the option to delegate multiple resource groups and subscriptions all at once from the Service Providers dashboard within the customer's tenant. While the documentation might imply otherwise, it is indeed possible and functional.
:::

##### Offering Name

When naming your offering, remember that it will be visible in your customer's tenant, so it's important that it looks good. I recommend using a format like this:

- `Managing Company Name` Lighthouse Offering for `Customer Name` - `Subscription or Resource Group Name`.

Be sure to replace the placeholders with the relevant details based on your naming convention.

##### Description(s)

The description is customer-facing, so it should be clear and informative. Here's a suggested format:

- `Managing Company Name` managed services offer for overseeing supported resources.
- `Managing Company Name` offer for managing and overseeing project resources for `project or PO number`.

##### Delegation Scope(s)

You have two options: `Subscription` and `Resource Group`. These choices are quite self-explanatory. However, it's important to note that you cannot change these after deployment, so be sure to select the one that suits your specific needs.

##### Authorisations

Authorisations represent the roles you intend to assign to your pre-configured Azure AD groups. You have the flexibility to define these roles as either broad or specific, although I recommend a broader approach to minimize the need for creating or updating new delegations in the future.

:::caution Broader Authorisations
While this approach may sound appealing in theory, it's crucial to think about security. It may not be advisable if you are responsible for managing a small portion or a specific resource within your customer's environment. Additionally, consider the nature of your customer in this context.
:::

- **Principal type**: Group
- **Name**: Choose one of the mentioned groups in the section above.
- **Display Name**: Please do not edit. (This is the friendly name displayed in the customer's tenant, and it will default to the group name.)
- **Role**: Assign the roles as indicated for the groups listed above.
- **Access Type**: Permanent.

### ARM template Example

You can skip the initial lines until you locate `mspOfferName`. In the vicinity of this, you'll find the description field. To make changes, modify the `defaultValue:` data, not the `description:` information.

:::tip Confirming your scope
Locate the line `"$schema": "https://schema.management.azure.com/schemas/2019-08-01/subscriptionDeploymentTemplate.json#",` and modify it to reflect either a subscription or resource deployment template, depending on your initial selection.
:::


Similar situation with the `mspOfferDescription:` as well.

```json showLineNumbers
"mspOfferName": {
   "type": "string",
   "metadata": {
    "description": "Specify a unique name for your offer"
   },
   "defaultValue": "My Company Lighthouse Contributor Offer for Customer Name - Subscription Name "
  },

  "mspOfferDescription": {
   "type": "string",
   "metadata": {
    "description": "Name of the Managed Service Provider offering"
   },
   "defaultValue": "My Company managed services offer to administer support resources."
  }
```


Locate the `variables:` section to define your group and the Azure role assignments.

- `managedByTenantId"` - is your tenant or partner tenant ID.
- `"authorizations":` - Are you Azure Roles assignments.
- `"principalId"` - Is your object in the managing tenant.
- `"roleDefinitionId"` - Is the Azure AD role you've assigned. In the case below, it's `Contributor` and the `Managed Services Registration assignment Delete` roles.
- `"principalIdDisplayName"` - Is your friendly Group name, this will show in your customer tenant, it does not need to match the group name in the managing tenant.

You'll see some of the information repeated for each role you assign to the same object in the managing tenant.

```json showLineNumbers
"variables": {
  "mspRegistrationName": "[guid(parameters('mspOfferName'))]",
  "mspAssignmentName": "[guid(parameters('mspOfferName'))]",
  "managedByTenantId": "Your tenant ID",
  "authorizations": [
   {
    "principalId": "Your object in the managing tenant",
    "roleDefinitionId": "Id-number-here",
    "principalIdDisplayName": "Lighthouse Contributor"
   },
   {
    "principalId": "Your object in the managing tenant",
    "roleDefinitionId": "Id-number-here",
    "principalIdDisplayName": "Lighthouse Contributor"
   }
  ]
 },
 ```

:::tip You can edit the JSON template directly!
You don't need to always duck back into Azure Lighthouse to create the templates, you can just edit the JSON files if you're comfortable doing so.
:::

## Using Lighthouse

After setting up and assigning your Lighthouse delegations to your staff, there's no specific action required to access Azure Lighthouse. It's consistently available. Below, we provide two methods to verify the status of your delegations.

### Via the Lighthouse blade

1. Open the **Azure Management Portal**.
2. Search for **Azure Lighthouse**.
3. Click on the **Delegations** option on the left-hand side, you may need to click manage my customers if you’ve no connections.
4. You will then see your list of your customer’s subscriptions that you have access to.

### Via the subscriptions blade

> You'll need to show the customer in the subscription filter first though.

1. Open the **Azure Management Portal**.
2. Navigate to the **Subscriptions blade**.
3. The list of subscriptions will also list the customer subscriptions you have access too.
4. In the **Azure portal**, Select the **Directory + subscriptions** or **Settings icon** in the top right of the page.
5. In the Directories + subscriptions settings page, ensure that the **Advanced filters toggle is turned off**.
6. In the Default subscription filter section, **select the appropriate directory** and subscription.

:::info
If you have been granted access to one or more resource groups, rather than to an entire subscription, select the subscription to which that resource group belongs. You'll then work in the context of that subscription, but will only be able to access the designated resource group(s).
:::

## Partner Earned Credit (PEC) using PAL

PAL (Partner Admin Link) is how a partner can be recognized by Microsoft for their work in Azure on-behalf-of their customer.

- [Microsoft doc - Associate your partner ID when you onboard new customers vai Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/partner-earned-credit#associate-your-partner-id-when-you-onboard-new-customers).
- [Microsoft doc - Link a PartnerID with PAL or DPOR for PAL](https://learn.microsoft.com/en-us/partner-center/link-partner-id-for-azure-performance-pal-dpor#link-to-a-partnerid-with-pal)

To do this via Lighthouse, in a nutshell.

1. [**Create a service principal**](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-authenticate-service-principal-powershell) user account in your managing tenant.
2. Using that service principal account, [**link to your Associated Partner ID**](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/link-partner-id#link-to-a-partner-id) in your managing tenant.
3. Include at least one authorization which includes the service principal Account as a user with an Azure built-in role that is eligible for PEC.

:::caution
This role must be granted as a permanent assignment, not as a just-in-time eligible authorization, in order for PEC to apply.
:::