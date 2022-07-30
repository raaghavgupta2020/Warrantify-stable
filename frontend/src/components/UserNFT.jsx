import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
// import Countdown from './CountDown'
import Countdown from 'react-countdown';
import axios from 'axios'
import Web3Modal from 'web3modal'
import UNavbar from './UNavbar'
import '../components/nft_card.css'

import {
    marketplaceAddress
} from '../blockchain/config'

import NFTMarketplace from '../blockchain/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function UserNFT () {
    const [date3, setDate3] = useState(new Date())
    const [date4, setDate4] = useState(date3.getTime())
    

    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    useEffect(() => {
        loadNFTs()
    }, [])
    async function loadNFTs() {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
        })
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
        const data = await marketplaceContract.fetchMyNFTs()
        // const timerem = await marketplaceContract.getTimeLeft()
        // const timerem1 = await marketplaceContract.getTimeLeft()
        // const timerem2 = await marketplaceContract.getTimeLeft()
        // const timerem3 = await marketplaceContract.getTimeLeft()
        // console.log("timerem" + timerem)
        const items = await Promise.all(data.map(async i => {
            const tokenURI = await marketplaceContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenURI)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
                wallet_address: meta.data.wallet_address,
                tokenURI,
                expiry: meta.data.expiry,
                date1: meta.data.date1,
                date2: meta.data.date2,
            }
            return item
        }))
        setNfts(items)
        setLoadingState('loaded')
    }

    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No NFTs owned</h1>)
    return (
        <>
            <UNavbar />
            <div className="flex justify-center">
                <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4  ">
                        {
                            nfts.map((nft, i) => (


                                
                                // <div key={i} className="nft border shadow rounded-xl overflow-x-scroll" >
                                //     <img src={nft.image} className="rounded" />
                                //     <div className="p-4">
                                //         <p className="text-2xl font-bold text-black">Price - {nft.price} Eth</p>
                                //         <p></p>
                                //         <p className='text-2xl'>From - {nft.wallet_address}</p>
                                //         <p className='text-2xl'>Owner - {nft.owner}</p>
                                //         <p>time- {nft.timerem}</p>                                     
                                //     </div>
                                // </div>

                                <div key={i} class="nft">
                                    <div class='main'>
                                        <img class='tokenImage ml-6 object-contain h-32' src={nft.image} alt="NFT" />
                                        
                                        <p class='description break-words'>Seller: {nft.wallet_address} </p>
                                        {
                                            date4 > nft.date1 ? (
                                                 <p class='description break-words'>Owner: 0x00000000000000 </p>
                                            ): (
                                                <p class='description break-words'>Owner: {nft.owner} </p>
                                            )
                                        }
                                        <div class='tokenInfo'>
                                            <div class="price">
                                                <ins>◘</ins>
                                                <p>{nft.price} ETH</p>
                                            </div>
                                            <div class="duration">
                                                <p><ins>◷</ins></p>
                                                <br/>

                                                {/* <p>{nft.expiry}</p> */}
                                                <br />
                                                {console.log(Number(nft.expiry))}
                                                {/* <Countdown count={nft.expiry} /> */}
                                                
                                                {/* <Countdown className='font-bold' date={Date.now() + Number(nft.expiry)*1000} /> */}
                                            </div>
                                            
                                        </div>
                                        {date4 > nft.date1 ? (
                                            <div className="text-red-500">Expired</div>
                                        ) : (<p class='text-green-500 description break-words'>Valid</p>)}
                                        <p>bought: {nft.date1}</p>
                                                <p>expiry: {nft.date2}</p>
                                                <p>now: {date4}</p>
                                        <hr />
{/*                                         
                                        {date4 > nft.date1 ? (
                                            <a href="/not applica">Resale</a>
                                           
                                        ) : (<p class='text-green-500 description break-words'>Repair </p>)}
                                        <p>bought: {nft.date1}</p>
                                                <p>expiry: {nft.date2}</p>
                                                <p>now: {date4}</p>
                                        <hr />
                                        //  */}
{/* {date4 > nft.date1 ? (
                                            <a href="/not applica">Resale</a>

                                           
                                        ) : (<p class='text-green-500 description break-words'>Repair </p>)}
                                        <p>bought: {nft.date1}</p>
                                                <p>expiry: {nft.date2}</p>
                                                <p>now: {date4}</p>
                                        <hr /> */}
                                         
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}