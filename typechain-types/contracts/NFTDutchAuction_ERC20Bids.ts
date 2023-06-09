/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface NFTDutchAuction_ERC20BidsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "auctionEnded"
      | "bidTransfered"
      | "currentPrice"
      | "eRCToken"
      | "endBlock"
      | "erc20TokenAddress"
      | "erc721TokenAddress"
      | "getCurrentPrice"
      | "nftContractToken"
      | "nftTokenId"
      | "numBlocksAuctionOpen"
      | "offerPriceDecrement"
      | "ownerOfToken"
      | "placeBid"
      | "reservePrice"
      | "seller"
      | "startBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "auctionEnded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bidTransfered",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "eRCToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "erc20TokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc721TokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftContractToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPriceDecrement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "placeBid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "auctionEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bidTransfered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eRCToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "erc20TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc721TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftContractToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftTokenId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPriceDecrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
}

export interface NFTDutchAuction_ERC20Bids extends BaseContract {
  connect(runner?: ContractRunner | null): NFTDutchAuction_ERC20Bids;
  waitForDeployment(): Promise<this>;

  interface: NFTDutchAuction_ERC20BidsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  auctionEnded: TypedContractMethod<[], [boolean], "view">;

  bidTransfered: TypedContractMethod<[], [bigint], "view">;

  currentPrice: TypedContractMethod<[], [bigint], "view">;

  eRCToken: TypedContractMethod<[], [string], "view">;

  endBlock: TypedContractMethod<[], [bigint], "view">;

  erc20TokenAddress: TypedContractMethod<[], [string], "view">;

  erc721TokenAddress: TypedContractMethod<[], [string], "view">;

  getCurrentPrice: TypedContractMethod<[], [bigint], "nonpayable">;

  nftContractToken: TypedContractMethod<[], [string], "view">;

  nftTokenId: TypedContractMethod<[], [bigint], "view">;

  numBlocksAuctionOpen: TypedContractMethod<[], [bigint], "view">;

  offerPriceDecrement: TypedContractMethod<[], [bigint], "view">;

  ownerOfToken: TypedContractMethod<[], [string], "view">;

  placeBid: TypedContractMethod<[_bidAmount: BigNumberish], [void], "payable">;

  reservePrice: TypedContractMethod<[], [bigint], "view">;

  seller: TypedContractMethod<[], [string], "view">;

  startBlock: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "auctionEnded"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "bidTransfered"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "currentPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "eRCToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "endBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "erc20TokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "erc721TokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrentPrice"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "nftContractToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nftTokenId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "numBlocksAuctionOpen"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "offerPriceDecrement"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ownerOfToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "placeBid"
  ): TypedContractMethod<[_bidAmount: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "reservePrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "seller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "startBlock"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
