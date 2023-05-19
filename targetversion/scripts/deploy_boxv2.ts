import { ethers, upgrades } from "hardhat";

const proxyAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Deploying Box...");
    const proxy = await upgrades.upgradeProxy(proxyAddress, BoxV2, { call: {fn: "initialize", args: ["2.0"]} });
  
    console.log(proxy.address," proxy address");
    console.log(await upgrades.erc1967.getAdminAddress(proxy.address)," admin address");
    console.log(await upgrades.erc1967.getImplementationAddress(proxy.address)," implementation address");

    const boxv2 = await BoxV2.attach(proxy.address);

    console.log("version", await boxv2.version());
    console.log("value", await boxv2.retrieve());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
