import { ethers } from "ethers";
import { useEffect, useState } from "react";
// import Countdown from './CountDown'
import Countdown from "react-countdown";
import emailjs from "emailjs-com";
import axios from "axios";
import Web3Modal from "web3modal";
import UNavbar from "./UNavbar";
import "../components/nft_card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Start from "../starting/Start";
import {
  Link,
  Route,
  Switch,
  Redirect,
  useNavigate,
  Router,
} from "react-router-dom";
import QRCode from "react-qr-code";

toast.configure();

import { marketplaceAddress } from "../blockchain/config";

import NFTMarketplace from "../blockchain/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

let x = 0;
let y = "";

function handleReturn(e) {
  toast("Expired already");
}
function handleReturn1(e) {
  toast("Return initiated");
}

export default function UserNFT() {
  let [formInput, updateFormInput] = useState({
    email: "",
    pprice: "",
  });
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mqa5k61",
        "template_ccnyb9o",
        e.target,
        "Flc0IW2nj24NX0gAs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  // let navigate=useNavigate();
  let [openModal, setOpenModal] = useState("");
  const [date3, setDate3] = useState(new Date());
  const [date4, setDate4] = useState(date3.getTime());

  // function hi() {
  //     return (
  //         console.log(hi)
  //         // <h1>Hello</h1>
  //     )

  // }
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();
    // const timerem = await marketplaceContract.getTimeLeft()
    // const timerem1 = await marketplaceContract.getTimeLeft()
    // const timerem2 = await marketplaceContract.getTimeLeft()
    // const timerem3 = await marketplaceContract.getTimeLeft()
    // console.log("timerem" + timerem)
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
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
          cid: tokenURI.split("/")[4],
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No valid warranty cards</h1>;
  return (
    <>
      <UNavbar />
      <div className="flex justify-center">
        <div className="p-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-1  ">
            {nfts.map((nft, i) => (
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
                <div class="main">
                  <img
                    class="tokenImage ml-6 object-contain h-32"
                    src={nft.image}
                    alt="NFT"
                  />
                  <p class="break-words ">Product Number : {nft.tokenId}</p>
                  {/* {y = y  + nft.tokenURI}
                                        {y = y.substring(25,50)} */}
                  <p class="break-words ">Unique product QR</p>
                  <QRCode
                    size={20}
                    style={{
                      height: "auto",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                    value={`https://warrantify.vercel.app/qr/${nft.cid}`}
                    viewBox={`0 0 20 20`}
                  />
                  {/* <p class="break-words ">Unique product ID : {y}</p> */}
                  {/* <p class='break-words'>{y}</p> */}

                  <p>{x.toFixed(3).toString}</p>
                  {console.log(typeof nft.tokenURI)}

                  <p class="description break-words">
                    Seller: {nft.wallet_address}{" "}
                  </p>

                  {date4 > nft.date1 ? (
                    <p class="description break-words">
                      Owner: 0x0000000000000000000000000000000000000000{" "}
                    </p>
                  ) : (
                    <p class="description break-words">Owner: {nft.owner} </p>
                  )}
                  <div class="tokenInfo">
                    <div class="price">
                      <ins>◘</ins>
                      <p>{nft.price} ETH</p>
                    </div>
                    <div class="duration">
                      <p>
                        <ins>◷</ins>
                      </p>

                      {
                        date4 > nft.date1
                          ? (x = 0)
                          : (x = Math.abs(date4 - nft.date1) / 60000)

                        // x = Math.abs(date4-nft.date1)/60000
                      }

                      {/* <p>{nft.expiry}</p> */}
                      <br />
                      {console.log(Number(nft.expiry))}
                      {/* <Countdown count={nft.expiry} /> */}

                      {/* <Countdown className='font-bold' date={Date.now() + Number(nft.expiry)*1000} /> */}
                    </div>
                  </div>
                  {date4 > nft.date1 ? (
                    <div className="text-red-500 mx-auto py-2 font-bold">
                      Warranty card Expired
                    </div>
                  ) : (
                    <p className="text-green-400 break-words mx-auto py-2 font-bold">
                      Warranty card Valid
                    </p>
                  )}

                  {/* {date4 > nft.date1 ? (
                                        <div className="text-red-500 mx-auto py-2 font-bold">Resell Invalid</div>
                                        ) : (<p className='text-green-400 break-words mx-auto py-2 font-bold'>Resell Invalid</p>)} */}

                  {/* {date4 > nft.date1 ? (
                                        <div className="text-red-500 mx-auto py-2 font-bold">Return Invalid</div>
                                        ) : (<p className='text-green-400 break-words mx-auto py-2 font-bold'>Return Valid</p>)} */}

                  {/* <p>bought: {nft.date1}</p>
                                                <p>expiry: {nft.date2}</p>
                                                <p>now: {date4}</p> */}
                  <hr />

                  <div className="flex ">
                    <button
                      type="button"
                      className="p-1 border rounded border-black-1 m-auto"
                      onClick={
                        () =>
                          // console.log("hi")
                          // date4 > nft.date1 ? ({handleReturn}) : ({handleReturn1})
                          date4 > nft.date1
                            ? toast(
                                "Your warranty has already expired,can't proceed"
                              )
                            : (window.location.href = "/repair")

                        //     <Router>
                        //     <Switch>
                        //     <Redirect from='/usersnfts' to='/landingPage'/>
                        //     <Route path='/landingPage'>
                        //       <Start />
                        //     </Route>
                        //    </Switch>
                        //    </Router>
                        // <Router>
                        // <Switch>
                        //     <Route path="/" element={<Start />} />
                        // </Switch>
                        // </Router>
                      }
                    >
                      Return Request
                    </button>
                    <button
                      type="button"
                      className="p-1 border rounded border-black-1 m-auto"
                      onClick={() =>
                        // console.log("hi")
                        // date4 > nft.date1 ? ({handleReturn}) : ({handleReturn1})
                        date4 > nft.date1
                          ? toast(
                              "Your warranty has already expired,can't proceed"
                            )
                          : (window.location.href = "/resale")
                      }
                    >
                      Resell Request
                    </button>
                    {/* {openModal && <Link to="/landingPage" replace={true}></Link>} */}
                  </div>

                  <div className="flex">
                    <form onSubmit={sendEmail}>
                      <input
                        placeholder="Enter your email"
                        required={true}
                        className="m-2 border text-black rounded p-1 w-100 "
                        name="email"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            price: e.target.value,
                          })
                        }
                      />

                      <button
                        // onClick={toast("Email Sent Successfully")}
                        onClick={() => toast("Email Sent Successfully")}
                        className="p-1 border rounded border-black-1 m-auto"
                      >
                        Send
                      </button>
                    </form>
                  </div>

                  {/* <div className="flex ">
                                            <button type="button" className="p-1 border rounded border-black-1 m-auto" >Return Request</button>
                                            <button type="button" className="p-1 border rounded border-black-1 m-auto" >Resell Request</button>
                                        </div> */}

                  {/* {date4 > nft.date1 ? ({
                                            
                                        }) : ({

                                        })} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
