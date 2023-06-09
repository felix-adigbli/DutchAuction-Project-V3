// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./NFTdutchauctiontoken.sol";
import "./ERC20Token.sol";

contract  NFTDutchAuction_ERC20Bids {
    NFTDutchAuctionToken public nftContractToken;
    ERC20Token public eRC20Token;
    address payable public seller;
    address public erc721TokenAddress;
    address public erc20TokenAddress;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    uint256 public startBlock;
    uint256 public endBlock;
    uint256 public currentPrice;    
    uint256 public nftTokenId;

    bool public auctionEnded;

    //Seller Placed A bid

    constructor(
        uint256 _reservePrice,
        uint256 _numBlocksAuctionOpen,
        uint256 _offerPriceDecrement,
        uint256 _nftTokenId,
        address _erc20TokenAddress,
        address _erc721TokenAddress       


    ) {
        seller = payable(msg.sender);
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        nftTokenId = _nftTokenId;
        startBlock = block.number;
        endBlock = startBlock + numBlocksAuctionOpen;
        erc721TokenAddress = _erc721TokenAddress;
        erc20TokenAddress = _erc20TokenAddress;
        auctionEnded = false;
       
          // Create a new instance of the NFTDutchAuctionToken contract
        nftContractToken = new NFTDutchAuctionToken();

        // Mint a token to the address that deployed this contract        
        nftContractToken.safeMint(address(this), nftTokenId );      
        
        // Transfer the NFT to this contract
        NFTDutchAuctionToken(erc721TokenAddress).transferFrom(msg.sender, address(this), _nftTokenId);        

    }

    //function for bidders to place bid and proccess the bid
    function placeBid(uint256 _bidAmount) external {
            require(!auctionEnded, "Auction has ended");
            require(
            ERC20Token(erc20TokenAddress).transferFrom(msg.sender, address(this), _bidAmount),
            "ERC20 transfer failed"
        );
        currentPrice = reservePrice + (endBlock - block.number) *  offerPriceDecrement; //get current price

        if (_bidAmount >= currentPrice) {
            auctionEnded = true;
            ERC20Token(erc20TokenAddress).transfer(seller, _bidAmount); //Transfer ERC20 token to seller
           // nftContractToken.approve(seller, nftTokenId );
            nftContractToken.safeTransferFrom(address(this), msg.sender, nftTokenId); //transfer token to bidder
            
        } else {
            ERC20Token(erc20TokenAddress).transfer(msg.sender, _bidAmount); //Transfer bid to sender
        }
    }
}

