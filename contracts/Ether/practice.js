const ethers = require("ethers")


// Connecting to block chain network :JSON RPC API

const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/73ba6adc7d134fab9b249c3a1069612a");

// address 0xb427992d8465E23d2e43760E27e3C74a770f7886
// 0xF064eebE42eD4957C56bFdf94c470b11e25FAD8E


// 0x14aAAf121c6422Ae88797F405EefaF0fC388cC63
const queryBlockchain = async () => {
    const getBalance = await provider.getBalance("0x14aAAf121c6422Ae88797F405EefaF0fC388cC63")
    const block = await provider.getBlockNumber();
    const balanceEther = ethers.utils.formatEther(getBalance);
    // console.log(balanceEther);

}
queryBlockchain();

const address = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const abi = [
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "element",
                "type": "int256"
            }
        ],
        "name": "getArray",
        "outputs": [
            {
                "internalType": "int256[]",
                "name": "",
                "type": "int256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "keys",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "value",
                "type": "string"
            }
        ],
        "name": "setMap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setStore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "arr",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAdress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getData",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "roolno",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "showStore",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "store",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]



const readContract = async () => {

    // Contract object creation

    const contract = new ethers.Contract(address, abi, provider);
    // console.log(contract)
    const getAddress = await contract.showStore();
    // const getData = await contract.getData();
    // const owner = await contract.store();
    console.log("Address is" + getAddress);
    // console.log("Data is" + getData);
    // console.log("Owner is " + owner);

}

readContract().catch((err) => {
    console.log(err);
});