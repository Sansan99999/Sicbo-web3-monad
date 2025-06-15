// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sicbo {
    address public owner;

    event BetPlaced(address indexed player, uint8 dice1, uint8 dice2, uint8 dice3, bool win, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function rollDice(uint8 guess) external payable {
        require(msg.value > 0, "Bet must be greater than 0");
        require(guess >= 3 && guess <= 18, "Guess must be between 3 and 18");

        uint8 dice1 = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, "dice1"))) % 6 + 1);
        uint8 dice2 = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, "dice2"))) % 6 + 1);
        uint8 dice3 = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, "dice3"))) % 6 + 1);

        uint8 total = dice1 + dice2 + dice3;
        bool win = (total == guess);

        if (win) {
            payable(msg.sender).transfer(msg.value * 5);
        }

        emit BetPlaced(msg.sender, dice1, dice2, dice3, win, msg.value);
    }

    receive() external payable {}
}
