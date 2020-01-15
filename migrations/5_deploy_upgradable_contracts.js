// var OceanToken = artifacts.require("Ocean/OceanToken.sol");
// const { scripts, ConfigManager } = require('@openzeppelin/cli');
// const { add, push, create } = scripts;

// async function deploy(contractName, accounts, options) {
// 	add({ contractsData: [{ name: contractName, alias: contractName }] });
// 	console.log(2)
// 	await push({
// 		...options,
// 		force: true
// 	});
// 	console.log(3)
// 	await create(Object.assign({ contractAlias: contractName }, {
// 		...options,
// 		init: 'initialize',
//     	args: `${accounts[0]},${accounts[0]}`
// 	}));
// 	console.log(4)
// }

// module.exports = (deployer, networkName, accounts) => {
// 	deployer.then(async () => {
// 	    const { network, txParams } = await ConfigManager.initNetworkConfiguration({ network: networkName, from: accounts[0] })
// 	    console.log('params', network, txParams)
// 	    await deploy('OceanToken', accounts, { network, txParams })
// 	    const deployed = await OceanToken.deployed()
// 	    console.log('Validate', deployed.address)
// 	  })
// }