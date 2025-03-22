// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WaitlistManagement {
    address[] public waitlist;
    mapping(address => uint256) public waitlistPosition;

    function joinWaitlist() public {
        require(waitlistPosition[msg.sender] == 0, "Already in waitlist");
        waitlist.push(msg.sender);
        waitlistPosition[msg.sender] = waitlist.length;
    }

    function getWaitlist() public view returns (address[] memory) {
        return waitlist;
    }
}