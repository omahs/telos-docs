---
description: How to deposit, withdraw and send TLOS on the Telos EVM.
title: 'Withdraw, Transfer, and Send TLOS'
sidebar_position: 4
hide_table_of_contents: true
---

# Withdraw, Transfer, and Send TLOS

The tEVM uses TLOS Zero to pay for [gas](../../evm/about/gas-fees.md), which requires that you have TLOS on your EVM account to do transactions. To deposit TLOS to your EVM address, you need to transfer it from a Telos Zero account. TLOS can be purchased on the [web-wallet](https://wallet.telos.net) or through one of the official portals listed on [telos.net](https://telos.net).

To top-up an EVM testnet account, enter the address on the [Telos testnet faucet](https://app.telos.net/testnet/developers) and press the "Send Testnet EVM TLOS" button. 100 TLOS will be sent to that address.

## Withdrawing TLOS from exchanges to Telos EVM

If you currently have TLOS on [Gate.io](https://www.gate.io) or [KuCoin](https://www.kucoin.com), you can withdraw it to your EVM address by doing the following:

Make sure that the address and memo is:

**Address:** deposit.evm

**Memo:** (Your EVM address)

<img
  src={require('/static/img/EVM_ku.jpg').default}
  alt="Example 2"
  width="35%"
  height="automatic"
/>

<img
  src={require('/static/img/EVM_gate.jpg').default}
  alt="Example 2"
  width="35%"
  height="automatic"
/>

If not using Telos Web Wallet, users may want to reference [set up an evm wallet](../evm/setup-a-wallet.md) to connect TelosEVM using Metamask or an alternative web3 wallet/signer.

## Transferring TLOS from Telos Zero to Telos EVM

After acquiring TLOS, you can send it to your EVM address using the [web-wallet](https://wallet.telos.net), which you can also use to send to other EVM addresses such as Metamask. Make sure you have [added the Telos EVM](../evm/setup-a-wallet.md) network to your Metamask.

1. Login to the native side of the [web-wallet](https://wallet.telos.net). If you haven't created a native wallet please reference [accounts](./accounts.md) and [setting up a wallet](./setup-a-wallet.md) to do so.

<img
  src={require('/static/img/native-wallet-login.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

2. Once logged in to web wallet, click on the deposit to EVM button (as shown below).

<img
  src={require('/static/img/mainaccount_zero_to_evm.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

:::info
If you do not already have an EVM address added in the native web wallet, you will have to generate one
:::

3\. Enter the amount of TLOS you wish to deposit. Click "**Deposit**" and sign the transaction.&#x20;

<img
  src={require('/static/img/zero_to_evm.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

4\. Viola! You should now see your new EVM balance.&#x20;

## Transferring TLOS from Telos EVM to Zero

Funds can also be transferred from your associated EVM address to your Telos account.
This can be done via the [web-wallet](https://wallet.telos.net).

1. Login to the native side of the [web-wallet](https://wallet.telos.net). If you haven't created a native wallet please reference [accounts](./accounts.md) and [setting up a wallet](./setup-a-wallet.md) to do so.

<img
  src={require('/static/img/native-wallet-login.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

2. Once logged in to the web-wallet, click on the transfer to Zero button (as shown below).

<img
  src={require('/static/img/mainaccount_evm_to_zero.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

:::info
If you do not already have an EVM address added in the native web wallet, you will have to generate one
:::

3\. Enter the amount of TLOS you wish to transfer. Click "Deposit" and sign the transaction.

<img
  src={require('/static/img/evm_to_zero.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

## Sending TLOS to other EVM addresses with web wallet

Once you have TLOS on your EVM address, you can send it to any Metamask address using the web-wallet. This allows users to use dapps on the tEVM with their own wallet of choice.

1. On the web-wallet, click on the Telos EVM token.

<img
  src={require('/static/img/mainaccount_send.png').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

2\. Click on "**Send**"

<img
  src={require('/static/img/send_evm.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

3\. Enter the amount you wish to send.

<img
  src={require('/static/img/send_evm2.PNG').default}
  alt="Example 2"
  width="30%"
  height="automatic"
/>

4\. Enter the address you wish to send to   .

<img
  src={require('/static/img/send_evm3.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>

5\. Confirm and sign the transaction.

<img
  src={require('/static/img/send_evm4.PNG').default}
  alt="Example 2"
  width="50%"
  height="automatic"
/>
