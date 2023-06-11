import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";
import { ERC20Token__factory } from "../typechain-types";

describe("NFTDutchAuction_ERC20Bids", function () {
    let contract: Contract;
    let owner;
    let bidder1;
    let bidder2;
    let accounts;
    let eRCToken;
    let nftContractToken;



    beforeEach(async function () {
        // Deploy the NFTDutchAuctionToken and ERC20Token contracts
        const NFTDutchAuctionToken = await ethers.getContractFactory("NFTDutchAuctionToken");
        const ERC20Token = await ethers.getContractFactory("ERC20Token");

        // Get the contract factory for NFTDutchAuction_ERC20Bids
        const Contract = await ethers.getContractFactory("NFTDutchAuction_ERC20Bids");

        // Get the owner and bidders signers
        accounts = await ethers.getSigners();
        owner = accounts[0];
        bidder1 = accounts[1];
        bidder2 = accounts[2];

        // Deploy the NFTDutchAuctionToken contract
        const nftContractToken = await NFTDutchAuctionToken.deploy();
        await nftContractToken.deployed();



        // Deploy the ERC20Token contract
        const eRCToken = await ERC20Token.connect(bidder1).deploy();
        await eRCToken.deployed();

        // Set up initial parameters for the NFTDutchAuction_ERC20Bids contract
        const reservePrice = 100;
        const numBlocksAuctionOpen = 10;
        const offerPriceDecrement = 10;
        const nftTokenId = 0;
        const erc721TokenAddress = nftContractToken.address;
        const erc20TokenAddress = eRCToken.address;

        //mint a ERC721 token to the owner
        await nftContractToken.connect(owner).safeMint(owner.address, nftTokenId);
        //mint token to ERC token to Bidders

        // Deploy the NFTDutchAuction_ERC20Bids contract
        contract = await Contract.deploy(
            reservePrice,
            numBlocksAuctionOpen,
            offerPriceDecrement,
            nftTokenId,
            erc721TokenAddress,
            erc20TokenAddress
        );

        await contract.deployed();

        let bidAmount = 1;
        //mint ERC20token to the bidder1
        await eRCToken.connect(bidder1).mint(bidder1.address, 1000000);
        console.log("bidder1 balance ", await eRCToken.connect(bidder1).balanceOf(bidder1.address));
        await eRCToken.connect(bidder1).transfer(contract.address, bidAmount);
        console.log("contrats balance ", await eRCToken.connect(bidder1).balanceOf(contract.address));
        //Aprove for the Dutchaction contract to move ERC721 token
        await nftContractToken.approve(contract.address, nftTokenId);
    });

    it("should initialize with the correct values", async function () {
        // Verify the initial values of the contract
        expect(await contract.seller()).to.equal(await owner.getAddress());
        expect(await contract.reservePrice()).to.equal(100);
       // expect(await eRCToken.connect(owner).mint(bidder1.address, 1000000)).to.be.revertedWith("Ownable: caller is not the owner");
        // Add more assertions to verify the initialization of other values
    });

    it("should not allow the bidder to place a bid", async function () {

        let bidAmount = 1;

       expect( await contract.connect(bidder1).placeBid(bidAmount)).to.be.revertedWith("insuffient bid amount");

    });

    beforeEach(async function () {
        // Deploy the NFTDutchAuctionToken and ERC20Token contracts
        const NFTDutchAuctionToken = await ethers.getContractFactory("NFTDutchAuctionToken");
        const ERC20Token = await ethers.getContractFactory("ERC20Token");

        // Get the contract factory for NFTDutchAuction_ERC20Bids
        const Contract = await ethers.getContractFactory("NFTDutchAuction_ERC20Bids");

        // Get the owner and bidders signers
        accounts = await ethers.getSigners();
        owner = accounts[0];
        bidder1 = accounts[1];
        bidder2 = accounts[2];

        // Deploy the NFTDutchAuctionToken contract
        const nftContractToken = await NFTDutchAuctionToken.deploy();
        await nftContractToken.deployed();



        // Deploy the ERC20Token contract
        const eRCToken = await ERC20Token.connect(bidder1).deploy();
        await eRCToken.deployed();

        // Set up initial parameters for the NFTDutchAuction_ERC20Bids contract
        const reservePrice = 100;
        const numBlocksAuctionOpen = 10;
        const offerPriceDecrement = 10;
        const nftTokenId = 0;
        const erc721TokenAddress = nftContractToken.address;
        const erc20TokenAddress = eRCToken.address;

        //mint a ERC721 token to the owner
        await nftContractToken.connect(owner).safeMint(owner.address, nftTokenId);
        //mint token to ERC token to Bidders

        // Deploy the NFTDutchAuction_ERC20Bids contract
        contract = await Contract.deploy(
            reservePrice,
            numBlocksAuctionOpen,
            offerPriceDecrement,
            nftTokenId,
            erc721TokenAddress,
            erc20TokenAddress
        );

        await contract.deployed();

        let bidAmount = 1000;
        //mint ERC20token to the bidder1
        await eRCToken.connect(bidder1).mint(bidder1.address, 1000000);
        console.log("bidder1 balance ", await eRCToken.connect(bidder1).balanceOf(bidder1.address));
        await eRCToken.connect(bidder1).transfer(contract.address, bidAmount);
        console.log("contrats balance ", await eRCToken.connect(bidder1).balanceOf(contract.address));
        //Aprove for the Dutchaction contract to move ERC721 token
        await nftContractToken.approve(contract.address, nftTokenId);
    });

    it("should initialize with the correct values", async function () {
        // Verify the initial values of the contract
        expect(await contract.seller()).to.equal(await owner.getAddress());
        expect(await contract.reservePrice()).to.equal(100);
        // Add more assertions to verify the initialization of other values
    });

    it("should allow the bidder to place a bid", async function () {

        let bidAmount = 1000;

        await contract.connect(bidder1).placeBid(bidAmount);


    });


});
