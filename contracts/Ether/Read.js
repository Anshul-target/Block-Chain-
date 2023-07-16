// Common terminologies
// Provider =>WE USE IF YOU WANT TO READ THE BLOCKCHAIN
// SIGNER=>WHEN WE WANT TO CHANE THE STATE IN BLOCKCHAIN WE NEED THE SIGNER

// CONTRACT => IF YOU HAVE DEPLOYED THE CONTRACT ON BLOCKCHAIN AND THEN IF YOU WANT TO INTERACT WITH IT THEN YOU NEED CONTRACT
const ethers = require("ethers");


// IF YOU WANT TO BECOME THE ECOSYSTEM OF BLOCKCHAIN THEN YOU HAVE TO BECOME THE NODE 
// IT MEANS YOU HAVE TO USE GETH

// OUR SYSTEM KO NODE BANNANA HAI

// WE WILL USE INFURA


const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/73ba6adc7d134fab9b249c3a1069612a`);
const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();

    const balance = await provider.getBalance("0xb427992d8465E23d2e43760E27e3C74a770f7886") //BigNumber { _hex: '0x00', _isBigNumber: true }
    const balanceEther = ethers.utils.formatEther(balance);
    console.log(balanceEther);



}





querryBlockchain();


// Connecting to the smartContrats

// TO READ THE PROVIDER WE NEED  =>PROVIDER AND INFURA
// TO WRITE WE NEED THE METAMASK AND SIGNER

