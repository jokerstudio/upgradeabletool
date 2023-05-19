// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

contract BoxV2 is Initializable, PausableUpgradeable {
    string public version;
    uint256 private value;

    event ValueChanged(uint256 newValue);

    function initialize(string memory _version) external reinitializer(2) {
        __Box_init(_version);
    }

    function __Box_init(string memory _version) internal onlyInitializing {
        version = _version;
    }

    function store(uint256 newValue) external whenNotPaused {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() external view returns (uint256) {
        return value;
    }

    function increment() external whenNotPaused {
        value++;
    }
}
