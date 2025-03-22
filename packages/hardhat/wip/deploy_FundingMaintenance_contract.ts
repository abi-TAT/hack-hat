import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployFundingMaintenance: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("FundingMaintenance", {
    from: deployer,
    args: [], // No constructor arguments
    log: true,
    autoMine: true,
  });

  const fundingMaintenance = await hre.ethers.getContract<Contract>("FundingMaintenance", deployer);
  console.log("FundingMaintenance deployed to:", fundingMaintenance.address);
};

export default deployFundingMaintenance;

deployFundingMaintenance.tags = ["FundingMaintenance"];