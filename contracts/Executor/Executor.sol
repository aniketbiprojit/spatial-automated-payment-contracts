// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "../Invoice/AbstractInvoice.sol";
import "../utils/AbstractAccessControl.sol";

contract Executor is AbstractAccessControl {
	AbstractInvoice public INVOICE_CONTRACT;

	function initialize(AbstractInvoice _INVOICE_CONTRACT) public initializer {
		init();
		INVOICE_CONTRACT = _INVOICE_CONTRACT;
	}

	function setInvoiceContract(AbstractInvoice _INVOICE_CONTRACT) external {
		INVOICE_CONTRACT = _INVOICE_CONTRACT;
	}

	function callExecute(AbstractInvoice.InvoiceData[] memory invoiceData, bytes[] memory signatures)
		external
		onlyAdmin
		returns (bool[] memory returnData)
	{
		require(signatures.length == invoiceData.length, "Legth mismatch");
		returnData = new bool[](signatures.length);

		for (uint256 index = 0; index < signatures.length; index++) {
			try INVOICE_CONTRACT.execute(invoiceData[index], signatures[index]) {
				returnData[index] = true;
			} catch {
				returnData[index] = false;
			}
		}
	}
}
