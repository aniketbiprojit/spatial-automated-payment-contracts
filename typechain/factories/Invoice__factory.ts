/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Invoice, InvoiceInterface } from "../Invoice";

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
            internalType: "enum Invoice.Frequency",
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
        indexed: false,
        internalType: "struct Invoice.InvoiceData",
        name: "invoiceData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "InvoiceCreated",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "SetCurrency",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "SetFeePercent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "SetPayee",
    type: "event",
  },
  {
    inputs: [],
    name: "UNIQUE_INDENTIFIER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
            internalType: "enum Invoice.Frequency",
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
        internalType: "struct Invoice.InvoiceData",
        name: "invoiceData",
        type: "tuple",
      },
    ],
    name: "createInvoice",
    outputs: [
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
            internalType: "enum Invoice.Frequency",
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
        internalType: "struct Invoice.InvoiceData",
        name: "returnedInvoice",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    name: "currencies",
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
    name: "feePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
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
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "payees",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "_currencies",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "setFeePercent",
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
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_payees",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "whitelistPayee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506128a2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637fd6f15c1161008c57806397dc75561161006657806397dc755614610239578063affed0e014610255578063c623cabe14610273578063f2fde38b14610291576100ea565b80637fd6f15c146101f35780638129fc1c146102115780638da5cb5b1461021b576100ea565b80636036cba3116100c85780636036cba31461016b578063715018a61461019b57806371c3a60b146101a55780637ce3489b146101d7576100ea565b8063247db663146100ef57806324d7806c1461010b578063310441fa1461013b575b600080fd5b6101096004803603810190610104919061186d565b6102ad565b005b610125600480360381019061012091906117e4565b610428565b6040516101329190611d9a565b60405180910390f35b610155600480360381019061015091906117e4565b61047e565b6040516101629190611d9a565b60405180910390f35b610185600480360381019061018091906118c9565b61049e565b6040516101929190611d9a565b60405180910390f35b6101a36104be565b005b6101bf60048036038101906101ba91906118f6565b610546565b6040516101ce93929190612021565b60405180910390f35b6101f160048036038101906101ec9190611924565b61063c565b005b6101fb610761565b604051610208919061205b565b60405180910390f35b610219610767565b005b61022361084f565b6040516102309190611d56565b60405180910390f35b610253600480360381019061024e9190611811565b610879565b005b61025d6109f4565b60405161026a919061205b565b60405180910390f35b61027b6109fa565b6040516102889190611df9565b60405180910390f35b6102ab60048036038101906102a691906117e4565b610a88565b005b6102bd6102b8610b80565b610428565b8061030157506102cb610b80565b73ffffffffffffffffffffffffffffffffffffffff166102e961084f565b73ffffffffffffffffffffffffffffffffffffffff16145b610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033790611f25565b60405180910390fd5b60005b82518110156104235781609c600085848151811061036457610363612477565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f98c0c4bde5f642566cdaebfb7cd2cdc72a98bc7f3440e38c19e1d58d92388d348382815181106103f1576103f0612477565b5b602002602001015183604051610408929190611db5565b60405180910390a1808061041b90612341565b915050610343565b505050565b6000609760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b609b6020528060005260406000206000915054906101000a900460ff1681565b609c6020528060005260406000206000915054906101000a900460ff1681565b6104c6610b80565b73ffffffffffffffffffffffffffffffffffffffff166104e461084f565b73ffffffffffffffffffffffffffffffffffffffff161461053a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053190611ee5565b60405180910390fd5b6105446000610b88565b565b61054e6113e7565b600080609b600061055d610b80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db90611e85565b60405180910390fd5b6105ed84610c4e565b8093508194505050609d5490507ffd530febd28afa22a61e317d9ac622adc9a1d16eecb7b8df77d00f19cc4dc70683838360405161062d93929190612021565b60405180910390a19193909250565b61064c610647610b80565b610428565b80610690575061065a610b80565b73ffffffffffffffffffffffffffffffffffffffff1661067861084f565b73ffffffffffffffffffffffffffffffffffffffff16145b6106cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c690611f25565b60405180910390fd5b6064811080156106df5750606481115b61071e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071590611f45565b60405180910390fd5b806099819055507f54b9dbb1167ce9a1e141b9c71f73394e64bf53da85077b4bcdcff626ba943f58609954604051610756919061205b565b60405180910390a150565b60995481565b60006107736001610fa6565b90508015610797576001600060016101000a81548160ff0219169083151502179055505b61079f611096565b6040518060400160405280600881526020017f504249542d415050000000000000000000000000000000000000000000000000815250609890805190602001906107ea929190611491565b50600a609981905550801561084c5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516108439190611dde565b60405180910390a15b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610889610884610b80565b610428565b806108cd5750610897610b80565b73ffffffffffffffffffffffffffffffffffffffff166108b561084f565b73ffffffffffffffffffffffffffffffffffffffff16145b61090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090390611f25565b60405180910390fd5b60005b82518110156109ef5781609b60008584815181106109305761092f612477565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fd23249e66bcd36732dfc58e0713ce7e15bd57a8fe27ce72dffa3035ccfa7ce5d8382815181106109bd576109bc612477565b5b6020026020010151836040516109d4929190611d71565b60405180910390a180806109e790612341565b91505061090f565b505050565b609d5481565b60988054610a07906122de565b80601f0160208091040260200160405190810160405280929190818152602001828054610a33906122de565b8015610a805780601f10610a5557610100808354040283529160200191610a80565b820191906000526020600020905b815481529060010190602001808311610a6357829003601f168201915b505050505081565b610a90610b80565b73ffffffffffffffffffffffffffffffffffffffff16610aae61084f565b73ffffffffffffffffffffffffffffffffffffffff1614610b04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afb90611ee5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6b90611e65565b60405180910390fd5b610b7d81610b88565b50565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610c566113e7565b600080836040015111610c9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9590611f05565b60405180910390fd5b609b6000846000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2590611fa5565b60405180910390fd5b609c6000846060015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db590611ea5565b60405180910390fd5b610e1042610dcc9190612124565b8360a0015111610e11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0890611fe5565b60405180910390fd5b8260a001518360e00151118015610e3d5750620151808360a001518460e00151610e3b91906121ab565b115b610e7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7390611f65565b60405180910390fd5b6001609d6000828254610e8f9190612124565b925050819055506098610ea3609d546110f7565b604051602001610eb4929190611e1b565b6040516020818303038152906040528051906020012083610120018181525050609d548361010001818152505082604051602001610ef29190612005565b60405160208183030381529060405280519060200120905060011515609a600083815260200190815260200160002060009054906101000a900460ff1615151415610f72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6990611fc5565b60405180910390fd5b6001609a600083815260200190815260200160002060006101000a81548160ff021916908315150217905550829150915091565b60008060019054906101000a900460ff161561101d5760018260ff16148015610fd55750610fd330611258565b155b611014576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100b90611ec5565b60405180910390fd5b60009050611091565b8160ff1660008054906101000a900460ff1660ff1610611072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106990611ec5565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff166110e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110dc90611f85565b60405180910390fd5b6110ed61127b565b6110f56112d4565b565b6060600082141561113f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611253565b600082905060005b6000821461117157808061115a90612341565b915050600a8261116a919061217a565b9150611147565b60008167ffffffffffffffff81111561118d5761118c6124a6565b5b6040519080825280601f01601f1916602001820160405280156111bf5781602001600182028036833780820191505090505b5090505b6000851461124c576001826111d891906121ab565b9150600a856111e7919061238a565b60306111f39190612124565b60f81b81838151811061120957611208612477565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611245919061217a565b94506111c3565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166112ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c190611f85565b60405180910390fd5b6112d261132d565b565b600060019054906101000a900460ff16611323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131a90611f85565b60405180910390fd5b61132b61138e565b565b600060019054906101000a900460ff1661137c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137390611f85565b60405180910390fd5b61138c611387610b80565b610b88565b565b600060019054906101000a900460ff166113dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d490611f85565b60405180910390fd5b6001606581905550565b604051806101400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600581111561146557611464612419565b5b815260200160008152602001600081526020016000815260200160008152602001600080191681525090565b82805461149d906122de565b90600052602060002090601f0160209004810192826114bf5760008555611506565b82601f106114d857805160ff1916838001178555611506565b82800160010185558215611506579182015b828111156115055782518255916020019190600101906114ea565b5b5090506115139190611517565b5090565b5b80821115611530576000816000905550600101611518565b5090565b60006115476115428461209b565b612076565b9050808382526020820190508285602086028201111561156a576115696124df565b5b60005b8581101561159a57816115808882611614565b84526020840193506020830192505060018101905061156d565b5050509392505050565b60006115b76115b2846120c7565b612076565b905080838252602082019050828560208602820111156115da576115d96124df565b5b60005b8581101561160a57816115f088826116af565b8452602084019350602083019250506001810190506115dd565b5050509392505050565b600081359050611623816127e9565b92915050565b600082601f83011261163e5761163d6124d5565b5b813561164e848260208601611534565b91505092915050565b600082601f83011261166c5761166b6124d5565b5b813561167c8482602086016115a4565b91505092915050565b60008135905061169481612800565b92915050565b6000813590506116a981612817565b92915050565b6000813590506116be8161282e565b92915050565b6000813590506116d381612845565b92915050565b600061014082840312156116f0576116ef6124da565b5b6116fb610140612076565b9050600061170b84828501611614565b600083015250602061171f84828501611614565b6020830152506040611733848285016117cf565b604083015250606061174784828501611614565b606083015250608061175b848285016116c4565b60808301525060a061176f848285016117cf565b60a08301525060c0611783848285016117cf565b60c08301525060e0611797848285016117cf565b60e0830152506101006117ac848285016117cf565b610100830152506101206117c28482850161169a565b6101208301525092915050565b6000813590506117de81612855565b92915050565b6000602082840312156117fa576117f96124e9565b5b600061180884828501611614565b91505092915050565b60008060408385031215611828576118276124e9565b5b600083013567ffffffffffffffff811115611846576118456124e4565b5b61185285828601611629565b925050602061186385828601611685565b9150509250929050565b60008060408385031215611884576118836124e9565b5b600083013567ffffffffffffffff8111156118a2576118a16124e4565b5b6118ae85828601611657565b92505060206118bf85828601611685565b9150509250929050565b6000602082840312156118df576118de6124e9565b5b60006118ed848285016116af565b91505092915050565b6000610140828403121561190d5761190c6124e9565b5b600061191b848285016116d9565b91505092915050565b60006020828403121561193a576119396124e9565b5b6000611948848285016117cf565b91505092915050565b61195a816121df565b82525050565b611969816121df565b82525050565b611978816121f1565b82525050565b611987816121fd565b82525050565b611996816121fd565b82525050565b6119a581612263565b82525050565b6119b481612287565b82525050565b6119c381612299565b82525050565b60006119d482612108565b6119de8185612113565b93506119ee8185602086016122ab565b6119f7816124ee565b840191505092915050565b60008154611a0f816122de565b611a198186612113565b94506001821660008114611a345760018114611a4657611a79565b60ff1983168652602086019350611a79565b611a4f856120f3565b60005b83811015611a7157815481890152600182019150602081019050611a52565b808801955050505b50505092915050565b6000611a8f602683612113565b9150611a9a826124ff565b604082019050919050565b6000611ab2601483612113565b9150611abd8261254e565b602082019050919050565b6000611ad5601483612113565b9150611ae082612577565b602082019050919050565b6000611af8602e83612113565b9150611b03826125a0565b604082019050919050565b6000611b1b602083612113565b9150611b26826125ef565b602082019050919050565b6000611b3e601283612113565b9150611b4982612618565b602082019050919050565b6000611b61601383612113565b9150611b6c82612641565b602082019050919050565b6000611b84600c83612113565b9150611b8f8261266a565b602082019050919050565b6000611ba7602583612113565b9150611bb282612693565b604082019050919050565b6000611bca600183612113565b9150611bd5826126e2565b602082019050919050565b6000611bed602b83612113565b9150611bf88261270b565b604082019050919050565b6000611c10600b83612113565b9150611c1b8261275a565b602082019050919050565b6000611c33600f83612113565b9150611c3e82612783565b602082019050919050565b6000611c56602083612113565b9150611c61826127ac565b602082019050919050565b61014082016000820151611c836000850182611951565b506020820151611c966020850182611951565b506040820151611ca96040850182611d38565b506060820151611cbc6060850182611951565b506080820151611ccf60808501826119ab565b5060a0820151611ce260a0850182611d38565b5060c0820151611cf560c0850182611d38565b5060e0820151611d0860e0850182611d38565b50610100820151611d1d610100850182611d38565b50610120820151611d3261012085018261197e565b50505050565b611d418161224c565b82525050565b611d508161224c565b82525050565b6000602082019050611d6b6000830184611960565b92915050565b6000604082019050611d866000830185611960565b611d93602083018461196f565b9392505050565b6000602082019050611daf600083018461196f565b92915050565b6000604082019050611dca600083018561199c565b611dd7602083018461196f565b9392505050565b6000602082019050611df360008301846119ba565b92915050565b60006020820190508181036000830152611e1381846119c9565b905092915050565b60006060820190508181036000830152611e358185611a02565b90508181036020830152611e4881611bbd565b90508181036040830152611e5c81846119c9565b90509392505050565b60006020820190508181036000830152611e7e81611a82565b9050919050565b60006020820190508181036000830152611e9e81611aa5565b9050919050565b60006020820190508181036000830152611ebe81611ac8565b9050919050565b60006020820190508181036000830152611ede81611aeb565b9050919050565b60006020820190508181036000830152611efe81611b0e565b9050919050565b60006020820190508181036000830152611f1e81611b31565b9050919050565b60006020820190508181036000830152611f3e81611b54565b9050919050565b60006020820190508181036000830152611f5e81611b77565b9050919050565b60006020820190508181036000830152611f7e81611b9a565b9050919050565b60006020820190508181036000830152611f9e81611be0565b9050919050565b60006020820190508181036000830152611fbe81611c03565b9050919050565b60006020820190508181036000830152611fde81611c26565b9050919050565b60006020820190508181036000830152611ffe81611c49565b9050919050565b60006101408201905061201b6000830184611c6c565b92915050565b6000610180820190506120376000830186611c6c565b61204561014083018561198d565b612053610160830184611d47565b949350505050565b60006020820190506120706000830184611d47565b92915050565b6000612080612091565b905061208c8282612310565b919050565b6000604051905090565b600067ffffffffffffffff8211156120b6576120b56124a6565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156120e2576120e16124a6565b5b602082029050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600061212f8261224c565b915061213a8361224c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561216f5761216e6123bb565b5b828201905092915050565b60006121858261224c565b91506121908361224c565b9250826121a05761219f6123ea565b5b828204905092915050565b60006121b68261224c565b91506121c18361224c565b9250828210156121d4576121d36123bb565b5b828203905092915050565b60006121ea8261222c565b9050919050565b60008115159050919050565b6000819050919050565b6000612212826121df565b9050919050565b6000819050612227826127d5565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061226e82612275565b9050919050565b60006122808261222c565b9050919050565b600061229282612219565b9050919050565b60006122a482612256565b9050919050565b60005b838110156122c95780820151818401526020810190506122ae565b838111156122d8576000848401525b50505050565b600060028204905060018216806122f657607f821691505b6020821081141561230a57612309612448565b5b50919050565b612319826124ee565b810181811067ffffffffffffffff82111715612338576123376124a6565b5b80604052505050565b600061234c8261224c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561237f5761237e6123bb565b5b600182019050919050565b60006123958261224c565b91506123a08361224c565b9250826123b0576123af6123ea565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f43616c6c6572206973206e6f742070617965652e000000000000000000000000600082015250565b7f4e6f7420612076616c69642063757272656e6379000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416d6f756e742063616e6e6f7420626520300000000000000000000000000000600082015250565b7f43616c6c6572206973206e6f742061646d696e00000000000000000000000000600082015250565b7f4f7574206f662072616e67650000000000000000000000000000000000000000600082015250565b7f4578706972792073686f756c6420626520677265617465207468616e2032342060008201527f686f757273000000000000000000000000000000000000000000000000000000602082015250565b7f2d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f4e6f742061207061796565000000000000000000000000000000000000000000600082015250565b7f416c726561647920637265617465640000000000000000000000000000000000600082015250565b7f496e766f69636520746f6f20736f6f6e2e2043616e6e6f742070726f63657373600082015250565b600681106127e6576127e5612419565b5b50565b6127f2816121df565b81146127fd57600080fd5b50565b612809816121f1565b811461281457600080fd5b50565b612820816121fd565b811461282b57600080fd5b50565b61283781612207565b811461284257600080fd5b50565b6006811061285257600080fd5b50565b61285e8161224c565b811461286957600080fd5b5056fea264697066735822122040322f708561486fa2d837a0cebaa3e04a76784c07a2f6d3a76e031804743aca64736f6c63430008060033";

export class Invoice__factory extends ContractFactory {
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
  ): Promise<Invoice> {
    return super.deploy(overrides || {}) as Promise<Invoice>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Invoice {
    return super.attach(address) as Invoice;
  }
  connect(signer: Signer): Invoice__factory {
    return super.connect(signer) as Invoice__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvoiceInterface {
    return new utils.Interface(_abi) as InvoiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Invoice {
    return new Contract(address, _abi, signerOrProvider) as Invoice;
  }
}