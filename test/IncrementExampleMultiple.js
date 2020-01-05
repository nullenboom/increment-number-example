const IncrementShort = artifacts.require("./IncrementShort.sol");
const IncrementLong = artifacts.require("./IncrementLong.sol");

const addTimes = getRandomRange(25,50);

contract("IncrementShort", async accounts => {
  it("Increment Multiple Times", async () => {
    const incrementShort = await IncrementShort.new();
	
	for(var i =0; i < addTimes; i++){
	   await incrementShort.increment();
	}
    
  });
});


contract("IncrementLong", async accounts => {
  it("Increment Multiple Times", async () => {
    const incrementLong = await IncrementLong.new();
	
	for(var i =0; i < addTimes; i++){
		await incrementLong.increment();
	}	
    
  });
});

function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}