require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
// Create your own key for Production environments (https://infura.io/)
const INFURA_ID = process.env.INFURA_ID || 'd6760e62b67f4937ba1ea2691046f06d';

const OCEAN_NETS = {
  'nile': 'https://nile.dev-ocean.com/',
  'pacific': 'https://pacific.oceanprotocol.com'
}



const configNetwok = (network, networkId, path = "m/44'/60'/0'/0/", gas = 6721975, gasPrice = 100e9) => ({
  provider: () => new HDWalletProvider(
    mnemonic, Object.keys(OCEAN_NETS).includes(network) ? OCEAN_NETS[network]:`https://${network}.infura.io/v3/${INFURA_ID}`, 
        0, 1, true, path
    ),
  network_id: networkId,
  gas,
  gasPrice,
});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ropsten: configNetwok('ropsten', 3),
    kovan: configNetwok('kovan', 42),
    rinkeby: configNetwok('rinkeby', 4),
    main: configNetwok('mainnet', 1),
    nile: configNetwok('nile', 8995, "m/44'/60'/0'/0/", 6600000, 2e9),
    pacific: configNetwok('pacific', 846353),
  },
  compilers: {
    solc: {
      version: '0.5.6',
      settings: {
        optimizer: {
          // enabled: true,
          // runs: 200
        }
      }
    }
  }
};
