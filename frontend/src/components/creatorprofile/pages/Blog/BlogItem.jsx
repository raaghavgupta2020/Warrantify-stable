import React from "react";
import '../../../nft_card.css'

const BlogItem = (props) => {
	const { image, title, description, type, price, expiry, date1, date2 } = props.blog;
	return (
		
		<div className="w-full lg:w-1/2 ">
			
			<div className="border-2 my-4 md:mx-4 shadow p-4 rounded-md bg-gradient-to-r from-indigo-200 to-fuchsia-300 group hover:shadow-md">
			{/* <div class="nft"> */}
				<div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden  ">
					{type ? (
						<video
							className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
							controls
							src={image}
						/>
					) : (
						<img
							src={image}
							alt="blogImage"
							class='bg-black tokenImage w-full h-full object-contain object-center '
							// className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
						/>
					)}
				</div>
				<h3>
					<a
						href="#0"
						className="block text-lg font-medium text-black hover:text-purple-600 mb-2"
					>
						{title}
						
					</a>
				</h3>
				
        <p className="text-black" > <b>About Product</b> - {description}</p>
		<br/>
        <div className="flex justify-between" >
			<div class="price">
          <p className="text-black mx-2">Amount <br/>{price} ETH</p>
		  </div>
		  <p className="text-black mr-2 ">Warranty Period <br/> {expiry} minutes </p>
				
          {/* <button className="text-black border-2 rounded-lg pl-2 pr-2 bg-gradient-to-r from-indigo-200 to-fuchsia-300 " onClick={() => props.buyNft(props.blog)}>Buy Product</button> */}
		  <button className="text-black font-bold px-2 -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" onClick={() => props.buyNft(props.blog)}>Buy Product</button>

        </div>
		{/* </div> */}
			</div>
		</div>

		
	);
};

export default BlogItem;
