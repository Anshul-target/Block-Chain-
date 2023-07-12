const ethers = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/73ba6adc7d134fab9b249c3a1069612a`)

// 0xb427992d8465E23d2e43760E27e3C74a770f7886

const contractAddress = "0x544ed909a1a6d1303feb2e55ba6a8d12b96e2707";
const contractAbi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_favouriteNo",
                "type": "uint256"
            }
        ],
        "name": "addperson",
        "outputs": [],
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
                "name": "name",
                "type": "string"
            }
        ],
        "name": "setter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "favouriteNumbers",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "add",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "favorite",
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
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "people",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "favourite",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "person",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "favourite",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrive",
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
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rollno",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

const getProvider = async () => {

    console.log("Heelo");
    console.log(await provider.getCode("0xb427992d8465E23d2e43760E27e3C74a770f7886"));
}

// getProvider();

const contractInteraction = async () => {
    // READ OPERATION
    const walletContracts = new ethers.Contract(contractAddress, contractAbi, provider);
    const contractName = await walletContracts.favorite();
    // ALL THE VARIABLE WHICH ARE PUBLIC COMPILER AUTOMATICALLY MAKES A READ FUNCTION
    console.log(String(contractName));
    const num = await walletContracts.retrive();
    console.log(String(num));
    const add = await walletContracts.add();
    const person = await walletContracts.person();
    console.log(String(add));
    console.log(String(person));
}

contractInteraction().catch((err) => {
    console.log(err);
});

// WRITE OPERATION
// STEP 1:WE HAVE TO BRING THE METAMASK IN OUR LOCAL SYSTEM
// STEP 2:INSTALL REACT TO INTERACT WITH METAMASK
