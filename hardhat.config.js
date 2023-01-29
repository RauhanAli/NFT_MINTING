//require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY, INFURA_API_KEY} = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: 1337
    },
    localhost:{
      url: "http://127.0.0.1:8545"  
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
      gas: 2100000,
			gasPrice: 8000000000,
			saveDeployments: true,
      chainId: 5
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
      gas: 21000000,
      gasPrice: 80000000000,
			saveDeployments: true,
      allowUnlimitedContractSize: true,
      // chainId: 1
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
      gas: 2100000,
			gasPrice: 8000000000,
			saveDeployments: true,
      chainId: 11155111
    },
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
       gas: 21000000,
			gasPrice: 100000000000,
			saveDeployments: true,
      chainId: 97
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
      gas: 2100000,
			gasPrice: 8000000000,
			saveDeployments: true,
      chainId: 56
    },
    
    
  },
  
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    //  apiKey: "J9FHY4MFAVAS42EY3ZZXEZ1ZAK6Z3NJAAG"
     apiKey: "7ZW8Z1FWEGH6VYNV72DUR359XGABPUE6AK"
  },

  
  solidity: {
    version: "0.8.7",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};