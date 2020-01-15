var StandardBounties = artifacts.require("StandardBounties/StandardBounties.sol");

module.exports = function(deployer) {
  deployer.deploy(StandardBounties);
};