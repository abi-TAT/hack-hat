// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HousingRegistry {
    struct HousingUnit {
        uint256 id;
        string location;
        uint256 capacity;
        bool isAvailable;
    }

    // State Variables
    address public immutable owner;

    HousingUnit[] public housingUnits;
    uint256 public unitCount;

    event HousingUnitAdded(uint256 id, string location, uint256 capacity);


    // Constructor: Called once on contract deployment
    // Check packages/hardhat/deploy/00_deploy_your_contract.ts
    constructor(address _owner) {
        owner = _owner;
    }

    function addHousingUnit(string memory _location, uint256 _capacity) public {
        housingUnits.push(HousingUnit(unitCount, _location, _capacity, true));
        emit HousingUnitAdded(unitCount, _location, _capacity);
        unitCount++;
    }

    function getHousingUnit(uint256 _id) public view returns (HousingUnit memory) {
        return housingUnits[_id];
    }
}