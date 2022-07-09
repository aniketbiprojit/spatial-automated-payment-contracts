import { Contract } from "ethers";
import { readFileSync } from "fs";
import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { join } from "path";
export const HARDHAT_NETWORK_NAME = "hardhat";

export async function skipUnlessTest(
	hre: HardhatRuntimeEnvironment
): Promise<boolean> {
	return !isTest(hre);
}

export function isTest(hre: HardhatRuntimeEnvironment): boolean {
	return (
		hre.network.name === HARDHAT_NETWORK_NAME ||
		hre.network.name === "localhost" ||
		!!process.env.HARDHAT_FORK
	);
}

type Contracts = Record<string, Contract>;

export async function setupUsers<T extends Contracts>(
	addresses: string[],
	contracts: T
): Promise<({ address: string } & T)[]> {
	const users: ({ address: string } & T)[] = [];
	for (const address of addresses) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const user: any = { address };
		for (const key of Object.keys(contracts)) {
			user[key] = contracts[key].connect(await ethers.getSigner(address));
		}
		users.push(user);
	}
	return users;
}

export async function setupUser<T extends Contracts>(
	address: string,
	contracts: T
): Promise<{ address: string } & T> {
	const users = await setupUsers([address], contracts);
	return users[0];
}
