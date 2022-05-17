require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
const polygonScanApi = fs.readFileSync(".polygonScanApi").toString().trim();
const moonScanApi = fs.readFileSync(".moonscanApi").toString().trim();
const ALCHEMY_URL = fs.readFileSync(".alchemyUrl").toString().trim();
const moralisNodes = require("./moralisNodes")
const etherscanKeys = require("./etherscan")
const AVAX_URL = fs.readFileSync(".avaxUrl").toString().trim();

module.exports = {
  defaultNetwork: "bscTest",
  networks: {
    bsc: {
      url: moralisNodes?.bscMainnet || "https://bsc-dataseed2.binance.org",
      accounts: [privateKey],	
    },
    bscTest: {
    url: moralisNodes?.bscTestnet || "https://data-seed-prebsc-1-s1.binance.org",
    accounts: [privateKey],	
    },
  },
  etherscan: {
    apiKey: {
      bsc: etherscanKeys.bsc,
      bscTest: etherscanKeys.bscTest,
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
