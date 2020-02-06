module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  mocha: {
    reporter: "scenario-eth-gas-reporter",
    reporterOptions: {
      excludeContracts: ["Migrations"]
    }
  }, 
  compilers: {
    solc: {
	  version: "0.5.15",
	  settings: {
		optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
    }
  }
};
