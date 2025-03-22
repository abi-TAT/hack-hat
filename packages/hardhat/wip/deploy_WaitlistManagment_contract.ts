import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployWaitlistManagement: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WaitlistManagement", {
    from: deployer,
    args: [], // No constructor arguments
    log: true,
    autoMine: true,
  });

  const waitlistManagement = await hre.ethers.getContract<Contract>("WaitlistManagement", deployer);
  console.log("WaitlistManagement deployed to:", waitlistManagement.address);
};

export default deployWaitlistManagement;

deployWaitlistManagement.tags = ["WaitlistManagement"];