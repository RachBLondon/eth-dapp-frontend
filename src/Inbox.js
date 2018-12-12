import web3 from './web3';

const abi = [
    {
      "constant": false,
      "inputs": [{ "name": "newMessage", "type": "string" }],
      "name": "setMessage",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMessage",
      "outputs": [{ "name": "", "type": "string" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "message",
      "outputs": [{ "name": "", "type": "string" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "name": "initialMessage", "type": "string" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ]

  const address = '0xe1cE78f565969A41a7FC2B79CA58ba55319D246F'
  

  export default new web3.eth.Contract(abi, address);