import { expect } from "chai";
import { Event, Signer } from "ethers";
import { defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { ethers, network } from "hardhat";
import { PromiseType } from "utility-types";
import { setupInvoice } from "./fixture";
import { getSignature } from "./getSignature";

export enum Frequency {
	Single,
	Daily,
	Weekly,
	Monthly,
	Quarterly,
	Yearly,
}
export const abiCoder = defaultAbiCoder;

describe("Invoice.sol", () => {
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
		const signature = await getSignature({ invoiceData, signer });
		expect(await Invoice.verifySignature(invoiceData, signature)).to.eq(true);
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
			const invoiceData = {
				payee: alice.address,
				payer: bob.address,
				currency: ERC20.address,
				frequency: Frequency.Daily,
				startingTime: startingTime,
				durationForRetiresBeforeFailure: durationForRetiresBeforeFailure,
				expiry: expiryTime,
				paymentNonce: 1,
				paymentParameter: ethers.constants.HashZero,
				amount: ethers.utils.parseEther("1000"),
			};
			const tx = await alice.Invoice.createInvoice(invoiceData);
			const receipts = await tx.wait();
			const event = receipts.events?.filter((elem) => elem.event === "InvoiceCreated")[0] as Event;
			const { paymentParameter, paymentNonce } = event.decode?.(event.data, event.topics)?.[0];
			invoiceData.paymentParameter = paymentParameter;
			invoiceData.paymentNonce = paymentNonce;

			await bob.ERC20.approve(Invoice.address, ethers.constants.MaxUint256);

			const signature = await getSignature({ invoiceData, signer: bob });
			expect(await Invoice.verifySignature(invoiceData, signature)).to.eq(true);

			await Invoice.setExecutorContract(deployer.address);

			await network.provider.send("evm_increaseTime", [startingTime]);
			await network.provider.send("evm_mine");
			const r = await (await Invoice.execute(invoiceData, signature)).wait();
			expect(r.events?.[2]?.args?.[0].paymentParameter).to.eq(invoiceData.paymentParameter);

			await expect(Invoice.execute(invoiceData, signature)).to.be.revertedWith("Already paid");
		});
	});
});
