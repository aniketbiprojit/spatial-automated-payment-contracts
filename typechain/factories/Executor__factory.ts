/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Executor, ExecutorInterface } from "../Executor";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "INVOICE_CONTRACT",
    outputs: [
      {
        internalType: "contract AbstractInvoice",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "payee",
            type: "address",
          },
          {
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum AbstractInvoice.Frequency",
            name: "frequency",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "startingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "durationForRetiresBeforeFailure",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentNonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "paymentParameter",
            type: "bytes32",
          },
        ],
        internalType: "struct AbstractInvoice.InvoiceData[]",
        name: "invoiceData",
        type: "tuple[]",
      },
      {
        internalType: "bytes[]",
        name: "signatures",
        type: "bytes[]",
      },
    ],
    name: "callExecute",
    outputs: [
      {
        internalType: "bool[]",
        name: "returnData",
        type: "bool[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AbstractInvoice",
        name: "_INVOICE_CONTRACT",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AbstractInvoice",
        name: "_INVOICE_CONTRACT",
        type: "address",
      },
    ],
    name: "setInvoiceContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061181a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610113578063b4929aaf14610131578063c4d66de81461014f578063f2fde38b1461016b57610088565b806324d7806c1461008d5780634f6686d0146100bd57806361f7c42b146100d9578063715018a614610109575b600080fd5b6100a760048036038101906100a29190610d4f565b610187565b6040516100b49190611132565b60405180910390f35b6100d760048036038101906100d29190610df4565b6101dd565b005b6100f360048036038101906100ee9190610d7c565b610221565b6040516101009190611110565b60405180910390f35b610111610480565b005b61011b610494565b60405161012891906110f5565b60405180910390f35b6101396104be565b604051610146919061114d565b60405180910390f35b61016960048036038101906101649190610df4565b6104e4565b005b61018560048036038101906101809190610d4f565b610664565b005b6000609760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b80609860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606061023361022e6106e8565b610187565b8061027757506102416106e8565b73ffffffffffffffffffffffffffffffffffffffff1661025f610494565b73ffffffffffffffffffffffffffffffffffffffff16145b6102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad906111e3565b60405180910390fd5b82518251146102fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f190611223565b60405180910390fd5b815167ffffffffffffffff8111156103155761031461159e565b5b6040519080825280602002602001820160405280156103435781602001602082028036833780820191505090505b50905060005b825181101561047957609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635796c71c8583815181106103a3576103a261156f565b5b60200260200101518584815181106103be576103bd61156f565b5b60200260200101516040518363ffffffff1660e01b81526004016103e3929190611243565b600060405180830381600087803b1580156103fd57600080fd5b505af192505050801561040e575060015b61043e5760008282815181106104275761042661156f565b5b602002602001019015159081151581525050610466565b60018282815181106104535761045261156f565b5b6020026020010190151590811515815250505b8080610471906114c8565b915050610349565b5092915050565b6104886106f0565b610492600061076e565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060019054906101000a900460ff161590508080156105155750600160008054906101000a900460ff1660ff16105b80610542575061052430610834565b1580156105415750600160008054906101000a900460ff1660ff16145b5b610581576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610578906111a3565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156105be576001600060016101000a81548160ff0219169083151502179055505b6105c6610857565b81609860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156106605760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516106579190611168565b60405180910390a15b5050565b61066c6106f0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d390611183565b60405180910390fd5b6106e58161076e565b50565b600033905090565b6106f86106e8565b73ffffffffffffffffffffffffffffffffffffffff16610716610494565b73ffffffffffffffffffffffffffffffffffffffff161461076c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610763906111c3565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089d90611203565b60405180910390fd5b6108ae6108b8565b6108b6610911565b565b600060019054906101000a900460ff16610907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe90611203565b60405180910390fd5b61090f61096a565b565b600060019054906101000a900460ff16610960576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095790611203565b60405180910390fd5b6109686109cb565b565b600060019054906101000a900460ff166109b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b090611203565b60405180910390fd5b6109c96109c46106e8565b61076e565b565b600060019054906101000a900460ff16610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611203565b60405180910390fd5b6001606581905550565b6000610a37610a328461129a565b611275565b90508083825260208201905082856020860282011115610a5a57610a596115d7565b5b60005b85811015610aa857813567ffffffffffffffff811115610a8057610a7f6115cd565b5b808601610a8d8982610bec565b85526020850194506020840193505050600181019050610a5d565b5050509392505050565b6000610ac5610ac0846112c6565b611275565b9050808382526020820190508285610140860282011115610ae957610ae86115d7565b5b60005b85811015610b1a5781610aff8882610c44565b84526020840193506101408301925050600181019050610aec565b5050509392505050565b6000610b37610b32846112f2565b611275565b905082815260208101848484011115610b5357610b526115dc565b5b610b5e848285611455565b509392505050565b600081359050610b7581611778565b92915050565b600082601f830112610b9057610b8f6115cd565b5b8135610ba0848260208601610a24565b91505092915050565b600082601f830112610bbe57610bbd6115cd565b5b8135610bce848260208601610ab2565b91505092915050565b600081359050610be68161178f565b92915050565b600082601f830112610c0157610c006115cd565b5b8135610c11848260208601610b24565b91505092915050565b600081359050610c29816117a6565b92915050565b600081359050610c3e816117bd565b92915050565b60006101408284031215610c5b57610c5a6115d2565b5b610c66610140611275565b90506000610c7684828501610b66565b6000830152506020610c8a84828501610b66565b6020830152506040610c9e84828501610d3a565b6040830152506060610cb284828501610b66565b6060830152506080610cc684828501610c2f565b60808301525060a0610cda84828501610d3a565b60a08301525060c0610cee84828501610d3a565b60c08301525060e0610d0284828501610d3a565b60e083015250610100610d1784828501610d3a565b61010083015250610120610d2d84828501610bd7565b6101208301525092915050565b600081359050610d49816117cd565b92915050565b600060208284031215610d6557610d646115e6565b5b6000610d7384828501610b66565b91505092915050565b60008060408385031215610d9357610d926115e6565b5b600083013567ffffffffffffffff811115610db157610db06115e1565b5b610dbd85828601610ba9565b925050602083013567ffffffffffffffff811115610dde57610ddd6115e1565b5b610dea85828601610b7b565b9150509250929050565b600060208284031215610e0a57610e096115e6565b5b6000610e1884828501610c1a565b91505092915050565b6000610e2d8383610eb5565b60208301905092915050565b610e4281611389565b82525050565b610e5181611389565b82525050565b6000610e6282611333565b610e6c8185611356565b9350610e7783611323565b8060005b83811015610ea8578151610e8f8882610e21565b9750610e9a83611349565b925050600181019050610e7b565b5085935050505092915050565b610ebe8161139b565b82525050565b610ecd8161139b565b82525050565b610edc816113a7565b82525050565b6000610eed8261133e565b610ef78185611367565b9350610f07818560208601611464565b610f10816115eb565b840191505092915050565b610f248161140d565b82525050565b610f3381611431565b82525050565b610f4281611443565b82525050565b6000610f55602683611378565b9150610f60826115fc565b604082019050919050565b6000610f78602e83611378565b9150610f838261164b565b604082019050919050565b6000610f9b602083611378565b9150610fa68261169a565b602082019050919050565b6000610fbe601383611378565b9150610fc9826116c3565b602082019050919050565b6000610fe1602b83611378565b9150610fec826116ec565b604082019050919050565b6000611004600e83611378565b915061100f8261173b565b602082019050919050565b610140820160008201516110316000850182610e39565b5060208201516110446020850182610e39565b50604082015161105760408501826110e6565b50606082015161106a6060850182610e39565b50608082015161107d6080850182610f2a565b5060a082015161109060a08501826110e6565b5060c08201516110a360c08501826110e6565b5060e08201516110b660e08501826110e6565b506101008201516110cb6101008501826110e6565b506101208201516110e0610120850182610ed3565b50505050565b6110ef816113f6565b82525050565b600060208201905061110a6000830184610e48565b92915050565b6000602082019050818103600083015261112a8184610e57565b905092915050565b60006020820190506111476000830184610ec4565b92915050565b60006020820190506111626000830184610f1b565b92915050565b600060208201905061117d6000830184610f39565b92915050565b6000602082019050818103600083015261119c81610f48565b9050919050565b600060208201905081810360008301526111bc81610f6b565b9050919050565b600060208201905081810360008301526111dc81610f8e565b9050919050565b600060208201905081810360008301526111fc81610fb1565b9050919050565b6000602082019050818103600083015261121c81610fd4565b9050919050565b6000602082019050818103600083015261123c81610ff7565b9050919050565b600061016082019050611259600083018561101a565b81810361014083015261126c8184610ee2565b90509392505050565b600061127f611290565b905061128b8282611497565b919050565b6000604051905090565b600067ffffffffffffffff8211156112b5576112b461159e565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156112e1576112e061159e565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561130d5761130c61159e565b5b611316826115eb565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611394826113d6565b9050919050565b60008115159050919050565b6000819050919050565b60006113bc82611389565b9050919050565b60008190506113d182611764565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006114188261141f565b9050919050565b600061142a826113d6565b9050919050565b600061143c826113c3565b9050919050565b600061144e82611400565b9050919050565b82818337600083830152505050565b60005b83811015611482578082015181840152602081019050611467565b83811115611491576000848401525b50505050565b6114a0826115eb565b810181811067ffffffffffffffff821117156114bf576114be61159e565b5b80604052505050565b60006114d3826113f6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561150657611505611511565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f43616c6c6572206973206e6f742061646d696e00000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f4c65677468206d69736d61746368000000000000000000000000000000000000600082015250565b6006811061177557611774611540565b5b50565b61178181611389565b811461178c57600080fd5b50565b611798816113a7565b81146117a357600080fd5b50565b6117af816113b1565b81146117ba57600080fd5b50565b600681106117ca57600080fd5b50565b6117d6816113f6565b81146117e157600080fd5b5056fea2646970667358221220d0757f8c0b3530a03aebb31ef82eb84ff74c7aa068f4a8ded043e8e79cd83fbf64736f6c63430008060033";

export class Executor__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Executor> {
    return super.deploy(overrides || {}) as Promise<Executor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}
