const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("blc-test", function () {
    let blc;

    this.beforeEach(async function () {
        const Blc = await ethers.getContractFactory("BoredLaptopClub");
        blc = await Blc.deploy()
    })

    it("it should mint an nft", async function () {
        [account1] = await ethers.getSigners();
        expect(await blc.balanceOf(account1.address)).to.equal(0);

        const tokenURI = "http://localhost:8000/api/1.json"
        const tx = await blc.connect(account1).safeMint(account1.address, tokenURI);
        expect(await blc.balanceOf(account1.address)).to.equal(1);
    })

})