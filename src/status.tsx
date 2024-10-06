//import React from 'react'
import {useAccount,useConnect, useDisconnect } from 'wagmi'
export default function StatusAcc() {
    const {address, status} = useAccount();
  return (
    <div className='status-cont'>
       { status==='connecting' && <div>connecting</div>}
        { status==='reconnecting' && <div>reconnecting</div>}
    </div>
  )
}
