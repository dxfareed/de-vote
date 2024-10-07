//import React from 'react'
import { useState } from 'react'
import driod from './images/DRIODimages.png' 
import apple from './images/IPHdownload.png'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import WalletCont from './walletcont'
import Walletinfo from './walletinfo'
import WalletDisconnect from './WalletDisconnect'
import abi from './abi.json'
import ResVote from './resVote'
import Web3 from 'web3'
export default function Votepage() {
    //const[bool, setBool]=useState(false);
    const testweb3arb= new Web3('https://sepolia-rollup-sequencer.arbitrum.io/rpc');
    const {status, address} = useAccount()
    const [web3, setWeb3]= useState(new Web3);
    const { connectors, connect, error } = useConnect()
   setTimeout(()=>{
        document.getElementById("sideii").style.display="none";
        //setBool(true);
    },3000)
    const voteFunc = (param)=> {
        const ca = '0xD34b14F2ee84904066e69b04777bb533a2AfD7b7';
        const provider = window.ethereum;
        ///setWeb3(new Web3(provider));  
        const contract = new testweb3arb.eth.Contract(abi, ca);
        try {
            if(param==="a"){
            contract.methods.addVoteA("a").send(
                { from: address }
            );
        }
            else if(param==="b"){
                contract.methods.addVoteB("b").send(
                    { from: address }
                );
            }
        } catch (err) {
            console.error('Error occurred:', err);
        }
    }
    return (
    <>
    <Walletinfo/>
    <ResVote/>
    <div className='voteMain'>
        <div id='sideii'>
                <div>Vote your preferred choice!</div>
                <div style={{textAlign:"center"}}>
                    <div>on Chain</div>
                    <div>LFG!!!</div>
                </div>
        </div>
        <div className='vote-A'>
            <div className='driod-div'>
                <img src={driod} className='driod-image'/>
            </div>
            <div className='driod-choice' onClick={()=>{voteFunc("a")}}>Andriod</div>
        </div>
        <div className='vote-A vote-B'>
            <div className='driod-div driod-divB'>
                <img src={apple} className='driod-image driod-imageB'/>
            </div>
            <div className='driod-choice' onClick={()=>{voteFunc("b")}}>Apple</div>
        </div>
    </div>
    </>
  )
}

