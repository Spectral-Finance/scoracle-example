import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import BigNumber from 'bignumber.js';
import { expect } from 'chai';
import { ContractTransaction } from 'ethers';
import { ethers, network } from 'hardhat';
import { globalParams } from '../environment';
import { signScoracleMessage, stringToBytes32 } from '../helpers/utils';
import { MyContract } from '../typechain-types';

const timestamp = 2500000000;

describe('MyContract', async () => {
  let accounts: SignerWithAddress[];
  let chainId: number;
  let tx: Promise<ContractTransaction>;
  let reqId: string;

  const deFiScoreName = globalParams.DeFiScore.name;
  const deFiScoreIdType = stringToBytes32(deFiScoreName);

  before(async () => {
    accounts = await ethers.getSigners();

    const myContractFactory = await ethers.getContractFactory('MyContract');
    const myContract = (await myContractFactory.deploy()) as MyContract;
    chainId = (await myContract.provider.getNetwork()).chainId;
  });
});
