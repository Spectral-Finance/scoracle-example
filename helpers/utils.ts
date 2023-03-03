import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
const hardhat = require('hardhat');

export const signNFCMessage = async (
  account: SignerWithAddress,
  nfcAddress: string,
  chainId: number
): Promise<string> => {
  const content = 'This is Spectral Team. We are verifying ownership of the wallet.';

  return await account._signTypedData(
    // Domain
    {
      name: 'Spectral',
      version: '1',
      chainId: chainId,
      verifyingContract: nfcAddress,
    },
    // Types
    {
      Value: [{ name: 'content', type: 'string' }],
    },
    // Value
    { content }
  );
};

export const signScoracleMessage = (
  account: SignerWithAddress,
  scoracleAddress: string,
  chainId: number,
  nonce: number
) => {
  return account.signMessage(
    ethers.utils.arrayify(
      ethers.utils.solidityKeccak256(
        ['address', 'address', 'uint256', 'uint256'],
        [account.address, scoracleAddress, chainId, nonce]
      )
    )
  );
};

// https://github.com/ethers-io/ethers.js/issues/66#issuecomment-370121220
export const stringToBytes32 = (text: string) => {
  let data = ethers.utils.toUtf8Bytes(text);
  if (data.length > 32) {
    throw new Error('too long');
  }
  data = ethers.utils.zeroPad(data, 32);
  return ethers.utils.hexlify(data);
};

export const uintToBytes32 = (number: number) => {
  return ethers.utils.hexZeroPad(ethers.utils.hexlify(number), 32);
};
