---
sidebar_position: 3
hide_table_of_contents: true
---

# How to manage CPU and NET

__An extensive walkthrough of how to add CPU and NET to your account and enable low to no-fee transactions on the Telos Zero network.__

__The Telos Core Development is providing the [Open Block Explorer](https://explorer.telos.net) and a [Web-Wallet](https://wallet.telos.net/) to add resources to your account. We will cover Open Block Explorer in this article.__

### PREREQUISITES

- Have a Telos Account setup
- Anchor wallet. If you don't have an Anchor wallet, you can download one [here](https://greymass.com/en/anchor/)
- Approximately 3 $TLOS in your account
- Sufficient [RAM](./ram.md) purchased to perform transactions

#### Instructions to add CPU and NET:

Navigate to [Open Block Explorer](https://explorer.telos.net) and log in.

![explorer telos net home](https://user-images.githubusercontent.com/39388424/192003471-9293e0f8-e178-4615-a683-305a8d3e794f.png)

The following Signers/Wallets are currently supported:
- Anchor Wallet
- Cleos (advanced user command line, not be covered in this article)

#### Log in with Anchor Wallet   
While other options are available, we are focusing on Anchor for this tutorial.

![explorer telos net login](https://user-images.githubusercontent.com/39388424/192003510-a2b1537e-aa60-4096-8e49-5a21ca052229.png)

- After you click the Anchor icon, it will prompt you to Launch Anchor.  
- Once you launch Anchor, there will be an identity request sent. Sign the identity request in your wallet that pops up then you will be logged in. Please note that both the Anchor desktop and mobile wallets are supported. 
- __NOTE:__ In rare cases, you may need to reset/reboot your Anchor wallet if there is no signing request.

#### Click “Wallet” followed by "Resource Management"

All resources are listed in the wallet section. You can identify the current utilization and determine which resource might be required.

![explorer telos net wallet](https://user-images.githubusercontent.com/39388424/192003919-ffc6865a-0ec9-4403-81cf-3de04ec50a65.png)

To add CPU and NET, open the corresponding tab.

![explorer telos net add cpu and net](https://user-images.githubusercontent.com/39388424/192004133-7b013b14-4c0b-4bfc-a95b-1a88d931a65a.png)

Enter the desired amount of CPU and NET. We recommend adding 0.25 $TLOS worth of each resource. It is possible to add both CPU and NET in one transaction.

Click "confirm" and approve the Anchor transaction.

![explorer telos net cpu and net sign](https://user-images.githubusercontent.com/39388424/192004955-f21123c2-2057-42c6-b1c2-1cbeb3e28edd.png)

![explorer telos net transaction confirmation](https://user-images.githubusercontent.com/39388424/192004975-7d0eb96e-fe67-47bf-9f6e-976d366a1149.png)

__Please note:__ If your account is “fresh,” you may require additional RAM as a core resource, which may result in an error message when trying to add CPU or NET. Please refer to [Buy/Sell RAM](./ram.md). This will resolve the issues in most instances.

#### Remove CPU and NET from your account

To remove CPU and NET, open the corresponding tab.

![explorer telos net cpu and net remove](https://user-images.githubusercontent.com/39388424/192006080-37a9a958-7018-4b41-bdd2-232af2e085b9.png)

Enter the desired amount of CPU and NET. We recommend keeping 0.25 $TLOS worth of each resource to keep your account fully actionable. It is possible to remove both CPU and NET in one transaction.

Click "confirm" and approve the Anchor transaction.

__Please note:__ CPU and NET removal is subject to a three-day timer. You need to return to the wallet "Refund CPU/NET" tab again to refund $TLOS after the timer expires.

![explorer telos net cpu and net refund](https://user-images.githubusercontent.com/39388424/192008496-3bf8cb60-c35e-43e5-9ca1-00dc3ee9c194.png)

Please click on "Refund" and approve the Anchor transaction.
