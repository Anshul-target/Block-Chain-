// const { expect } = require("chai");


// describe("Token contract", function () {
//     //  it blog ham tab tab banaege jab jab hme trst karna hoga
//     it("Deployment should assign the total supply of tokens to owner", async function () {
//         const [owner] = await ethers.getSigners();
//         console.log("Signers object", owner);
//         // Instance of contract
//         const Token = await ethers.getContractFactory("Token");
//         const hardhatToken = await Token.deploy();

//         const ownerBalance = await hardhatToken.balanceOf(owner.address); //ownerBalance=10000
//         console.log("Owner Address", owner.address);
//         // NOW WE USE CHAI LIBRARY WHICH HAS "EXPECT KEYWORD"
//         expect(await hardhatToken.totalSupply()).to.equal(ownerBalance) //Total supply =10000
//     })

//     // For testing the transfer function

//     it("Should transfer token between accounts", async function () {
//         const [owner, addr1, addr2] = await ethers.getSigners();

//         const Token = await ethers.getContractFactory("Token");
//         const hardhatToken = await Token.deploy();

//         //   Transfer 10 token from the owner
//         await hardhatToken.transfer(addr1.address, 10);
//         expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);

//         // Transfer for 5 token from addr1 to addr2
//         //  here we have to teel that we are transferring from the address 1 .IN THE ABOVE CODE IT IS BY DEFAULT IF WE DONOT PROVIDE THEN IT WIIL TAKE IT FROM THE CONTRACT ADDRESS
//         await hardhatToken.connect(addr1).transfer(addr2.address, 5);
//         expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5);



// // WE have written lot of code so to lets see how we can use hooks to solve this problem

//     })


// }) //IT IS SNYNTAX TO LEARN