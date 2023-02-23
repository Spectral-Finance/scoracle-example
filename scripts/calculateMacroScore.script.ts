import BigNumber from 'bignumber.js';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { globalParams } from '../environment';
import { MyContract } from '../typechain-types';
import { MyContract__factory } from '../typechain-types/factories/MyContract__factory';
import { eEthereumNetwork } from '../helpers/types';
import { signScoracleMessage, stringToBytes32 } from '../helpers/utils';

const hardhat = require('hardhat');

// Calculates the user's score by requesting score from deployed Scoracle.sol contract
async function main() {
  const network: eEthereumNetwork = hardhat.network.name;
  const accounts = await ethers.getSigners();
  const DeFiScoreIdType = stringToBytes32(globalParams.DeFiScore.scoreIdType);
  const baseFee = ethers.utils.parseEther('0');

  // create instance of deployed Scoracle contract
  const myContract: MyContract = MyContract__factory.connect(globalParams.MyContract[network], hardhat.ethers.provider);

  // get chain ID
  const chainId = (await myContract.provider.getNetwork()).chainId;

  const nonce = 18; // increment nonce by one everytime you call it. leave at 0 when you make your first request

  // // sign scorcle message
  const accountSignature = await signScoracleMessage(accounts[0], globalParams.Scoracle[network], chainId, nonce);

  const tx = await myContract.connect(accounts[0]).calculateMacroScore(DeFiScoreIdType, accountSignature);
  const receipt = await tx.wait();

  console.log(`\n`);
  console.log(`Transaction: \n ${tx}`);
  console.log(`\n`);
  console.log(`Receipt: \n ${receipt}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

let nonce: number = 0;
