import { ethers } from "hardhat";
import { expect } from "chai";

describe(`WETH test`, () => {
  it("WETH test", async () => {
    const [signer] = await ethers.getSigners();

    const WETH = await ethers.getContractAt(
      "IWETH",
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      signer,
    );

    const testWETHFactory = await ethers.getContractFactory("TestWETH", signer);
    const testWETH = await testWETHFactory.deploy();
    await testWETH.deployed();

    const one = ethers.utils.parseEther("1");

    // 1. Test original WETH
    await WETH.deposit({ value: one });
    expect(await WETH.balanceOf(signer.address)).to.equal(one);
    await WETH.withdraw(one);
    expect(await WETH.balanceOf(signer.address)).to.equal(0);

    // 2. Test contract
    await testWETH.depositAndWithdraw({ value: one });
  });
});
