export type tEthereumAddress = string;

export enum eEthereumNetwork {
  hardhatevm = 'hardhatevm',
  arbitrumGoerli = 'arbitrumGoerli',
}

export type iParamsPerNetwork<T> = iEthereumParamsPerNetwork<T>;

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.hardhatevm]: T;
  [eEthereumNetwork.arbitrumGoerli]: T;
}

export interface ScoreType {
  name: string;
  scoreIdType: string;
}

export interface ICommonConfiguration {
  DeFiScore: ScoreType;
  MyContract: iParamsPerNetwork<tEthereumAddress>;
  Scoracle: iParamsPerNetwork<tEthereumAddress>;
}
