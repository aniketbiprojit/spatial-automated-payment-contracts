import { BigNumberish } from "ethers";
import { arrayify, keccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { Frequency, abiCoder } from "./index.test";

export async function getSignature({
	invoiceData,
	signer,
}: {
	invoiceData: {
		amount: BigNumberish;
		startingTime: BigNumberish;
		paymentParameter: string;
		paymentNonce: BigNumberish;
		payer: string;
		payee: string;
		frequency: Frequency;
		expiry: BigNumberish;
		durationForRetiresBeforeFailure: BigNumberish;
		currency: string;
	};
	signer: { address: string };
}) {
	const encoded = abiCoder.encode(
		["address", "address", "uint256", "address", "uint8", "uint256", "uint256", "uint256", "uint256", "bytes32"],
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
	const signature = await (await ethers.getSigner(signer.address)).signMessage(hash);
	return signature;
}
