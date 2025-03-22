import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployHouseAssignment: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Address of the housing NFT contract (replace with actual address)
  const houseRegistryAddress = "0xYourHouseRegistryContractAddress";

  await deploy("HouseAssignment", {
    from: deployer,
    args: [houseRegistryAddress], // Pass the housing NFT contract address
    log: true,
    autoMine: true,
  });

  const houseAssignment = await hre.ethers.getContract<Contract>("HouseAssignment", deployer);
  console.log("HouseAssignment deployed to:", houseAssignment.address);
};

export default deployHouseAssignment;

deployHouseAssignment.tags = ["HouseAssignment"];