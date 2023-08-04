---
hide_table_of_contents: true
---

# Telos Zero Platform


_**The purpose of this document is to help you understand the components and utility of the Telos Zero Antelope platform**_

--------------------                           ------

## Overview

Telos Zero leverages the Antelope platform which applies in this section.

The Telos Zero platform provides a number of components and libraries from Antelope which are used to operate blockchain nodes, collect blockchain data, to interact with these nodes, and to build smart contracts. The main component is nodeos (node + Antelope = nodeos). This is the core Antelope node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development. Cleos (CLI + Antelope = cleos) is a command line interface which interacts with nodeos, allowing you to send commands and actions to a blockchain. Cleos also interacts with keosd (key + Antelope = keosd), a local component that securely stores Antelope keys.

--------------------------------                -------------

# Toolkit

![Antelope](/img/eosio_development_lifecycle.png)

The Telos platform at protocol level is made out of the following components and toolchain:

**Nodeos**: For working with Nodes

**Cleos**: CLI for sending commands and actions to the blockchain

**Keosd**: The component that securely stores Telos keys in wallets

**EOSIO.CDT**: Toolchain for WebAssembly(Wasm) and a set of tools to facilitate smart contract writing for the Telos Zero blockchain




------    --------------                           ------

## Next Steps 

Head over to the [overview](/zero/about/overview.md) page and get started with installing Antelope

Walkthrough below before deploying smart contracts:

- Create Development Wallet: Cleos intro walkthrough
- Start Keosd and Nodeos: Walkthrough to start Keosd and Nodeos
- Create Development Accounts: Account generation walkthrough






