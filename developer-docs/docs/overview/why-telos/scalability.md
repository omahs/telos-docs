---
title: "Scalability"
sidebar_position: 5
hide_table_of_contents: true
---

# Scalability and State Bloat

Blockchains have an issue [with state bloat](https://blocking.net/1417/blockchain-state-explosion-dilemma-hard-core-series/). If there is no way to reduce the cumulative state of all past transactions, the blockchain state grows out of the capabilities of commodity hardware. This in turn will increase the capital cost of running a node and leads to more centralization.

Below is a summary of different blockchains' approach towards state bloat at the moment. Telos Zero transactions use a resource rent model where different resources (CPU, network, storage) are priced separately and can be exchanged or rented.

Storage on Telos (often described as RAM) has a cost, which is set via AMM type system (using Bancor algorithm). The total amount of data stored on chain gives the size of the state. If a smart contract removes data from state, the RAM asset is returned to it's original owner (the account which paid for the storage being recovered), the state size shrinks and that account can then sell the RAM back to the system if it wishes. Via this mechanism, responsible usage of storage is maintained.

Beyond state, the full blockchain history is also a necessary component of the overall blockchain functionality and can be scaled horizontally across a cluster of commodity hardware. The [Hyperion](https://github.com/eosrio/hyperion-history-api) history solution addresses this for both Telos and the tEVM using elastic search and is ran by many Telos validator nodes around the world.

| Blockchain          | State management model                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Telos               | [Resource exchange model (REX)](https://medium.com/telos-foundation/telos-users-guide-understanding-telos-rex-d94d081cd7bb) (does not apply to EVM yet) |
| Ethereum            | No approved proposals                                                                                                                                   |
| Binance Smart Chain | No approved proposals                                                                                                                                   |
| Polygon             | No approved proposals      