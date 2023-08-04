---
sidebar_positon: 2
hide_table_of_contents: true
---

# Telos EVM

## Overview

Telos provides cutting-edge solutions to address the drawbacks developers and users face with other Layer 1 blockchains, such as lagging performance (high latency times & network congestion), limited scalability, and energy consumption. The Telos EVM also implements a fixed gas fee on all transactions, rendering it impossible for whales or any other user to front run their transaction in a mempool.

- **Architecture:** Telos EVM is a Smart Contract built on the native Antelope.io layer. The EVM RPC plays a critical role by translating the native APIs to the standard EVM RPC methods, so all EVM tools and wallets are compatible.
- **Solidity & Vyper:** Telos EVM processes the same code as Ethereum's and other EVMs. No modifications are needed.
- **RPC Specification:** Every Telos client implements a JSON-RPC specification identical to Ethereum's, making it easy to read blockchain data and send transactions to the network.
- **Convenience Libraries:** Telos supports the same libraries for JSON-RPC API, such as ethers.js & web3.js.
- **Custom indexing COMING SOON**: A public API that will offer improved data over the standard RPC, such as token holder lists, NFTs, approvals, and more.

## Telos Zero to Telos EVM

The Telos EVM accounts can be mapped to the Telos Zero network accounts so users can bridge between the Telos Zero network and Telos EVM to leverage tools and DApps on both sides of the network.

1. TLOS, also known as the "gas token," is the native currency for executing transactions on the EVM platform.
2. When an EVM transaction is executed, the RPC relays the raw transaction data to the Telos Zero smart contract, which runs the contract in the C++ WASM runtime. The RPC is responsible for translating the Ethereum JSON-RPC methods to the APIs of the Telos Zero network, as well as storing the historical transaction data to satisfy other JSON-RPC methods such as "`eth_getTransactionReceipt`".
3. Account and code tables match the specification in the Ethereum Yellow Paper but are implemented in the Antelope.io smart contract.