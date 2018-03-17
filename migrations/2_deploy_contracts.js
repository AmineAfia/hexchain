var Election = artifacts.require("./Election.sol");
var Health = artifacts.require("./Health.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
  deployer.deploy(Health);
};
