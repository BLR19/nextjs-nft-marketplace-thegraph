import {ConnectButton} from "web3uikit"
import Link from "next/link"

export default function Header(){
return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
        <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
        <div className="flex flex-row items-center">
        <Link href="/" className="w-24 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-8 mb-2  whitespace-nowrap">
            Home
        </Link>
        <Link href="/sell-nft" className="w-24 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 whitespace-nowrap">
            Sell NFT
        </Link>
    <ConnectButton moralisAuth={false}/>
    </div>
    </nav>
)
}