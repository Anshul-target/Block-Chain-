const Block = require("./block");
const cryptoHash = require("./crypto-hash");
class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }
    addBlock({ data }) {
        const newBlock = Block.mineBlock({
            prevBlock: this.chain[this.chain.length - 1], data
        })
        this.chain.push(newBlock);
    }
    replaceChain(chain) {
        if (chain <= this.chain.length) {
            console.error("The incoming chain is not larger");
            return

        }
        if (!Blockchain.isValidChain(chain)) {
            console.error("The incoming chain is not valid");
            return
        }
        this.chain = chain;
    }

    static isValidChain(chain) {
        // if (chain[0] !== Block.genesis()) return false   //But we cannot compare the two objects it will always gives u false 
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {

            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const { timestamp, prevHash, hash, nonce, difficulty, data } = chain[i];
            const realLastHash = chain[i - 1].hash;
            if (prevHash !== realLastHash) {

                return false;
            }

            const validatedHash = cryptoHash(timestamp, prevHash, nonce, difficulty, data);
            console.log(validatedHash)
            if (hash !== validatedHash) {

                return false;
            }
        }
        return true;
    }
}

const blockchain = new Blockchain();
blockchain.addBlock({ data: "Answer" });
// console.log(blockchain.chain);
const result1 = Blockchain.isValidChain(blockchain.chain);
console.log(result1);
module.exports = Blockchain