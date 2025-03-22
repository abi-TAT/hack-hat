// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EligibilityVerification {
    mapping(address => bool) public isEligible;

    function setEligibility(address _user, bool _status) public {
        isEligible[_user] = _status;
    }

    function checkEligibility(address _user) public view returns (bool) {
        return isEligible[_user];
    }
}