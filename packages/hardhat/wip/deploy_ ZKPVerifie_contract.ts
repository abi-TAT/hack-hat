import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployZKPVerifier: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ZKPVerifier", {
    from: deployer,
    args: [], // Replace with actual constructor arguments if needed
    log: true,
    autoMine: true,
  });

  const zkpVerifier = await hre.ethers.getContract<Contract>("ZKPVerifier", deployer);
  console.log("ZKPVerifier deployed to:", zkpVerifier.address);
};

export default deployZKPVerifier;

deployZKPVerifier.tags = ["ZKPVerifier"];