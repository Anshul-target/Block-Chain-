// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol"; //WEcan write the javascript code

contract Token {
    string public name = "Hardhat Token";
    string public symbol = "HBT";
    uint public totalSupply = 10000;
    address public owner;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint amount) external {
        console.log("Sender balance is %s the tokens", balances[msg.sender]);
        console.log("Sender  is sending %s token to %s address", amount, to);
        require(balances[msg.sender] >= amount, "NOT ENOUGH AMOUNT");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
