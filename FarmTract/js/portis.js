import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("f6608c84-be3e-4803-9afe-57ca9ee39aa0", "rinkeby");
const web3 = new Web3(portis.provider);

web3.eth
  .getAccounts()
  .then((accounts) => console.log(accounts))
  .catch((error) => console.log(error));

