import { expect } from "chai";
import { arrayify, defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { PromiseType } from "utility-types";
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

	describe("Invoice", () => {
		type SetupInvoice = PromiseType<ReturnType<typeof setupInvoice>>;
		type UserType = SetupInvoice["deployer"];
		let deployer: UserType, alice: UserType, bob: UserType;
		let Invoice: SetupInvoice["Invoice"];
		let Executor: SetupInvoice["Executor"];
		let ERC20: SetupInvoice["ERC20"];
		beforeEach(async () => {
			({
				deployer,
				users: [alice, bob],
				Invoice,
				Executor,
				ERC20,
			} = await setupInvoice());
			expect(deployer).to.be.ok;
			expect(alice).to.be.ok;
			expect(Invoice).to.be.ok;
			expect(Executor).to.be.ok;
			expect(ERC20).to.be.ok;

			await Invoice.setCurrency([ERC20.address], true);
			await Invoice.whitelistPayee([alice.address], true);
			await Invoice.setFeePercent(10);
		});

		it("create invoice", async () => {
			const startingTime = Math.floor(Date.now() / 1000) + 3600 * 1.5;
			const durationForRetiresBeforeFailure = 12 * 3600;
			const expiryTime = startingTime + 3600 * 24 * 7;
			await alice.Invoice.createInvoice({
				payee: alice.address,
				payer: bob.address,
				currency: ERC20.address,
				frequency: 2,
				startingTime: startingTime,
				durationForRetiresBeforeFailure:
					durationForRetiresBeforeFailure,
				expiry: expiryTime,
				paymentNonce: 1,
				paymentParameter: ethers.constants.HashZero,
				amount: ethers.utils.parseEther("1000"),
			});
		});
	});
});
