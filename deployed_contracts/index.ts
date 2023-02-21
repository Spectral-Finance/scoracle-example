import { ICommonConfiguration, eEthereumNetwork } from '../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const globalParams: ICommonConfiguration = {
  DeFiScore: {
    name: 'DeFiScore',
    scoreIdType: '9348f5ba3f574f65958a675e468da9c8',
  },
  MyContract: {
    [eEthereumNetwork.hardhatevm]: "",
    [eEthereumNetwork.arbitrumGoerli]: '0x5EBaE8890490F8Ae029a860793eb76fCFBe9bf01',
  },
  Scoracle: {
    [eEthereumNetwork.hardhatevm]: "",
    [eEthereumNetwork.arbitrumGoerli]: '0xe953f329041dA0D5Cf23159abc4b45f6fbf8Ab17',
  }
};
