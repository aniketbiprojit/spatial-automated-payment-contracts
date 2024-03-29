/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface InvoiceInterface extends ethers.utils.Interface {
  functions: {
    "EXECUTOR_CONTRACT()": FunctionFragment;
    "UNIQUE_INDENTIFIER()": FunctionFragment;
    "cancelledInvoices(uint256)": FunctionFragment;
    "createInvoice((address,address,uint256,address,uint8,uint256,uint256,uint256,uint256,bytes32))": FunctionFragment;
    "currencies(address)": FunctionFragment;
    "execute((address,address,uint256,address,uint8,uint256,uint256,uint256,uint256,bytes32),bytes)": FunctionFragment;
    "feePercent()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "owner()": FunctionFragment;
    "payees(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCurrency(address[],bool)": FunctionFragment;
    "setExecutorContract(address)": FunctionFragment;
    "setFeePercent(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifySignature((address,address,uint256,address,uint8,uint256,uint256,uint256,uint256,bytes32),bytes)": FunctionFragment;
    "whitelistPayee(address[],bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "EXECUTOR_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNIQUE_INDENTIFIER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelledInvoices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createInvoice",
    values: [
      {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "currencies", values: [string]): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feePercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payees", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrency",
    values: [string[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutorContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySignature",
    values: [
      {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistPayee",
    values: [string[], boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "EXECUTOR_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNIQUE_INDENTIFIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelledInvoices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createInvoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currencies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feePercent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutorContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistPayee",
    data: BytesLike
  ): Result;

  events: {
    "ExecuteInvoice(tuple,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "InvoiceCreated(tuple,bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetCurrency(address,bool)": EventFragment;
    "SetExecutorContract(address)": EventFragment;
    "SetFeePercent(uint256)": EventFragment;
    "SetPayee(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecuteInvoice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InvoiceCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetCurrency"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetExecutorContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeePercent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPayee"): EventFragment;
}

export type ExecuteInvoiceEvent = TypedEvent<
  [
    [
      string,
      string,
      BigNumber,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      payee: string;
      payer: string;
      amount: BigNumber;
      currency: string;
      frequency: number;
      startingTime: BigNumber;
      durationForRetiresBeforeFailure: BigNumber;
      expiry: BigNumber;
      paymentNonce: BigNumber;
      paymentParameter: string;
    },
    BigNumber
  ] & {
    invoiceData: [
      string,
      string,
      BigNumber,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      payee: string;
      payer: string;
      amount: BigNumber;
      currency: string;
      frequency: number;
      startingTime: BigNumber;
      durationForRetiresBeforeFailure: BigNumber;
      expiry: BigNumber;
      paymentNonce: BigNumber;
      paymentParameter: string;
    };
    start: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type InvoiceCreatedEvent = TypedEvent<
  [
    [
      string,
      string,
      BigNumber,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      payee: string;
      payer: string;
      amount: BigNumber;
      currency: string;
      frequency: number;
      startingTime: BigNumber;
      durationForRetiresBeforeFailure: BigNumber;
      expiry: BigNumber;
      paymentNonce: BigNumber;
      paymentParameter: string;
    },
    string,
    BigNumber
  ] & {
    invoiceData: [
      string,
      string,
      BigNumber,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      payee: string;
      payer: string;
      amount: BigNumber;
      currency: string;
      frequency: number;
      startingTime: BigNumber;
      durationForRetiresBeforeFailure: BigNumber;
      expiry: BigNumber;
      paymentNonce: BigNumber;
      paymentParameter: string;
    };
    _hash: string;
    _nonce: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SetCurrencyEvent = TypedEvent<
  [string, boolean] & { payee: string; enabled: boolean }
>;

export type SetExecutorContractEvent = TypedEvent<
  [string] & { EXECUTOR_CONTRACT: string }
>;

export type SetFeePercentEvent = TypedEvent<
  [BigNumber] & { _feePercent: BigNumber }
>;

export type SetPayeeEvent = TypedEvent<
  [string, boolean] & { payee: string; enabled: boolean }
>;

export class Invoice extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: InvoiceInterface;

  functions: {
    EXECUTOR_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    UNIQUE_INDENTIFIER(overrides?: CallOverrides): Promise<[string]>;

    cancelledInvoices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    createInvoice(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    execute(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAdmin(user: string, overrides?: CallOverrides): Promise<[boolean]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payees(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurrency(
      _currencies: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExecutorContract(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeePercent(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifySignature(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    whitelistPayee(
      _payees: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  EXECUTOR_CONTRACT(overrides?: CallOverrides): Promise<string>;

  UNIQUE_INDENTIFIER(overrides?: CallOverrides): Promise<string>;

  cancelledInvoices(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  createInvoice(
    invoiceData: {
      payee: string;
      payer: string;
      amount: BigNumberish;
      currency: string;
      frequency: BigNumberish;
      startingTime: BigNumberish;
      durationForRetiresBeforeFailure: BigNumberish;
      expiry: BigNumberish;
      paymentNonce: BigNumberish;
      paymentParameter: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currencies(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  execute(
    invoiceData: {
      payee: string;
      payer: string;
      amount: BigNumberish;
      currency: string;
      frequency: BigNumberish;
      startingTime: BigNumberish;
      durationForRetiresBeforeFailure: BigNumberish;
      expiry: BigNumberish;
      paymentNonce: BigNumberish;
      paymentParameter: BytesLike;
    },
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feePercent(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _EXECUTOR_CONTRACT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  payees(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurrency(
    _currencies: string[],
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExecutorContract(
    _EXECUTOR_CONTRACT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeePercent(
    _feePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifySignature(
    invoiceData: {
      payee: string;
      payer: string;
      amount: BigNumberish;
      currency: string;
      frequency: BigNumberish;
      startingTime: BigNumberish;
      durationForRetiresBeforeFailure: BigNumberish;
      expiry: BigNumberish;
      paymentNonce: BigNumberish;
      paymentParameter: BytesLike;
    },
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistPayee(
    _payees: string[],
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EXECUTOR_CONTRACT(overrides?: CallOverrides): Promise<string>;

    UNIQUE_INDENTIFIER(overrides?: CallOverrides): Promise<string>;

    cancelledInvoices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    createInvoice(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        },
        string,
        BigNumber
      ] & {
        returnedInvoice: [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        };
        _hash: string;
        _nonce: BigNumber;
      }
    >;

    currencies(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    execute(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    feePercent(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _EXECUTOR_CONTRACT: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    payees(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCurrency(
      _currencies: string[],
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setExecutorContract(
      _EXECUTOR_CONTRACT: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeePercent(
      _feePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifySignature(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistPayee(
      _payees: string[],
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ExecuteInvoice(tuple,uint256)"(
      invoiceData?: null,
      start?: null
    ): TypedEventFilter<
      [
        [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        },
        BigNumber
      ],
      {
        invoiceData: [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        };
        start: BigNumber;
      }
    >;

    ExecuteInvoice(
      invoiceData?: null,
      start?: null
    ): TypedEventFilter<
      [
        [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        },
        BigNumber
      ],
      {
        invoiceData: [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        };
        start: BigNumber;
      }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "InvoiceCreated(tuple,bytes32,uint256)"(
      invoiceData?: null,
      _hash?: null,
      _nonce?: null
    ): TypedEventFilter<
      [
        [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        },
        string,
        BigNumber
      ],
      {
        invoiceData: [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        };
        _hash: string;
        _nonce: BigNumber;
      }
    >;

    InvoiceCreated(
      invoiceData?: null,
      _hash?: null,
      _nonce?: null
    ): TypedEventFilter<
      [
        [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        },
        string,
        BigNumber
      ],
      {
        invoiceData: [
          string,
          string,
          BigNumber,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string
        ] & {
          payee: string;
          payer: string;
          amount: BigNumber;
          currency: string;
          frequency: number;
          startingTime: BigNumber;
          durationForRetiresBeforeFailure: BigNumber;
          expiry: BigNumber;
          paymentNonce: BigNumber;
          paymentParameter: string;
        };
        _hash: string;
        _nonce: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SetCurrency(address,bool)"(
      payee?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { payee: string; enabled: boolean }>;

    SetCurrency(
      payee?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { payee: string; enabled: boolean }>;

    "SetExecutorContract(address)"(
      EXECUTOR_CONTRACT?: null
    ): TypedEventFilter<[string], { EXECUTOR_CONTRACT: string }>;

    SetExecutorContract(
      EXECUTOR_CONTRACT?: null
    ): TypedEventFilter<[string], { EXECUTOR_CONTRACT: string }>;

    "SetFeePercent(uint256)"(
      _feePercent?: null
    ): TypedEventFilter<[BigNumber], { _feePercent: BigNumber }>;

    SetFeePercent(
      _feePercent?: null
    ): TypedEventFilter<[BigNumber], { _feePercent: BigNumber }>;

    "SetPayee(address,bool)"(
      payee?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { payee: string; enabled: boolean }>;

    SetPayee(
      payee?: null,
      enabled?: null
    ): TypedEventFilter<[string, boolean], { payee: string; enabled: boolean }>;
  };

  estimateGas: {
    EXECUTOR_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    UNIQUE_INDENTIFIER(overrides?: CallOverrides): Promise<BigNumber>;

    cancelledInvoices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createInvoice(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feePercent(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAdmin(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurrency(
      _currencies: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExecutorContract(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeePercent(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifySignature(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistPayee(
      _payees: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EXECUTOR_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNIQUE_INDENTIFIER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelledInvoices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createInvoice(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feePercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAdmin(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payees(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurrency(
      _currencies: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExecutorContract(
      _EXECUTOR_CONTRACT: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeePercent(
      _feePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifySignature(
      invoiceData: {
        payee: string;
        payer: string;
        amount: BigNumberish;
        currency: string;
        frequency: BigNumberish;
        startingTime: BigNumberish;
        durationForRetiresBeforeFailure: BigNumberish;
        expiry: BigNumberish;
        paymentNonce: BigNumberish;
        paymentParameter: BytesLike;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistPayee(
      _payees: string[],
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
