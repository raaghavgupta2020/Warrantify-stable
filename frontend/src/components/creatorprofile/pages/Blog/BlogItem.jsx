import React from "react";
import '../../../nft_card.css'

const BlogItem = (props) => {
	const { image, title, description, type, price, expiry } = props.blog;
	return (
		
		<div className="w-full lg:w-1/2">
			
			<div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
			{/* <div class="nft"> */}
				<div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
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
							class='tokenImage h-full'
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
				
        <p className="text-black" >{description}</p>
		<br/>
        <div className="flex justify-between" >
			<div class="price">
          <p className="text-black">Amount {price} ETH</p>
		  </div>
		  <p className="text-black">Warranty Period : {expiry} seconds</p>
          <button className="text-black border-2 rounded-lg pl-2 pr-2 " onClick={() => props.buyNft(props.blog)}>Buy Product</button>
        </div>
		{/* </div> */}
			</div>
		</div>

		
	);
};

export default BlogItem;
