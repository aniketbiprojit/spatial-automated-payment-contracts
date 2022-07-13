// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "../utils/AbstractAccessControl.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol";
import "./AbstractInvoice.sol";

contract Invoice is AbstractAccessControl, AbstractInvoice {
	using SafeERC20Upgradeable for IERC20Upgradeable;
	using StringsUpgradeable for uint256;

	string public UNIQUE_INDENTIFIER;

	address public EXECUTOR_CONTRACT;

	function initialize(address _EXECUTOR_CONTRACT) public initializer {
		init();
		UNIQUE_INDENTIFIER = "PBIT-APP";
		feePercent = 10;

		_durations[Frequency.Single] = 0;
		_durations[Frequency.Daily] = 24 hours;
		_durations[Frequency.Weekly] = 7 days;
		_durations[Frequency.Monthly] = 30 days;
		_durations[Frequency.Quarterly] = 180 days;
		_durations[Frequency.Yearly] = 365 days;

		EXECUTOR_CONTRACT = _EXECUTOR_CONTRACT;
	}

	uint256 public feePercent;

	mapping(Frequency => uint256) internal _durations;

	mapping(bytes32 => bool) internal _createdInvoices;
	mapping(bytes32 => mapping(uint256 => bool)) internal _paidInvoices;
	mapping(uint256 => bool) public cancelledInvoices;

	mapping(address => bool) public payees;
	mapping(IERC20Upgradeable => bool) public currencies;

	uint256 public nonce;

	function isInRange(
		uint256 startingTime,
		Frequency frequency,
		uint256 durationForRetiresBeforeFailure,
		uint256 expiry
	) internal view returns (bool, uint256) {
		uint256 start = startingTime;
		uint256 end = start + durationForRetiresBeforeFailure;
		while (end < expiry) {
			start += _durations[frequency];
			end = start + durationForRetiresBeforeFailure;
			if (block.timestamp > start && end < expiry) {
				return (true, start);
			}
			if (start > block.timestamp) {
				return (false, 0);
			}
		}
		return (false, 0);
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
			invoiceData.startingTime >= (block.timestamp + 1 hours),
			"Invoice too soon. Cannot process"
		);
		require(
			invoiceData.expiry > invoiceData.startingTime &&
				((invoiceData.expiry - invoiceData.startingTime) >= 24 hours),
			"Expiry should be greater than 24 hours"
		);
		require(
			invoiceData.durationForRetiresBeforeFailure >= 12 hours,
			"Duration for retries should be greater than 12 hours"
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

	function _executeInvoice(InvoiceData memory invoiceData) internal {
		bytes32 _hash = keccak256(abi.encode(invoiceData));

		require(_createdInvoices[_hash], "Invoice not found");

		(bool inRange, uint256 start) = isInRange(
			invoiceData.startingTime,
			invoiceData.frequency,
			invoiceData.durationForRetiresBeforeFailure,
			invoiceData.expiry
		);
		require(inRange, "Cannot execute");
		require(_paidInvoices[_hash][start] == false, "Already paid");
		require(
			cancelledInvoices[invoiceData.paymentNonce] != true,
			"Cancelled invoice"
		);
		(uint256 pending, uint256 fee) = feePercentOfX(invoiceData.amount);
		_paidInvoices[_hash][start] = true;
		IERC20Upgradeable(invoiceData.currency).safeTransferFrom(
			invoiceData.payer,
			invoiceData.payee,
			pending
		);
		IERC20Upgradeable(invoiceData.currency).safeTransferFrom(
			invoiceData.payer,
			address(this),
			fee
		);

		emit ExecuteInvoice(invoiceData, start);
	}

	function _executeInvoiceWithSignature(
		InvoiceData memory invoiceData,
		bytes memory signature
	) internal {
		require(
			verifySignature(invoiceData, signature),
			"Signature verification failed"
		);
		_executeInvoice(invoiceData);
	}

	function execute(InvoiceData memory invoiceData, bytes memory signature)
		external
		override
	{
		require(_msgSender() == EXECUTOR_CONTRACT, "Only executor contract");
		_executeInvoiceWithSignature(invoiceData, signature);
	}

	event InvoiceCreated(
		InvoiceData invoiceData,
		bytes32 _hash,
		uint256 _nonce
	);

	function setFeePercent(uint256 _feePercent) external onlyAdmin {
		require(_feePercent < 100 && _feePercent > 0, "Out of range");
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

	function verifySignature(
		InvoiceData memory invoiceData,
		bytes memory signature
	) public view returns (bool) {
		bytes32 hash = keccak256(abi.encode(invoiceData));
		return
			SignatureCheckerUpgradeable.isValidSignatureNow(
				invoiceData.payer,
				ECDSAUpgradeable.toEthSignedMessageHash(hash),
				signature
			);
	}

	function setExecutorContract(address _EXECUTOR_CONTRACT)
		external
		onlyAdmin
	{
		EXECUTOR_CONTRACT = _EXECUTOR_CONTRACT;
		emit SetExecutorContract(EXECUTOR_CONTRACT);
	}

	event SetPayee(address payee, bool enabled);
	event SetCurrency(IERC20Upgradeable payee, bool enabled);
	event SetFeePercent(uint256 _feePercent);
	event SetExecutorContract(address EXECUTOR_CONTRACT);
	event ExecuteInvoice(InvoiceData invoiceData, uint256 start);
}
