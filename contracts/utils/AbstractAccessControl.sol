// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

abstract contract AbstractAccessControl is
	OwnableUpgradeable,
	ReentrancyGuardUpgradeable
{
	mapping(address => bool) private _admins;

	function init() internal onlyInitializing {
		__Ownable_init();
		__ReentrancyGuard_init();
	}

	function isAdmin(address user) public view returns (bool) {
		return _admins[user];
	}

	modifier onlyAdmin() {
		require(
			isAdmin(_msgSender()) || owner() == _msgSender(),
			"Caller is not admin"
		);
		_;
	}
}
