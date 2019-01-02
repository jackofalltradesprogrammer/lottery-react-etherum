import Web3 from 'web3';

// taking control of the provider provided by the metamask
// the metamask provider that will connect to rinkeby we are giving to our web3 instance
const web3 = new Web3(windows.web3.currentProvider); 

export default web3;