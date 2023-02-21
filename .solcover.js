module.exports = {
  client: require('ganache-cli'),
  providerOptions: {
    host: 'localhost',
    port: 8545,
    network_id: '1234567890',
    gas: 6721975,
    networkCheckTimeout: 60000,
    fork: 'https://arb-rinkeby.g.alchemy.com/v2/' + process.env.ALCH_STAGING_TOKEN,
    mnemonic: process.env.MNEMONIC,
  },
  skipFiles: ['mocks/MockLink.sol', 'mocks/MockOracle.sol'],
};
