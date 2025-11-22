import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { parseEther } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Set the withdrawal limit to 5 ETH and bank cap to 100 ETH
  const WITHDRAWAL_LIMIT = parseEther("5");
  const BANK_CAP = parseEther("100");

  await deploy("KipuBank", {
    from: deployer,
    args: [WITHDRAWAL_LIMIT, BANK_CAP],
    log: true,
    autoMine: true,
  });
};

export default func;
func.tags = ["KipuBank"];

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
// deployYourContract.tags = ["KipuBank"];
