const hre = require("hardhat");
//const PRICE = "500000000000000000" // 
async function main() {
  try {
    const mathNFT = await hre.ethers.getContractFactory("MathClub");
    const NFT = await mathNFT.deploy();
    await NFT.deployed();
    console.log("MathClub deployed to:", NFT.address);
  } catch (error) {
    console.log(error);
  }  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })