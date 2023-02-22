# scoracle-example

## Getting Started
1. Install Dependencies with `yarn install`

2. Populate environemnt variables in `.env`
```
ALCH_STAGING_TOKEN=
INFURA_TOKEN=
MNEMONIC=
```

3. Compile smart contracts with `yarn compile`

4. Deploy `MyContract.sol` with `yarn deploy:myContract:arbitrumGoerli`

5. Calculate Score with `yarn calculateScore:myContract:arbitrumGoerli`

6. Read Score and check to see if you're "prequalified" with `yarn prequalifyUser:myContract:arbitrumGoerli`

The `prequalify` function and script is just an example of how you could use the MACRO score in your application. You could use it to prequalify a user for a loan, gate them from participating in a liquidity pool, enable a Buy-Now-Pay-Later escrow contract, etc. There are many ways the MACRO score could be used.

## Developing with this repository
Use the following repository for easy integration with the Scoracle contract. This repository has already set up a hardhat development environment for Solidiyt. All you need to do is write your contracts in the `./contracts` folder then, import the `IScoracle.sol` interface into one of your smart contract, create an instance of the contract, and then you can make calls to the external functions in Scoracl.sol contract. If you would like to see an example of the integration of Scorcle in the smart contract, please refer to the `MyContract.sol` contract. If you would like to see examples of how to make calls to the Scoracle contract, please refer to the `./scripts` folder. 

Please refer to the [developer docs](https://dev.spectral.finance/#scoracle-contracts) for more information.

## Environment Folder
The environment folder will contain the deployed contracts and `ScoreTypeJobID`. If you decide to use this repository to develop your contracts, you can always add more contracts to the `globalParams`. This can be done by declaring the new contract names as part of the `ICommonConfiguration` interface in the `./helpers/types.ts` file. Then you can implement these as part of `globalParams`. If you decide to deploy your contracts you can populate the deployed addresses to their respective parameter under the `globalParams`. 

## Discord server
If you have any questions please reach out to the developers on our discord group. Click [here](https://discord.gg/hxUFdw9PzN) to join.