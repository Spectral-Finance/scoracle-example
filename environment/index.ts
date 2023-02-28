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
    [eEthereumNetwork.polygon]: '0x023dbDe12B0e5B5d79593d8e31CC7F23261aB337'
  },
  Scoracle: {
    [eEthereumNetwork.hardhatevm]: "",
    [eEthereumNetwork.arbitrumGoerli]: '0xe953f329041dA0D5Cf23159abc4b45f6fbf8Ab17',
    [eEthereumNetwork.polygon]: '0x89BfCC6C1784ef7e4975e548063bd7C4c7Bd029f'
  }
};
