import BigNumber from 'bignumber.js';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { globalParams } from '../environment';
import { MyContract } from '../typechain-types';
import { MyContract__factory } from '../typechain-types/factories/MyContract__factory';
import { stringToBytes32 } from '../helpers/utils';
import { eEthereumNetwork } from '../helpers/types';

const hardhat = require('hardhat');

// PreQualify user by reading their score from Scoracle.sol state and 
// seeing if their MACRO score is high enough to prequalify for "loan".
async function main() {
  const network: eEthereumNetwork = hardhat.network.name;
  const accounts = await ethers.getSigners();
  const DeFiScoreIdType = stringToBytes32(globalParams.DeFiScore.scoreIdType);

  // create instance of deployed Scoracle contract
  const myContract: MyContract = MyContract__factory.connect(globalParams.MyContract[network], hardhat.ethers.provider);

  // Prequalify
  const result = await myContract.connect(accounts[0]).prequalifyUser(DeFiScoreIdType);

  console.log(`Prequalified: \n ${result[0]}`);
  console.log(`Score: \n ${result[1]}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
