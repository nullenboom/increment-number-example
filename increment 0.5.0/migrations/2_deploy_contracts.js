var IncrementShort = artifacts.require("./IncrementShort.sol");
var IncrementLong = artifacts.require("./IncrementLong.sol");

module.exports = function(deployer) {
  deployer.deploy(IncrementShort);
  deployer.deploy(IncrementLong);
};
