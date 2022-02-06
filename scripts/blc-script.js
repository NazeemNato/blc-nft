const hre = require("hardhat");

async function main() {

  const Blc = await hre.ethers.getContractFactory("BoredLaptopClub");
  const blc = await Blc.deploy();

  await blc.deployed();

  await hre.run("verify:verify", {
    address: blc.address,
    constructorArguments: []
  })

  console.log("blc deployed to:", blc.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
