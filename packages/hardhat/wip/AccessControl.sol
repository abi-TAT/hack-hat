// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    address public admin;
    mapping(address => bool) public hasAccess;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function grantAccess(address _user) public onlyAdmin {
        hasAccess[_user] = true;
    }

    function revokeAccess(address _user) public onlyAdmin {
        hasAccess[_user] = false;
    }
}