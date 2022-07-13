import {
	deployments,
	ethers,
	getNamedAccounts,
	getUnnamedAccounts,
} from "hardhat";
import { ERC20, Executor, Invoice } from "../typechain";
import { setupUser, setupUsers } from "../utils";

export const setupInvoice = deployments.createFixture(async () => {
	await deployments.fixture(["Invoice", "Executor"]);
	const Invoice = (await ethers.getContract("Invoice")) as Invoice;
	const Executor = (await ethers.getContract("Executor")) as Executor;

	const ERC20_Factory = await ethers.getContractFactory(
		"ERC20PresetFixedSupply"
	);
	const { deployer: deployerAddress } = await getNamedAccounts();

	const ERC20 = (await ERC20_Factory.deploy(
		"Tether",
		"USDT",
		ethers.utils.parseEther("10000000"),
		deployerAddress
	)) as ERC20;

	const contracts = { Invoice, Executor, ERC20 };

	const userAddresses = await getUnnamedAccounts();

	const deployer = await setupUser(deployerAddress, contracts);
	const users = await setupUsers(userAddresses, contracts);

	for (let index = 0; index < users.length; index++) {
		const user = users[index];
		await ERC20.transfer(user.address, ethers.utils.parseEther("100000"));
	}

	return {
		...contracts,
		deployer,
		users,
	};
});
