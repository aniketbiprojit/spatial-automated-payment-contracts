import { constants } from "ethers";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	await deploy("Invoice", {
		from: deployer,
		proxy: {
			proxyContract: "OptimizedTransparentProxy",
			execute: {
				init: {
					methodName: "initialize",
					args: [constants.AddressZero],
				},
			},
		},
		log: true,
		skipIfAlreadyDeployed: true,
	});
};

export default func;
func.dependencies = [];
func.tags = ["Invoice"];
