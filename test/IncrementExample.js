const IncrementShort = artifacts.require("./IncrementShort.sol");
const IncrementLong = artifacts.require("./IncrementLong.sol");

const addTimes = getRandomRange(25,50);

contract("IncrementShort", async accounts => {
  it("Increment 2 Time", async () => {
    const incrementShort = await IncrementShort.new();
    const add = await incrementShort.increment();
	const add1 = await incrementShort.increment();
	
  });
});


contract("IncrementLong", async accounts => {
  it("Increment 2 Time", async () => {
    const incrementLong = await IncrementLong.new();
    const add = await incrementLong.increment();
	const add1 = await incrementLong.increment();
  });
});


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