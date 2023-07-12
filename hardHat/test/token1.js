const { expect } = require("chai");


describe("Token Contract", function () {
    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    //IT IS A HOOK TAHT IS PROVIDED BY MOKA FRAMEWORK
    beforeEach(async function () {
        Token = await ethers.getContractFactory("Token");

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatToken = await Token.deploy();  
        
        //ALL THIS DEPLOYMENT IS HAVING IN THE INBUILT NETWORK OF HARDHAT


    })  //What happens is before each test this line will runn automatically

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await hardhatToken.owner()).to.equal(owner.address);

        });
        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await hardhatToken.balanceOf(owner.address)
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        })
        describe("Transaction ", function () {
            it("Should transfer between accounts", async function () {
                await hardhatToken.transfer(addr1.address, 5);
                const addr1Balance = await hardhatToken.balanceOf(addr1.address)
                expect(addr1Balance).to.equal(5);

                await hardhatToken.connect(addr1).transfer(addr2.address, 5);
                const addr2Balance = await hardhatToken.balanceOf(addr2.address);
                expect(addr2Balance).to.equal(5);
            })
            it("Should fail if sender does not have enough tokens", async function () {
                const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

                await expect(hardhatToken.connect(addr1).transfer(owner.address, 1) //Initially zero tokens so ye payment nhi hoga 
                ).to.be.revertedWith("NOT ENOUGH AMOUNT"); //to be revertedWith check if the reverted statement matches with the given statement if yes then the expect statement becomes true and then next line will execute
                expect(await hardhatToken.balanceOf(owner.address)).to.equal(
                    initialOwnerBalance
                );
            });

            it("Should update balances after transfers", async function () {
                const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
                await hardhatToken.transfer(addr1.address, 5);
                await hardhatToken.transfer(addr2.address, 10);
                const finalOwnerBalance = await hardhatToken.balanceOf(owner.address);
                expect(finalOwnerBalance).to.equal(initialOwnerBalance - 15);
                const addr1Balance = await hardhatToken.balanceOf(addr1.address);
                expect(addr1Balance).to.equal(5);
                const addr2Balance = await hardhatToken.balanceOf(addr2.address);
                expect(addr2Balance).to.equal(10);
            })
        });
    });

})
