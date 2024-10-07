import {useState} from 'react'
import abi from './abi.json'
import Web3 from 'web3'
export default function TotalVote() {
    const web3= new Web3('https://sepolia-rollup.arbitrum.io/rpc');
    const ca='0x72D9739E2a043020c365908Ea7BE5b5056F449Bc';
    const contract= new web3.eth.Contract(abi, ca);
    const [a, totalA] = useState(0);
    const [b, totalB] = useState(0);
    try{
        contract.methods.totalVoteA().call().then(
            (res)=>{
                //@ts-ignore
                const resStr=res.toString();
                totalA(Number(resStr));
            }
        )
    } catch(err){
        console.log(err)
    }
    try{
        contract.methods.totalVoteB().call().then(
            (res)=>{
                //@ts-ignore
                const resStr=res.toString();
                totalB(Number(resStr));
            }
        )
    } catch(err){
        console.log(err)
    }
    return (
    <div className='total'>
        <div className='driod-info'>Total vote of Andriod : <span id='num'>{a}</span></div>
        <div className='apple-info'>Total vote of Apple : <span id='num'>{b}</span></div>
    </div>
  )
}
