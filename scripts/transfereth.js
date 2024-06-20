const { ethers } = require("hardhat");

async function main() {
  const signer = await ethers.getSigners();

  const receiver = "0x1663104334D4D7BeFEcd52Bdd7bb732F24D3AFe5";
  console.log(`Transferring 1.0 ETH to ${receiver}`);
  const txn = await signer[0].sendTransaction({
    to: receiver,
    value: ethers.parseEther("1.0"),
  });
  console.log(`Transaction hash: ${txn.hash}`);
  txn.wait();

  console.log(`Transferred 1.0 ETH to ${receiver}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
