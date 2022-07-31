import React from 'react'
import emailjs from "emailjs-com"
// import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from './starting/components/Button';
toast.configure();
export default function sample() {
      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_mqa5k61', 'template_k952v7q', e.target, 'Flc0IW2nj24NX0gAs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
        // const [fileUrl, setFileUrl] = useState(null);
        let [formInput, updateFormInput] = useState({
            reason :"",
            other :"",
            email:"",

        });
        return (
        <div>
            <div className="flex justify-center">
				<div className="w-1/2 flex flex-col pb-12 text-black">

				<h1 className="mt-10 font-bold text-3xl leading-normal text-white">What is the issue with the item?</h1>
                <form onSubmit={sendEmail}>
					<select
                        
						placeholder="Reason for return"
						className="mt-8 border rounded p-4 w-full"
                        name='reason'
						onChange={(e) =>
							updateFormInput({ ...formInput, name: e.target.value })
						}
                        required={true}
					>
                    <option selected={true} value="" disabled={true}>Reason for return</option>
                    <option >Product Damaged</option>
                    <option >Wrong item was sent</option>
                    <option >Item Defective, spoilt,expired</option>
                    <option>Don't want the product anymore</option>
                    <option>Don't like the size/fit of the product</option>
                    </select>
                    <br></br>

					<textarea
						placeholder="Other Reasons "
						className="mt-2 border rounded p-4 w-full"
                        name='oreason'
						onChange={(e) =>
							updateFormInput({ ...formInput, description: e.target.value })
						}
					/>
                    <br></br>
					<input
						placeholder="Enter your email"
                        required={true}
						className="mt-2 border rounded p-4 w-full "
                        name='email'
						onChange={(e) =>
							updateFormInput({ ...formInput, price: e.target.value })
						}
					/>
                    <button
						// onClick={toast("Your return request successfully submitted")}
                        onClick={() => toast("Your return request successfully submitted")}
						className="font-bold mt-4 ml-48 bg-gray-800 text-white rounded p-4 pt-4 shadow-lg"
					>
						Submit
                        {/* {toast("Your request")} */}
					</button>
                    
                    <button to="/usernfts"
						
						className=" font-bold ml-5 mt-4 bg-gray-800 text-white rounded p-4 shadow-lg"
					>
                    <Link to='/usernfts'>Back</Link>
                    {/* Go Back */}
                    </button>
					</form>
                    
                    </div>
                    </div>
        </div>
  )
}
