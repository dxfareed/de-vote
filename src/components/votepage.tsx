//import React from 'react'
import { useState } from 'react'
import driod from './images/DRIODimages.png' 
import apple from './images/IPHdownload.png'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
export default function Votepage() {
    //const[bool, setBool]=useState(false);
    const {status, address} = useAccount()
    const { connectors, connect, error } = useConnect()
    const { disconnect } = useDisconnect()
   setTimeout(()=>{
        document.querySelector("#side-talk").style.display="none";
        //setBool(true);
    },3000)
    return (
    <div className='voteMain'>
        <div id='side-talk'>
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
            <div className='driod-choice'>Andriod</div>
        </div>
        <div className='vote-A vote-B'>
            <div className='driod-div driod-divB'>
                <img src={apple} className='driod-image driod-imageB'/>
            </div>
            <div className='driod-choice'>Apple</div>
        </div>
    </div>
  )
}

