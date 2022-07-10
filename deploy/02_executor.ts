import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { Invoice } from "../typechain";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy, execute } = deployments;
	const { deployer } = await getNamedAccounts();

	const Invoice = (await ethers.getContract("Invoice")) as Invoice;

	const Executor = await deploy("Executor", {
		from: deployer,
		proxy: {
			proxyContract: "OptimizedTransparentProxy",
			execute: {
				init: {
					methodName: "initialize",
					args: [Invoice.address],
				},
			},
		},
		log: true,
		skipIfAlreadyDeployed: true,
	});

	if ((await Invoice.EXECUTOR_CONTRACT()) !== Executor.address) {
		await execute(
			"Invoice",
			{ from: deployer, log: true },
			"setExecutorContract",
			Executor.address
		);
	}
};

export default func;
func.dependencies = ["Invoice"];
func.tags = ["Executor"];
