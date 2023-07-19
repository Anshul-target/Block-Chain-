const cryptoHash = require("./crypto-hash")
const { GENESIS_DATA } = require("./config")
class Block {
    constructor({ timestamp, prevHash, hash, data, nonce, difficulty }) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    static genesis() {
        return new this(GENESIS_DATA);
    }
    static mineBlock({ prevBlock, data }) {
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        console.log(prevBlock.hash, data)
        return new this({
            timestamp, prevHash, data, hash: cryptoHash(timestamp, prevHash, data)
        })
    }

}
const block = new Block({ timestamp: "02/08/2023", prevHash: "0xacd", hash: "0xbc", data: "hello" });
const block1 = new Block({ timestamp: "02/08/2023", prevHash: "0xbc", hash: "0xb1c", data: "hello1" });

// console.log(block);
// console.log(block1);
// WE PASSED OBJECT FOR MINIMIZE THE BLUNDERS AS IT MAY BE POSSIBLE THAT WE PASS HASH IN TIMESTAMP


// Genesis  block


// console.log(Block.genesis());


// Creating the hash
//Mining the block
// const result = Block.mineBlock({ prevBlock: block1, data: "Block1" });
// console.log(result);

module.exports = Block

