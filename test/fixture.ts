import {
	deployments,
	ethers,
	getNamedAccounts,
	getUnnamedAccounts,
} from "hardhat";
import { Invoice } from "../typechain";
import { setupUser, setupUsers } from "../utils";

export const setupInvoice = deployments.createFixture(async () => {
	await deployments.fixture(["Invoice"]);
	const Invoice = (await ethers.getContract("Invoice")) as Invoice;
	const contracts = { Invoice };

	const { deployer: deployerAddress } = await getNamedAccounts();
	const userAddresses = await getUnnamedAccounts();

	const deployer = await setupUser(deployerAddress, contracts);
	const users = await setupUsers(userAddresses, contracts);

	return {
		...contracts,
		deployer,
		users,
	};
});
