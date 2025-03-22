// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundingMaintenance {
    uint256 public totalFunds;
    mapping(uint256 => uint256) public maintenanceRequests;

    event FundsDeposited(uint256 amount);
    event MaintenanceRequested(uint256 housingUnitId, uint256 amount);

    function depositFunds() public payable {
        totalFunds += msg.value;
        emit FundsDeposited(msg.value);
    }

    function requestMaintenance(uint256 _housingUnitId, uint256 _amount) public {
        require(totalFunds >= _amount, "Insufficient funds");
        maintenanceRequests[_housingUnitId] += _amount;
        totalFunds -= _amount;
        emit MaintenanceRequested(_housingUnitId, _amount);
    }
}