import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Buffer } from 'buffer'; 
window.Buffer = Buffer;
// import makeRequest from "./videoCrop";

const projectId = '2DUSiZ1uyhnsaYScq8viuDHP5KU'
const projectSecret = '40e47177e103027c757624ec5d37fdc2'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

 const client = ipfsClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth
    }
  })


import { marketplaceAddress } from "../blockchain/config";

import NFTMarketplace from "../blockchain/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function NFTMarketplaceMint() {
	const [fileUrl, setFileUrl] = useState(null);
	const [formInput, updateFormInput] = useState({
		price: "",
		name: "",
		description: "",
		wallet_address: "",
		expiry: "",
	});
	const [date1, setDate1] = useState(0);
	const [date2, setDate2] = useState(0);
	const [nfttype, setNfttype] = useState(0);

	async function onChange(e) {
		const file = e.target.files[0];
		try {
			const added = await client.add(file, {
				progress: (prog) => console.log(`received: ${prog}`),
			});
			const url = `https://kryptifi.infura-ipfs.io/ipfs/${added.path}`;
			setFileUrl(url);
		} catch (error) {
			console.log("Error uploading file: ", error);
		}
	}
	async function uploadToIPFS() {
		const { name, description, price, expiry } = formInput;
		if (!name || !description || !price || !fileUrl) return;
		/* first, upload to IPFS */
		console.log("date1" + date1);
		console.log("date2" + date2);
		const data = JSON.stringify({
			name,
			description,
			image: fileUrl,
			wallet_address: localStorage.getItem("wallet_address"),
			type: nfttype,
			expiry,
			date1,
			date2
		});
		try {
			const added = await client.add(data);
			const url = `https://kryptifi.infura-ipfs.io/ipfs/${added.path}`;
			/* after file is uploaded to IPFS, return the URL to use it in the transaction */
			return url;
		} catch (error) {
			console.log("Error uploading file: ", error);
		}
	}

	async function listNFTForSale () {
		const t1 = new Date();
		console.log("t1 get time " + t1.getTime());
		const str1 = new Date(t1.getTime());
		console.log(str1.toString());
		const t2 = new Date();
		console.log("t1 get string " + t2.getTime());
		const str2 = new Date(t2.getTime() + (1000 * 60 * formInput.expiry));
		await setDate1(str2.getTime());
		console.log("t2 get time " +str2.getTime());
		console.log("t2 get string " +str2.toString());
		
		await setDate2(str2.toString());
		console.log("date1" + date1);
		console.log("date2" + date2);

		const url = await uploadToIPFS();
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		/* next, create the item */
		const price = ethers.utils.parseUnits(formInput.price, "ether");
		let contract = new ethers.Contract(
			marketplaceAddress,
			NFTMarketplace.abi,
			signer
		);
		let listingPrice = await contract.getListingPrice();
		
		listingPrice = listingPrice.toString();
		let transaction = await contract.createToken(url, price, {
			value: listingPrice,
		});
		toast("Product uploaded successfully");
		await transaction.wait();
		// await endcall.wait();
		
		console.log("Transaction complete!");
	}

	return (
		<>
			<AdminNav />


			<div className="flex justify-center">
				<div className="w-1/2 flex flex-col pb-12 text-black">

				<h1 className="mt-10 font-bold leading-normal text-white">List your product with just as little as 0.025 eth</h1>

					<input
						placeholder="Product Name"
						className="mt-8 border rounded p-4"
						onChange={(e) =>
							updateFormInput({ ...formInput, name: e.target.value })
						}
					/>
					<textarea
						placeholder="Product Description"
						className="mt-2 border rounded p-4"
						onChange={(e) =>
							updateFormInput({ ...formInput, description: e.target.value })
						}
					/>
					<input
						placeholder="Product Price in Eth"
						className="mt-2 border rounded p-4"
						onChange={(e) =>
							updateFormInput({ ...formInput, price: e.target.value })
						}
					/>
					<input
						placeholder="Product expiry"
						className="mt-2 border rounded p-4"
						onChange={(e) =>
							updateFormInput({ ...formInput, expiry: e.target.value })
						}
					/>
					{/* <input
						placeholder="Product Warranty period"
						className="mt-2 border rounded p-4"
						onChange={(e) =>
							updateFormInput({ ...formInput, price: e.target.value })
						}
					/> */}


					<div>
						<div className="flex mt-4 ">
							<button
								name="nfttype"
								value="1"
								onClick={(e) => setNfttype(e.target.value)}
								className="bg-gray-800 p-2 mr-4 text-white focus:outline-none focus:ring focus:ring-green-500"
							>
								Product Video (optional)
							</button>
							<button
								name="nfttype"
								value="2"
								onClick={(e) => setNfttype(e.target.value)}
								className="bg-gray-800 p-2 text-white focus:outline-none focus:ring focus:ring-green-500"
							>
								Highlights from the video
							</button>
						</div>
					</div>

					<h1 className="mt-4 font-bold leading-normal text-white">Upload product image</h1>

					<input 
						type="file"
						name="Asset"
						className="my-4 text-white"
						onChange={onChange}
					/>
					<h1 className="mt-4 font-bold leading-normal text-white">Upload product QR</h1>

					<input 
						type="file"
						name="Asset2"
						className="my-4 text-white"
					/>
					{fileUrl &&
						(nfttype == 1 ? (
							<video src={fileUrl} controls />
						) : nfttype == 0 ? (
							<img src={fileUrl} />
						) : (
                            
							<video
								src="https://ipfs.infura.io/ipfs/QmfU34c2rffvLax4iGEUbvYbBY9fgJ6sugnQTAtuy2sjUS"
								controls
							/>
						))}
					<button
						onClick={listNFTForSale}
						className="font-bold mt-4 bg-gray-800 text-white rounded p-4 shadow-lg"
					>
						Upload product
					</button>
				</div>
			</div>
			<ToastContainer/>
		</>
	);
}
