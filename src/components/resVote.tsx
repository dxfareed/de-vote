import {useState} from 'react'
import abi from './abi.json'
import Web3 from 'web3'
export default function ResVote() {
    const web3= new Web3('https://sepolia-rollup.arbitrum.io/rpc');
    const ca='0x72D9739E2a043020c365908Ea7BE5b5056F449Bc';
    const contract= new web3.eth.Contract(abi, ca);
    const [val, setVal]= useState(0);
    try{
        contract.methods.totalVote().call().then(
            (res)=>{
                setVal(res.toString())
            }
        )
    } catch(err){
        console.log(err)
    }
    return (
    <div className='total-cont'>
        <div>Total vote: &nbsp;{val}<span></span></div>
    </div>
  )
}
