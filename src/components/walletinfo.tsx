import { useAccount} from 'wagmi'
import WalletDisconnect from './WalletDisconnect';
export default function Walletinfo() {
    const {address} = useAccount();
    const addrez=address;
    return (
      <div>
      <div
          style={{
              marginTop:"9px",
              textAlign:"center"
          }}
      >
        <div>
          --{
            //@ts-ignore
            ` ${addrez.slice(0,5)}..${addrez.slice(addrez.length-6,addrez.length-2)}`
                  } --
        </div>
        <div>connected</div>
      </div>
      <WalletDisconnect />
      </div>
    )
}
