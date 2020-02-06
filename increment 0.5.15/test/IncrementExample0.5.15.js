const IncrementShort = artifacts.require("./IncrementShort.sol");
const IncrementLong = artifacts.require("./IncrementLong.sol");

contract("IncrementShort", async accounts => {
  it("Solidity Version 0.5.15", async () => {
    const incrementShort = await IncrementShort.new();
		await incrementShort.increment();
		await incrementShort.increment();
	
  });
});

contract("IncrementLong", async accounts => {
  it("Solidity Version 0.5.15", async () => {
    const incrementLong = await IncrementLong.new();
		await incrementLong.increment();
		await incrementLong.increment();
  });
});