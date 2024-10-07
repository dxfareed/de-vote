//import React from 'react'
import {useAccount } from 'wagmi'
export default function StatusAcc() {
    const {status} = useAccount();
  return (
    <div className='status-cont'>
       { status==='connecting' && <div>connecting</div>}
        { status==='reconnecting' && <div>reconnecting</div>}
    </div>
  )
}
