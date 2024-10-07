import { useAccount} from 'wagmi'
import Nav from './components/nav'
import Votepage from './components/votepage'
import WalletCont from './components/walletcont'
import StatusAcc from './status'
//import ResVote from './components/resVote'

function App() {
  const {status} = useAccount()
  return (
      <>
        <Nav/>
        {status ==="connected" && <Votepage/>}
        {status === "disconnected" && <WalletCont/>}
        <StatusAcc/>
    {/* <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </> */}
    </>
  )
}

export default App
