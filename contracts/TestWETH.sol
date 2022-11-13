//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

interface IWETH {
    function balanceOf(address account) external view returns (uint256);
    function deposit() external payable;
    function withdraw(uint) external;
}

contract TestWETH {
    address WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function depositAndWithdraw() payable external {
        IWETH(WETH).deposit{value: msg.value}();
        IWETH(WETH).withdraw(msg.value);
    }
}
