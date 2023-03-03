export type tEthereumAddress = string;

export enum eEthereumNetwork {
  hardhatevm = 'hardhatevm',
  arbitrumGoerli = 'arbitrumGoerli',
  polygon = 'polygon',
}

export type iParamsPerNetwork<T> = iEthereumParamsPerNetwork<T>;

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.hardhatevm]: T;
  [eEthereumNetwork.arbitrumGoerli]: T;
  [eEthereumNetwork.polygon]: T;
}

export interface ScoreType {
  name: string;
  scoreIdType: string;
}

export interface ICommonConfiguration {
  DeFiScore: ScoreType;
  NFC: iParamsPerNetwork<tEthereumAddress>;
  MyContract: iParamsPerNetwork<tEthereumAddress>;
  Scoracle: iParamsPerNetwork<tEthereumAddress>;
}
