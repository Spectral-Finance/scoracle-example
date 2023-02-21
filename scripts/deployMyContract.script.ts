import { ethers } from 'hardhat';
import { MyContract } from '../typechain-types';
const hardhat = require('hardhat');

// Deploys the MyContract.sol contract
async function main() {
  // deploy MyContract.sol
  const myContractFactory = await ethers.getContractFactory('MyContract');
  const myContract = (await myContractFactory.deploy()) as MyContract;

  console.log({ MyContract: myContract.address });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });