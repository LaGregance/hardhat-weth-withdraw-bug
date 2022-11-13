import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: process.env.HARDHAT_ARCHIVE_NODE as string,
        blockNumber: 15962400,
      }
    }
  },
  mocha: {
    timeout: 60000,
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
  },
};

export default config;
