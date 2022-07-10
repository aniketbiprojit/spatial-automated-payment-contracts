import { expect } from "chai";
import { arrayify, defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { setupInvoice } from "./fixture";

describe("Invoice.sol", () => {
	const abiCoder = defaultAbiCoder;

	it("Signature", async () => {
		const { Invoice, deployer } = await setupInvoice();
		const signer = await ethers.getSigner(deployer.address);

		const invoiceData = {
			amount: 1,
			startingTime: 1,
			paymentParameter: keccak256(abiCoder.encode(["uint256"], ["3"])),
			paymentNonce: 1,
			payer: deployer.address,
			payee: deployer.address,
			frequency: 0,
			expiry: 2,
			durationForRetiresBeforeFailure: 24,
			currency: deployer.address,
		};
		const encoded = abiCoder.encode(
			[
				"address",
				"address",
				"uint256",
				"address",
				"uint8",
				"uint256",
				"uint256",
				"uint256",
				"uint256",
				"bytes32",
			],
			[
				invoiceData.payee,
				invoiceData.payer,
				invoiceData.amount,
				invoiceData.currency,
				invoiceData.frequency,
				invoiceData.startingTime,
				invoiceData.durationForRetiresBeforeFailure,
				invoiceData.expiry,
				invoiceData.paymentNonce,
				invoiceData.paymentParameter,
			]
		);
		const hash = arrayify(keccak256(encoded));
		const signature = await signer.signMessage(hash);
		expect(await Invoice.verifySignature(invoiceData, signature)).to.eq(
			true
		);
	});
});
