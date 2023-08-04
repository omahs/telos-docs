---
sidebar_position: 2
hide_table_of_contents: true
---

# How to buy or sell RAM

__An extensive walkthrough of how to buy or sell RAM for your account and enable low to no-fee transactions on the Telos Zero network.__

__The Telos Core Development is providing the [Open Block Exploerer](https://explorer.telos.net)and a [Web-Wallet](https://wallet.telos.net/) to add resources to your account. We will cover Open Block Explorer in this article.__

### PREREQUISITES

- Have a Telos Account setup
- Anchor wallet. If you don't have an Anchor wallet, you can download one [here](https://greymass.com/en/anchor/)
- Approximately 3 $TLOS in your account

#### Instructions to buy RAM:

Navigate to [Open Block Explorer](https://explorer.telos.net) and log in

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

All resources are listed in the wallet section. You can identify the current utilization and determine which might require resource.

![explorer telos net wallet](https://user-images.githubusercontent.com/39388424/192003919-ffc6865a-0ec9-4403-81cf-3de04ec50a65.png)

To buy RAM open the corresponding tab.

![explorer telos net buy ram](https://user-images.githubusercontent.com/39388424/192029059-8e1581bf-2088-46a9-a0e1-f47f7fd445bf.png)

Enter the desired amount of RAM. We recommend adding 0.25 to 0.5 $TLOS worth of RAM to allow basic transactions.

Use the buy in "TLOS" option to add RAM quickly.

Advanced users may be required to add a specific amount of RAM to the account if they intend to deploy contracts. In this case, please use "Bytes" to specify the exact amount.

Click "confirm" and approve the Anchor transaction.

![explorer telos net cpu and net sign](https://user-images.githubusercontent.com/39388424/192004955-f21123c2-2057-42c6-b1c2-1cbeb3e28edd.png)

![explorer telos net transaction confirmation](https://user-images.githubusercontent.com/39388424/192004975-7d0eb96e-fe67-47bf-9f6e-976d366a1149.png)

__Please note:__ If your account is “fresh,” you may require additional CPU and NET as a core resource. Please refer to [How to manage CPU and NET](cpu-net.md). This will resolve the issues in most instances.

#### Sell RAM from your account

To sell RAM, open the corresponding tab.

![explorer telos net sell ram](https://user-images.githubusercontent.com/39388424/192030179-47276d0b-1605-469d-8f2c-a82a0bf2d870.png)

Enter the desired amount of RAM in Bytes. We recommend checking the available RAM displayed in the account totals overview. Please hold approximately 3000-5000 bytes to keep your account fully actionable.

Click "confirm" and approve the Anchor transaction.
