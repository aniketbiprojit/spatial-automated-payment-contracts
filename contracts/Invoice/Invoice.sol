// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "../utils/AbstractAccessControl.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol";
import "hardhat/console.sol";

contract Invoice is AbstractAccessControl {
	using SafeERC20Upgradeable for IERC20Upgradeable;
	using StringsUpgradeable for uint256;

	string public UNIQUE_INDENTIFIER;

	function initialize() public initializer {
		init();
		UNIQUE_INDENTIFIER = "PBIT-APP";
		feePercent = 10;
	}

	uint256 public feePercent;

	enum Frequency {
		Single,
		Daily,
		Weekly,
		Monthly,
		Quarterly,
		Yearly
	}

	mapping(bytes32 => bool) internal _createdInvoices;

	mapping(address => bool) public payees;
	mapping(IERC20Upgradeable => bool) public currencies;

	uint256 public nonce;

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

	function _createInvoice(InvoiceData memory invoiceData)
		internal
		returns (InvoiceData memory, bytes32 _hash)
	{
		require(invoiceData.amount > 0, "Amount cannot be 0");
		require(payees[invoiceData.payee], "Not a payee");
		require(
			currencies[IERC20Upgradeable(invoiceData.currency)],
			"Not a valid currency"
		);
		require(
			invoiceData.startingTime > (block.timestamp + 1 hours),
			"Invoice too soon. Cannot process"
		);
		require(
			invoiceData.expiry > invoiceData.startingTime &&
				((invoiceData.expiry - invoiceData.startingTime) > 24 hours),
			"Expiry should be greate than 24 hours"
		);
		nonce += 1;
		invoiceData.paymentParameter = keccak256(
			abi.encode(UNIQUE_INDENTIFIER, "-", nonce.toString())
		);
		invoiceData.paymentNonce = nonce;
		_hash = keccak256(abi.encode(invoiceData));
		require(_createdInvoices[_hash] != true, "Already created");
		_createdInvoices[_hash] = true;

		return (invoiceData, _hash);
	}

	function createInvoice(InvoiceData memory invoiceData)
		external
		onlyPayee
		returns (
			InvoiceData memory returnedInvoice,
			bytes32 _hash,
			uint256 _nonce
		)
	{
		(returnedInvoice, _hash) = _createInvoice(invoiceData);
		_nonce = nonce;
		emit InvoiceCreated(returnedInvoice, _hash, _nonce);
	}

	event InvoiceCreated(
		InvoiceData invoiceData,
		bytes32 _hash,
		uint256 _nonce
	);

	function setFeePercent(uint256 _feePercent) external onlyAdmin {
		require(_feePercent < 100 && _feePercent > 100, "Out of range");
		feePercent = _feePercent;
		emit SetFeePercent(feePercent);
	}

	function setCurrency(IERC20Upgradeable[] memory _currencies, bool enabled)
		external
		onlyAdmin
	{
		for (uint256 index = 0; index < _currencies.length; index++) {
			currencies[_currencies[index]] = enabled;
			emit SetCurrency(_currencies[index], enabled);
		}
	}

	function whitelistPayee(address[] memory _payees, bool enabled)
		external
		onlyAdmin
	{
		for (uint256 index = 0; index < _payees.length; index++) {
			payees[_payees[index]] = enabled;
			emit SetPayee(_payees[index], enabled);
		}
	}

	function feePercentOfX(uint256 X)
		internal
		view
		returns (uint256 pending, uint256 fee)
	{
		// _feePercent is always greater than 0 and less than 100
		fee = ((X * 100) * feePercent) / (100 * 100);
		pending = X - fee;
	}

	modifier onlyPayee() {
		require(payees[_msgSender()], "Caller is not payee.");
		_;
	}

	function onlyWithSignature(
		address signer,
		uint256 amount,
		bytes memory signature
	) external view returns (bool) {
		bytes32 hash = keccak256(abi.encodePacked(amount));
		console.logBytes32(hash);
		return
			SignatureCheckerUpgradeable.isValidSignatureNow(
				signer,
				ECDSAUpgradeable.toEthSignedMessageHash(hash),
				signature
			);
	}

	event SetPayee(address payee, bool enabled);
	event SetCurrency(IERC20Upgradeable payee, bool enabled);
	event SetFeePercent(uint256 _feePercent);
}
