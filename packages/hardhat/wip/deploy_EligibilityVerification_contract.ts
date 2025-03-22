import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployEligibilityVerification: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("EligibilityVerification", {
    from: deployer,
    args: [], // No constructor arguments
    log: true,
    autoMine: true,
  });

  const eligibilityVerification = await hre.ethers.getContract<Contract>("EligibilityVerification", deployer);
  console.log("EligibilityVerification deployed to:", eligibilityVerification.address);
};

export default deployEligibilityVerification;

deployEligibilityVerification.tags = ["EligibilityVerification"];