const crypto = require("crypto");

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash("sha256");
    hash.update(inputs.sort().join(""));
    return hash.digest("hex");

}


module.exports = cryptoHash;
// module.exports = cryptoHash;
// console.log(module.exports.cryptoHash)