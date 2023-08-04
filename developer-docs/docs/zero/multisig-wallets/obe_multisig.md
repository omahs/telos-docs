---
hide_table_of_contents: true
---

# Multi-Signature Proposal on OBE


__Telos Open Block Explorer (OBE) allows for the creation of multi-sig proposed transactions.__
 
Telos OBE provides a wrapper to interact with the eosio.msig contract easily. One user creates a proposal. Another user(s) reviews the transaction and then approves it for execution.  

Telos has made it easy to propose, review, approve and execute a multi-sig transaction. 

## Overview

Now with Telos OBE, you can easily submit, review, approve, cancel, and execute new proposals without the hassle of using cleos or generating a JSON file for eosio.msig.


__Proposal actions supported by Telos OBE include:__

1. __Propose__ 
    __a.__ To submit a proposal, you need the following parameters:
        i.      A proposer(the account proposing the transaction)
        ii.     A proposal name (a unique name for the proposal)
        iii.	   Requested (Permission levels expected to approve the proposal).  
        iv.     Transaction (Proposed transaction).
2. __Approve__  
    __a.__ Approves the existing proposal.
3. __Unapprove__  
    __a.__ Revokes an existing proposal.
4. __Cancel__  
    __a.__ Cancels an existing proposal.
5. __Execute__
    __a.__ The execute action allows an account to execute the proposal under certain conditions:
        i.	Executer has authorization.
        ii.	Proposal name is found in the proposals table.
        iii. All requested approvals are received.
        iv.	Proposed transaction has not expired.
        v.	None of the approval accounts are in the invalidations table.
6. __Invalidate__

__Note: Once the threshold of signers is reached, the proposal will not execute automatically. Any account must trigger the execute command to perform the final transaction.

## Multi-transfer actions
Telos OBE offers multi-transfer actions(more than one action) within one multi-sig proposal. Just import a .csv file to execute more than one token send transaction in one go.

## Actor for approval vs. actor for authorization

__Note: There is a difference between an "actor for approval" and an "actor for authorization".__

    ●	The actor for approving a proposal is all the accounts required to approve a msig transaction for an account. 
    ●	The actor for authorization is the actual msig account that will perform the transaction AFTER approvers have signed.


## Walkthrough single transfer action

__In this tutorial, we will create a multi-sig proposal to transfer tokens from one account to another using the eosio.token contract as an example.__

Steps

1. Go to [explorer.telos.net](https://explorer.telos.net).
2. Select "connect" to connect your wallet(Anchor or Cleos).
3. Now select "Proposal", which will display all proposals associated with your account.

![My Proposals](https://user-images.githubusercontent.com/39388424/201343168-3e4c673d-a2d4-4943-a81f-1be7b8dcb9a6.png)

4. You may check all recent and active proposals in the "All Proposals" tab.
5. Please click on "New Proposal".

![New Proposal](https://user-images.githubusercontent.com/39388424/201343588-960d447c-6106-48dd-bd1f-db5f6bada64e.png)

5. Start giving your proposal a unique name, or use the automatically generated proposal name. It may consist of 2-13 characters, only including "a-z" or "1-5" or ".", while character 13 may only consist of "a-j" or "1-5". It is impossible to create a name that does not follow these rules.

![Proposal Naming Convention](https://user-images.githubusercontent.com/39388424/201345434-bd7557bc-c44d-496b-a66d-aae9b829f3c8.png)

6. The proposer field is automatically updated with your account information.
7. Click on “Add action” to generate a proposed action.

![Add action](https://user-images.githubusercontent.com/39388424/201346113-a0e55425-abe0-41b6-b19c-45625b475cfc.png)

__Note: You also have the option to perform batch transfers (for eosio.token transfer contract actions only).__

**We will return to the “Requested approvals” section at step 12.**

__Note: The "All block producers need approvals" feature will automatically select all active Block Producers as signing actors. This feature is not recommended for non-Telos Core Development / Block Producer proposals.__

8. Type the account name (contract), and select the appropriate action. For this example, we are using eosio.token contract to transfer tokens from one account to another.

__Note: Once a valid account is selected, all contract interactions are available inside the actions field. A "standard" user account will not show any actions. The user interface will adjust dynamically based on the action selected.__

![account action overview](https://user-images.githubusercontent.com/39388424/201346837-52c19f74-8072-4da0-9c89-4a31a938e28f.png)

9. Add “from” = account that currently holds the token, also determined as "sender", “to” = receiver of the tokens, quantity including decimals and token symbol = 1.0000 TLOS, and give the transaction a description name (memo).

![msig single action](https://user-images.githubusercontent.com/39388424/201348575-0d7cd8ea-0f0f-4113-940e-69cb5e144919.png)

10. Add the authorization actor (the account to which the transaction is related) with their respective permissions. If multiple signatures are required to interact with the actor account, a small "people" icon appears next to the account permission. You will need to add some or all of these signing accounts as approvers inside your proposal.

__Note: The "people" icon will show all accounts with signing permissions once clicked. Please verify the threshold for signatures before you continue.__

![Authorization signers](https://user-images.githubusercontent.com/39388424/201349819-e5c4287b-7bec-4b64-8fe7-0bb9f91567ca.png)

__Note: It is generally possible to propose an action for any account with single active/owner permissions.__

![Simple permission acting account](https://user-images.githubusercontent.com/39388424/201350588-da0b6984-1dfc-4b3e-a369-e12f141e7d71.png)

11. You can add additional actions by clicking “Add Action” below.

**Telos offers a powerful tool to execute multiple actions within one proposal. A simplified option to create a multiple transfer proposal is explained further below.**

12. Since you are now aware of the required signing/approving actors, you can add those to the "Request Approver" section.

![add proposal approvers signers](https://user-images.githubusercontent.com/39388424/201351660-489e30c9-466d-4e44-a0af-fe946c1dbea0.png)

13. Advanced transaction settings are available for experienced users. The majority of proposals will not require any manipulation of the available settings.

**Advance transaction settings (transaction_header fields):**

- max_net_usage_words: Network bandwidth billing limit.
- max_cpu_usage_ms: CPU time billing limit, in milliseconds.
- delay_sec: The number of seconds to delay transaction, default: 0 sec. This causes the transaction to be executed a specified number of seconds after being. Included in a block. The transactions may be canceled anytime during the delay. 
- context_free_actions
- transaction_extensions
- ref_block_num: The reference block number helps to prevent replay attacks.
- ref_block_prefix: The reference block prefix helps to prevent replay attacks.
- expiration: The time it takes the transaction to expire and can no longer be included in a block.

For more information regarding advanced transaction settings, go to the class eosio::transaction and eosio::transaction_header documents [found here](https://developers.eos.io/manuals/eosio.cdt/v1.6/classeosio_1_1transaction).

![advanced settings](https://user-images.githubusercontent.com/39388424/201353100-4d9fa0d8-022a-4ee4-a70d-f4d3ed81d7a0.png)

14. Please verify the proposal's content, including all actors, accounts, and parameters, and click "Send Proposal", Anchor will prompt you to sign the transaction.

__Note: Signers are not informed automatically. Please copy the proposal URL and distribute it manually for signature.__


## Walkthrough multiple transfer action, file import(eosio.token transfer only)

**The transfer in batch feature enables the fast creation of proposals which include various token transfers. We recommend limiting the number of transfers to approximately 100-125 for safe execution.**

**As mentioned above, proposals can also be used for accounts with a simple permission structure. Therefore ANY account can initiate multiple transfers encapsulated in a single transaction using this feature.**

Follow steps 1-6 as outlined above.

7. Select the "Transfer in Batch" option.

![transfer in batch interface](https://user-images.githubusercontent.com/39388424/201356244-50dee990-22a9-4f76-b58d-01eb8cbadd41.png)

8. Download the [example file](https://explorer.telos.net/examples/msig-transfer-batch.csv) provided, which will provide the required source file structure. When exporting the source file from Excel, Numbers, or Google Tables, including the header row, "," is used as the separator.

![import file structure](https://user-images.githubusercontent.com/39388424/201357620-b9a3d741-e929-47d6-9af6-d7673156fe73.png)

![msig file example 5 accounts](https://user-images.githubusercontent.com/39388424/201358637-3e551e46-2ec5-4fb9-a86c-2c0d2a9bb407.png)

9. Click "Select the CSV File" this will prompt you to select a file from your local hard drive. **Important** once the file is selected, you need to click on "Upload" to process the file.

![msig transfer file upload](https://user-images.githubusercontent.com/39388424/201358888-387932c4-c5c9-4571-9cf0-6a9fed64f20a.png)

10. The site will create a single action for each line of the uploaded CSV file. Please verify the imported data carefully and verify addresses and quantities.

![imported actions overview](https://user-images.githubusercontent.com/39388424/201359417-404dfd96-d543-445a-9fb7-e18afeea3c20.png)

**Please follow the further steps explained above to finalize the creation of the proposal.**
