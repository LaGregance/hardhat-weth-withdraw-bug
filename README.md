# hardhat-weth-withdraw-bug

Test the bug
```bash
# 1. Export an Ethereum archive node
export HARDHAT_ARCHIVE_NODE="https://eth-mainnet.g.alchemy.com/v2/<API-KEY>"

# 2. Run the tests
yarn hardhat test
```

You should see:
```
Error: Transaction reverted: function selector was not recognized and there's no fallback nor receive function
    at TestWETH.<unrecognized-selector> (contracts/TestWETH.sol:10)
    at <UnrecognizedContract>.<unknown> (0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2)
    at TestWETH.depositAndWithdraw (contracts/TestWETH.sol:15)
```
