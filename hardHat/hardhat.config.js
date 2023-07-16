/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "_uvCubg2c_GTpcIQrFeQRubNhceH1LD6";
// const ROPSTEN_PRIVATE_KEY=""
const SEPOLIA_PRIVATE_KEY_PRIVATE_KEY = "a4daa1fa1f2ce60bf3f9c50845419a49f7a76ecc117178dafb2a6ac7b4220971"


module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY_PRIVATE_KEY}`]
    }
  }
};
