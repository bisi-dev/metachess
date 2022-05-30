const HDWalletProvider = require("@truffle/hdwallet-provider")
require('dotenv').config(); // Load .env file

//Infura EP
const endpoint = `https://polygon-mumbai.infura.io/v3/` +process.env.PROJECT_ID

module.exports = {
  networks: {
   // For Ganache, your personal blockchain
   development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port 
      network_id: "*",       // Any network (default: none)
    },
    //For Mumbai MATIC, polygon testnet
    matic: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, endpoint),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
      networkCheckTimeout: 100000,
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}