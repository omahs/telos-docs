---
description: Telos Zero Accounts
sidebar_positon: 2
title: "Accounts"
hide_table_of_contents: true
---

# Telos Zero Accounts

All accounts on Telos are identified by a twelve character (human-readable) name. This account name represents an uint64\_t (unsigned 64-bit integer) identifying the account. This integer is not the account’s public key, neither is it directly related to a specific key-pair. This account name is controlled by one or more key-pairs (which can be updated).

If there is a private key which controls the account _ACCOUNT\_NAME_, that private key can be updated to a new key. Multiple key-pairs can control that specific account, each with specific permissions. By default, the key permissions are “active” and “owner”.

An active key is allowed to take any action (staking, unstaking, resource management, token transfers, pushing actions to applications, etc). The active permission is allowed to update and change its key, but it cannot change the owner’s key.

The owner account has the exclusive function to change its own key, and always the ability to change the active key. This adds an extra layer of security to the system. In the event that an active key has been compromised, the owner key can update the active key.

More specific actions and permissions can be set-up, like multi-signature permissions attached to specific actions (as defined by the smart contract).

For a guided tutorial on how to create a Telos account click [here](../../zero/about/accounts.md#creating-an-account) or visit our site for more information [here](https://www.telos.net/).

For more information on how to change a Telos account's active and owner keys on Anchor, click [here](https://help.telos.net/en\_US/security/how-to-change-telos-keys-using-anchor).
