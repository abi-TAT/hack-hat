// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HouseAssignment is Ownable {
    IERC721 public houseRegistry; // Reference to the housing NFT contract

    mapping(address => bool) public approvedProviders; // List of verified housing providers
    mapping(uint256 => address) public houseToUser; // Track house assignments
    mapping(address => uint256[]) public userToHouses; // Track houses assigned to a user

    event ProviderApproved(address provider);
    event HouseAssigned(uint256 houseId, address indexed provider, address indexed user);

    constructor(address _houseRegistry) {
        houseRegistry = IERC721(_houseRegistry);
    }

    // 🔹 Only the contract owner (government) can approve providers
    function approveProvider(address provider) external onlyOwner {
        approvedProviders[provider] = true;
        emit ProviderApproved(provider);
    }

    // 🔹 Assign a house to a user (Only an approved provider can call this)
    function assignHouse(uint256 houseId, address user) external {
        require(approvedProviders[msg.sender], "Not an approved provider");
        require(houseRegistry.ownerOf(houseId) == msg.sender, "You don't own this house");
        require(houseToUser[houseId] == address(0), "House already assigned");

        // Transfer house NFT to user
        houseRegistry.safeTransferFrom(msg.sender, user, houseId);

        // Store assignment
        houseToUser[houseId] = user;
        userToHouses[user].push(houseId);

        emit HouseAssigned(houseId, msg.sender, user);
    }

    // 🔹 Get houses assigned to a user
    function getHousesByUser(address user) external view returns (uint256[] memory) {
        return userToHouses[user];
    }
}