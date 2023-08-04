---
hide_table_of_contents: true
---

# Call a EVM function from Telos Zero

The __Telos EVM__ runs in one smart contract on the __Telos Zero__ blockchain, the __eosio.evm__ contract.
Calling a function of a Telos EVM smart contract from Telos Zero requires the use of the __eosio.evm__ contract's `raw(eosio::name &ram_payer,std::vector<int8_t> &tx, bool &estimate_gas,std::optional<eosio::checksum160> &sender)` action.

This action takes in the Telos Zero account that will pay the RAM, the serialized EVM Transaction data and the sender address which the transaction will be sent from on EVM.

This guide will go over preparing and sending a Telos Zero transaction that can call a function of an EVM contract. Example implementations are available in our [zero-to-evm-transaction](https://github.com/telosnetwork/native-to-evm-transaction) and [rng-oracle-bridge](https://github.com/telosnetwork/rng-oracle-bridge) repositories.

__/!\ Make sure that the sender address has sufficient TLOS to pay for the gas of that function call__

## Requirements

This requires a Telos Zero account with a linked EVM address (hereby refered to as the __sender__)

## Get required static variables

You first need to get the __address__ of the EVM contract and the __function signature__ of the EVM function you need to call, as well as its __gas limit__.

### 1) Get the EVM contract address

Save the address after deployment of the contract on EVM or copy it from a block explorer

### 2) Get the function signature

_Function calls in the Ethereum Virtual Machine are specified by the first four bytes of data sent with a transaction. These 4-byte signatures are defined as the first four bytes of the Keccak hash (SHA3) of the canonical representation of the function signature._

The following is an example using ethersJS, for a `reply(uint, uint)` EVM function call:

`cont fnSig = await contract.interface.getSighash("reply(uint, uint)")`

### 3) Get the gas limit

The gas limit can be derived by doing tests calling the EVM function. Adding a margin to it is always recommended.
You could also estimate that gas limit at runtime.

## Get required dynamic variables

### 1) Get the sender's nonce

The nonce of an address being incremented at each transaction, you need to retreive it right before your call to __eosio.evm__ `raw()` method

#### A - Using a script

The following is an example using [@telosnetwork/telosevm-js](https://github.com/telosnetwork/telosevm-js):

`const nonce = parseInt(await evmApi.telos.getNonce(linkedAddress), 16)`

#### B - Using a smart contract

You can get the nonce of a linked EVM address from the eosio.evm accounts table, like so:

```
// find account
account_table _accounts("eosio.evm", "eosio.evm"_n);
auto accounts_byaccount = _accounts.get_index<"byaccount"_n>();
auto account = accounts_byaccount.require_find("MY Zero ACCOUNT", "Account not found");

// Get the nonce
const nonce = account->nonce;
```

### 2) Get the gas price

#### A - Using a script

The following is an example using [@telosnetwork/telosevm-js](https://github.com/telosnetwork/telosevm-js):

`const gasPrice = BigNumber.from('0x${await evmApi.telos.getGasPrice()}')`

#### A - Using a smart contract

You can get the EVM gas price from the __eosio.evm__ `config` singleton

### 3) Get the encoded transaction data

#### A - Using a script

Using the previously obtained EVM contract __address__ and __function signature__ as well as the sender's __nonce__, the __gas price__ and the __gas limit__ values, get the encoded transaction data using a script. Libraries such as web3js and ethers have utilities that help a lot here.

_Refer to our zero-to-evm-transaction repository's [generateEVMTransaction script](https://github.com/telosnetwork/native-to-evm-transaction/blob/main/generateEVMTransaction.js) for an example._

#### B - Using a smart contract

Using the previously obtained EVM contract __address__, __function signature__ and __gas limit__ saved in your Telos Zero contract, for example in a singleton (recommended) or by hard coding them as constants, as well as the dynamic __nonce__ and __gas price__  variable retreived in your contract at runtime you can get the encoded transaction data using the [__RLP__ library](https://github.com/telosnetwork/rng-oracle-bridge/tree/main/native/external/rlp) included in __rng.bridge__

```
// CONTRACT ADDRESS
std::vector<uint8_t> to;
to.insert(to.end(),  evm_contract.begin(), evm_contract.end()); // Our evm contract address

// FUNCTION PARAMETERS (function signature + argument)
std::vector<uint8_t> data;
data.insert(data.end(), fnsig.begin(), fnsig.end()); // Our function signature
data.insert(data.end(), argument.begin(), argument.end()); // Our argument for that function

const tx = rlp::encode(NONCE, GAS_PRICE, GAS_LIMIT, to, uint256_t(0), data, CHAIN_ID, 0, 0);
```

`NONCE` is the nonce of the sender EVM address we retreived

`GAS_PRICE` and `GAS_LIMIT` are the corresponding variables we retreived

`to` is our EVM contract address formatted to a vector

`uint256_t(0)` is the value of the EVM transaction, here set at 0 (no value sent)

`data` is our EVM transaction data we retreived and formatted to a vector

`CHAIN_ID` is the ID of our chain (41 for Telos EVM Testnet, 40 for Telos EVM Mainnet)

_Refer to our [rng-oracle-bridge repository](https://github.com/telosnetwork/rng-oracle-bridge/blob/ad255b872a238e4d3a3f59cdff44a206208ab67d/native/src/rng.bridge.cpp#L193) for an example._

## Call the eosio.evm `raw()` method

Use that __encoded transaction data__, as well as the  __ram payer__ Zero account and EVM __sender address__ to call the `raw()` action of the `eosio.evm` contract

### A - Using cleos

`cleos --url https://testnet.telos.net/ push action eosio.evm raw '{"ram_payer": 'Zero_ACCOUNT', "tx": "ENCODED_TX_DATA" , "estimate_gas": false, "sender": "EVM_SENDER_ADDRESS"' -p Zero_ACCOUNT`

Note that both the `tx` and `sender` arguments take hashes without '0x'

_Refer to our zero-to-evm-transaction repository's [generateEVMTransaction script](https://github.com/telosnetwork/native-to-evm-transaction/blob/main/generateEVMTransaction.js) for an example._

### B - Using a smart contract

```
// Send it using eosio.evm
action(
    permission_level {get_self(), "active"_n},
    EVM_SYSTEM_CONTRACT,
    "raw"_n,
    std::make_tuple(ZERO_RAM_PAYER, RLP_ENCODED_TX_DATA, false, std::optional<eosio::checksum160> (SENDER_EVM_ADDRESS))
).send();
```

_Refer to our [rng-oracle-bridge repository](https://github.com/telosnetwork/rng-oracle-bridge/blob/ad255b872a238e4d3a3f59cdff44a206208ab67d/native/src/rng.bridge.cpp#L193) for an example._

