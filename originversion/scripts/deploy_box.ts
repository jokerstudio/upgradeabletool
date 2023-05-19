import { ethers, upgrades } from "hardhat";

async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...")
    const proxy = await upgrades.deployProxy(Box,["1.0", 42], { initializer: 'initialize' });
  
    console.log(proxy.address," proxy address");
    console.log(await upgrades.erc1967.getAdminAddress(proxy.address)," admin address");
    console.log(await upgrades.erc1967.getImplementationAddress(proxy.address)," implementation address");

    const box = await Box.attach(proxy.address);

    console.log("version", await box.version());
    console.log("value", await box.retrieve());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
