const ethers = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/73ba6adc7d134fab9b249c3a1069612a`)
// Abstraction refers to the process of simplifying complex ideas or concepts



// Provider	A Provider(in ethers) is a class which provides an abstraction for a connection to the Ethereum Network.It provides read - only access to the Blockchain and its status.	 


// Signer	A Signer is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations.	 



// Contract	A Contract is an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object.



// Connecting to Ethereum: RPC


// const provider = new ethers.providers.JsonRpcProvider();

// // If you don't specify a //url//, Ethers connects to the default 


// // (i.e. ``http:/\/localhost:8545``)

// // The provider also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, we need the account signer...
// const signer = provider.getSigner()


// A Provider in ethers is a read - only abstraction to access the blockchain data.

// Once you have a Provider, you have a read-only connection to the blockchain, which you can use to query the current state, fetch historic logs, look up deployed code and so on.


// contract.connect( providerOrSigner ) ⇒ Contractsource




// Returns a new instance of the Contract, but connected to providerOrSigner.



// By passing in a Provider, this will return a downgraded Contract which only has read - only access(i.e.constant calls).




// By passing in a Signer.this will return a Contract which will act on behalf of that signer.



// contract.deployTransaction 



// If the Contract object is the result of a ContractFactory deployment, this is the transaction which was used to deploy the contract.



// The Contract object makes it easier to use an on - chain Contract as a normal JavaScript object, with the methods mapped to encoding and decoding data for you.



// If you are familiar with Databases, this is similar to an Object Relational Mapper(ORM).


// This class is a meta - class, which means its methods are constructed at runtime, and when you pass in the ABI to the constructor it uses it to determine which methods to add.

// While an on - chain Contract may have many methods available, you can safely ignore any methods you don't need or use, providing a smaller subset of the ABI to the contract.

// An ABI often comes from the Solidity or Vyper compiler, but you can use the Human - Readable ABI in code, which the following examples use.
// In order to communicate with the Contract on - chain, this class needs to know what methods are available and how to encode and decode the data, which is what the Application Binary Interface(ABI) provides.



//  The Contract object
// const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

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
    const walletContracts = new ethers.Contract(contractAddress, contractAbi, provider);  //Creating the Contract object
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
