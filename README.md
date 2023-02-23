# scoracle-example
# Quickstart
## Prerequisites
`node`, `yarn`, [direnv](https://direnv.net/)

## Getting Started
1. Use node version `16.14.2`: 
`nvm use 16.14.2`

2. Install dependencies: 
`yarn install`

3. Populate environment variables in `.env`. Env vars are managed by [direnv](https://direnv.net)

```
ALCH_STAGING_TOKEN=
INFURA_TOKEN=
MNEMONIC=
```

`ALCH_STAGING_TOKEN` - obtain a key from https://www.alchemy.com 

`INFURA_TOKEN` - obtain a key from https://www.infura.io

`MNEMONIC` - to see how to obtain your mnemonic, please visit https://www.alphr.com/metamask-get-secret-recovery-phrase

## Snippets

* To Compile smart contracts: 

`yarn compile`

* To Deploy `MyContract.sol`: 

`yarn deploy:myContract:arbitrumGoerli`

* To Calculate Score: 

`yarn calculateScore:myContract:arbitrumGoerli`

* To Read Score and check to see if you're "prequalified" with:

`yarn prequalifyUser:myContract:arbitrumGoerli`

The `prequalify` function and script is an example of how you could use the MACRO score in your application. You could use it to prequalify a user for a loan, gate them from participating in a liquidity pool, enable a Buy-Now-Pay-Later escrow contract, etc.

## How to use this repository ?
This repository contains a hardhat development environment for Solidity. You can write your contracts in the `./contracts` folder then, import the `IScoracle.sol` interface into one of your smart contract, create an instance of the contract, and then make calls to the external functions in `Scoracl.sol` contract. 

To see an example of the integration of Scorcle in the smart contract, check `MyContract.sol` contract. 
To see examples of how to make calls to the Scoracle contract, check `./scripts` folder. 

Please refer to the [developer docs](https://dev.spectral.finance/#scoracle-contracts) for more information.
# Miscellaneous
## Environment Folder
The environment folder will contain the deployed contracts and `ScoreTypeJobID`. If you decide to use this repository to develop your contracts, you can add more contracts to the `globalParams`. This can be done by declaring the new contract names as part of the `ICommonConfiguration` interface in the `./helpers/types.ts` file. Then you can implement these as part of `globalParams`. If you decide to deploy your contracts you can populate the deployed addresses to their respective parameter under the `globalParams`. 

## Discord server
If you have any questions please reach out to the developers on our discord group. Click [here](https://discord.gg/hxUFdw9PzN) to join.