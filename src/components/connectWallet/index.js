import React,{ useState } from "react";
import Web3Modal from 'web3modal'
import Web3 from "web3/dist/web3.min.js";
import { Link } from 'react-router-dom'
import "./index.css"
export default function Wallet(){
var web3 = null;
var account = null;
async function Connect(){
const web3Modal = new Web3Modal()
   var provider = await web3Modal.connect();
     web3 = new Web3(provider); 
     await provider.send('eth_requestAccounts'); 
     var accounts = await web3.eth.getAccounts(); 
     account = accounts[0]; 
     console.log(account)

}

  return(
    <> 
        <div className="container">
            <div className="vertical-center">
            <Link to='/mint'>  
            <button onClick={Connect} className='wallet'>
        </button>
        </Link>
        </div>
        </div>
  </>
  )

}