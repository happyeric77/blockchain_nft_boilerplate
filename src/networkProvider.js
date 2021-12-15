// const path = require("path")
// const dotenv = require('dotenv');
// try{dotenv.config({ path: "./.env" })}catch(e){
//     console.log(e)
//     process.exit(1)
// }

export const supportedChains = {
    "0x61": {
        chainName: "BSC Test Net", 
        rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        symbol: "BNB",
        explorer: "https://testnet.bscscan.com/",
        // mktPlaceAddr: "0xa1771498ea3538dAf645FEaBD6E7dD8eA363aF3F", 
        mktPlaceAddr: "0x089b9c17c5BFa1f3bD8DD270991301431A5Be417",
    },
    "0x38": {
        chainName: "Binance Smart Chain Mainnet", 
        rpcUrl: "https://bsc-dataseed1.binance.org",
        symbol: "BNB",
        explorer: "https://testnet.bscscan.com/",
    },
    "0x1": {
        chainName: "Ethereum mainnet",
        symbol: "ETH",
        rpcUrl: process.env.INFURA_ETH,
        explorer: "https://etherscan.io/",
    },
    "0x4": {
        chainName: "Ethereum Testnet rinkeby",
        symbol: "ETH",
        rpcUrl: "https://rinkeby.infura.io/v3/9c9ff698105d4f6b9b2b93eddc0dff72",
        explorer: "https://rinkeby.etherscan.io/",
    },
    "0x13881": {
        chainName: "Polygon_Mumbai",
        symbol: "MATIC",
        rpcUrl: "https://rpc-mumbai.maticvigil.com/",
        explorer: "https://mumbai.polygonscan.com/",
    }, 
}  