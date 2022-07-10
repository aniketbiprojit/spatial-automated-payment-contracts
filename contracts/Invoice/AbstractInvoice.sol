// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

abstract contract AbstractInvoice {
	enum Frequency {
		Single,
		Daily,
		Weekly,
		Monthly,
		Quarterly,
		Yearly
	}

	// the keccak of this should be in system
	struct InvoiceData {
		address payee;
		address payer;
		uint256 amount;
		address currency;
		// how often
		Frequency frequency;
		// first payment
		uint256 startingTime;
		// if first payment was supposed to be on 10-May-2022, 12PM,
		// the system can try to make that payment for next 24 hours buffer
		uint256 durationForRetiresBeforeFailure;
		// expiration of payment
		uint256 expiry;
		// payment nonce
		uint256 paymentNonce;
		// unique paramater
		bytes32 paymentParameter;
	}

	function execute(InvoiceData memory invoiceData, bytes memory signature)
		external
		virtual;
}
