import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployHousingRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("HousingRegistry", {
    from: deployer,
    // Contract constructor arguments:
    //! NOTE: Change deployer to your address so it becomes the owner in the contract
    // ! NOTE: change the address to your erc20
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const housingRegistry = await hre.ethers.getContract<Contract>("HousingRegistry", deployer);
  console.log("HousingRegistry deployed to:", housingRegistry.address);
};

export default deployHousingRegistry;

deployHousingRegistry.tags = ["HousingRegistry"];