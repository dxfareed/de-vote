import React from 'react'
import {useAccount,useConnect, useDisconnect } from 'wagmi'
export default function ContWallet() {
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()
  return (
    <div>
        <div>
        {
            connectors.map((connector, index) => (
                index === 4 && (
                  <div
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                  >
                    <span>logo </span>
                    MetaMask
                  </div>
                )
              ))
        }
        </div>
    </div>
  )
}
