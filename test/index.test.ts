import { arrayify, defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { setupInvoice } from "./fixture";

describe("Invoice.sol", () => {
	const abiCoder = defaultAbiCoder;

	it("Signature", async () => {
		const { Invoice, deployer } = await setupInvoice();
		const signer = await ethers.getSigner(deployer.address);

		const encoded = abiCoder.encode(["uint256"], [1234]);
		const hash = arrayify(keccak256(encoded));
		const signature = await signer.signMessage(hash);
		console.log("hash", Buffer.from(hash).toString("hex"));
		console.log(
			await Invoice.onlyWithSignature(deployer.address, 1234, signature)
		);
	});
});
