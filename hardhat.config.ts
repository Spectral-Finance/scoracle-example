import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'solidity-coverage';
import * as dotenv from 'dotenv';
import 'hardhat-gas-reporter';
import { HardhatUserConfig, task } from 'hardhat/config';
import 'solidity-coverage';

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    arbitrumGoerli: {
      url: 'https://arb-goerli.g.alchemy.com/v2/' + process.env.ALCH_STAGING_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
      gasPrice: 8000000000,
      blockGasLimit: 50450000
    },
    polygon: {
      url: 'https://polygon-mainnet.infura.io/v3/' + process.env.INFURA_TOKEN,
      accounts: {
        mnemonic: process.env.MNEMONIC as string,
      },
      gasPrice: 90000000000,
    },
    hardhat: {
    },
    hardhatevm: {
      hardfork: 'berlin',
      blockGasLimit: 9500000,
      gas: 9500000,
      gasPrice: 8000000000,
      chainId: 31337,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      url: 'http://localhost:8545',
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.11',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.4.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS === 'true',
    excludeContracts: [],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_TOKEN,
  },
  mocha: {
    timeout: 100000,
  },
};

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

export default config;