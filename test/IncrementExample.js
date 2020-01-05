const IncrementShort = artifacts.require("./IncrementShort.sol");
const IncrementLong = artifacts.require("./IncrementLong.sol");

const addTimes = getRandomRange(25,50);

contract("IncrementShort", async accounts => {
  it("Add 1 Time", async () => {
    const incrementShort = await IncrementShort.new();
    const add = await incrementShort.add(10);
	const add1 = await incrementShort.add(10);
	
  });
});


contract("IncrementLong", async accounts => {
  it("Add 1 Time", async () => {
    const incrementLong = await IncrementLong.new();
    const add = await incrementLong.add(10);
	const add1 = await incrementLong.add(10);
  });
});


contract("IncrementShort", async accounts => {
  it("Add Multiple Time", async () => {
    const incrementShort = await IncrementShort.new();
	
	for(var i =0; i < addTimes; i++){
	   await incrementShort.add(10);
	}
    
  });
});


contract("IncrementLong", async accounts => {
  it("Add Multiple Time", async () => {
    const incrementLong = await IncrementLong.new();
	
	for(var i =0; i < addTimes; i++){
		await incrementLong.add(10);
	}	
    
  });
});

function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}