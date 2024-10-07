//import React from 'react'
import { useState } from 'react';
import driod from './images/DRIODimages.png';
import apple from './images/IPHdownload.png';
import { useAccount} from 'wagmi';
import Walletinfo from './walletinfo';
import abi from './abi.json';
import ResVote from './resVote';
import Web3 from 'web3';
import TotalVote from './totalRes';
export default function Votepage() {
    //@ts-ignore
    const testweb3arb= new Web3('https://sepolia-rollup.arbitrum.io/rpc');
    const {address} = useAccount()
    const [bool, setBool] = useState(false)
    const [web3, setWeb3]= useState(new Web3);
    const [driodWord, setDriod]= useState("Andriod");
    const [appleWord, setApple]= useState("Apple");
   setTimeout(()=>{
    //@ts-ignore
       document.getElementById("sideii").style.display="none";
       //@ts-ignore
       document.getElementById("sideiii").style.display="none";
    },3000)
    //@ts-ignore
    const voteFunc = async (param)=> {
        setApple("Please wait");
        setDriod("Please wait");
        const ca = '0x72D9739E2a043020c365908Ea7BE5b5056F449Bc';
        //const provider = window.ethereum;
        if (window.ethereum.providers) {
            //@ts-ignore
            const provider = window.ethereum.providers.find(p => p.isMetaMask);
            const web3ins = new Web3(provider);
            setWeb3(web3ins);
        } else {
            const provider = window.ethereum;
            const web3ins = new Web3(provider);
            setWeb3(web3ins);
        }
        //setWeb3(new Web3(provider));  
        /*const contract = new web3.eth.Contract(abi, ca);
        try {
            await contract.methods.addList(val).send(
                { from: address }
            );
        } catch (err) {
            console.error('Error occurred:', err);
        }*/
        const contract = new web3.eth.Contract(abi, ca);
        try {
            if(param==="a" ){
            await contract.methods.addVoteA("a").send(
             //@ts-ignore
            { from: address, gas: 200000}
            );
            setBool(true)
            //@ts-ignore
            document.querySelector(".voteMain").style.display="none";
           }
            else if(param==="b"){
              await contract.methods.addVoteB("b").send(
                //@ts-ignore
               { from: address, gas: 200000}
                );
                setBool(true)
                //@ts-ignore
                document.querySelector(".voteMain").style.display="none";
            }
        } catch (err) {
                //document.getElementById("warn-vote").style.display="block";
                //@ts-ignore
                if(err.message.includes("revert")){
                    setApple("Apple");
                    setDriod("Andriod");
                    //@ts-ignore
                    if(window.innerWidth>510){
                        //@ts-ignore
                        document.getElementById("warn-vote").style.display="none";
                    }
                    else{
                        //@ts-ignore
                        document.getElementById("warn-vote").style.display="block";
                    }
                    //@ts-ignore
                    document.getElementById("warn-votDesktop").style.display="block";
                    setTimeout( ()=>{
                    setBool(true)
                    //@ts-ignore
                    document.querySelector(".voteMain").style.display="none";
                    //@ts-ignore
                    document.getElementById("warn-votDesktop").style.display="none";
                    }, 2000
                    )
                    setTimeout(
                        ()=>{
                            //@ts-ignore
                            document.getElementById("warn-vote").style.display="none";
                        }, 5000
                    )
                }
                setApple("Apple");
                setDriod("Andriod");
            console.error('Error here :', err);
        }
    }
    return (
    <>
    <Walletinfo/>
    <ResVote/>
    {bool&&<TotalVote/>}
    <div id='warn-votDesktop'>User voted already!</div>
    <div id='sideiii'>
        <div id="subsideDesktop">
                <div style={{textAlign:"center"}}>Vote your preferred choice!</div>
                <div style={{textAlign:"center"}}>
                    <div>on Chain</div>
                    <div>LFG!!!</div>
                </div>
        </div>
    </div>
    <div className='voteMain'>
        <div id='sideii'>
                <div>Vote your preferred choice!</div>
                <div style={{textAlign:"center"}}>
                    <div>on Chain</div>
                    <div>LFG!!!</div>
                </div>
        </div>
        <div id='warn-vote'>User voted already!</div>
        <div className='vote-A'>
            <div className='driod-div'>
                <img src={driod} className='driod-image'/>
            </div>
            <div className='driod-choice' onClick={()=>{voteFunc("a")}}>{driodWord}</div>
        </div>
        <div className='vote-A vote-B'>
            <div className='driod-div driod-divB'>
                <img src={apple} className='driod-image driod-imageB'/>
            </div>
            <div className='driod-choice' onClick={()=>{voteFunc("b")}}>{appleWord}</div>
        </div>
    </div>
    </>
  )
}

