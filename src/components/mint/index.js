import React, {useState} from "react";
import Web3Modal from 'web3modal'
import Web3 from "web3/dist/web3.min.js";
import "./index.css"
import {
    MDBIcon
  } from 'mdb-react-ui-kit';
  import { nftAddress } from "../../config";
  import Math from '../../artifacts/contracts/MathClub.sol/MathClub.json' 
export default function Mint(){
    const [number,setNumber] = useState(0);
    
    var web3 = null;
    var account = null
    var nftmint = 0;
    async function minting(){
        const web3Modal = new Web3Modal()
        var provider = await web3Modal.connect();
            web3 = new Web3(provider); 
            await provider.send('eth_requestAccounts'); 
            var accounts = await web3.eth.getAccounts(); 
            account = accounts[0];
            console.log(account); 
            let contract = new web3.eth.Contract(Math.abi, nftAddress)
            console.log(contract)
            let rate = await contract.methods.cost.call().call()
            console.log(rate)
            console.log(number)
            let cost = rate*number
            let transaction = await contract.methods.mint(number).send({from:account, 
            gasLimit: null,
            value:cost 
            }).on("confirmation",async(num)=>{
                if(num == 0){
                    console.log(`${transaction}.....Transaction Completed`)
                }
            });         
    }
    async function Increment(){
        if(number <2){
        setNumber(number+1);
        }
        console.log(number);   
    }

    async function Decrement(){
        if(number > 0){
        setNumber(number-1);
        console.log(number);
        nftmint = number
        }
        
    }
    return(
        <>
        <div className="container">
            <div className="container1">
                {/* <div className="nftselect"> */}
                    <button id="main">
                    <button id="minus" onClick={Decrement}>
                    <i class="fas fa-minus text-black"></i>
                    </button>
                    <p id="display" >{number}</p>
                    <button id="plus" onClick={Increment}>
                    <i class="fas fa-plus text-dark"></i>
                    </button>
                    </button>
                {/* </div> */}
                <p id="max" >Max mint per wallet:2</p>
                <div className="mint">
                <button id="mint1" onClick={minting}>Mint</button>
            </div>
            </div>
            {/* <div className="mint">
                <button id="mint1" onClick={minting}>Mint</button>
            </div> */}
        </div>
        </>
    )

}