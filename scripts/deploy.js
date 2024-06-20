const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AnasCalculator = await ethers.getContractFactory("AnasCalculator");
  const anasCalculator = await AnasCalculator.deploy("Tushar");

  await anasCalculator.waitForDeployment()

  console.log("AnasCalculator address:", await anasCalculator.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
