import {useAccount,useConnect, useDisconnect } from 'wagmi'
//import React from 'react'

export default function WalletCont() {
    const {address, status} = useAccount();
    const { connectors, connect, error } = useConnect()
    const { disconnect } = useDisconnect()
  return (
    <div className="wall-cont">
      <div className='info-text'>
            <div>deVote is a decentralized app that allow users vote their preferred choice on Chain</div>
            <div className='tag-arbsty'>Built on Arbitrum Stylus</div>
        </div>
        <div className='mn-cont'>
        {
            connectors.map((connector, index) => (
                index === 4 && (
                  <div
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                  >
                    {/*<span>logo </span>*/}
                    Connect Wallet
                  </div>
                )
              ))
        }
        </div>
        <div
            style={{textAlign:"left", width:"150px"}}
        >to get started....</div>
    </div>
  )
}
