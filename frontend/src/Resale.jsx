import React from 'react'
import {Link} from "react-router-dom"
export default function Resale() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-1/2 flex flex-col pb-12 items-center text-black">
                    <h1 className="mt-10 font-bold text-3xl leading-normal text-white">Transfer Ownership</h1>
                    <br></br>

                    <input
						placeholder="Enter wallet address to transfer"
                        
						className="mt-2 border rounded p-2 w-full "
                        name='email'
						onChange={(e) =>
							updateFormInput({ ...formInput, price: e.target.value })
						}
					/>
                    <div className='flex items-center'>
                    <button
						onClick={() => setShowModal(true)}
						className="font-bold mt-10 bg-gray-800 text-white rounded p-4 pt-4 shadow-lg"
					>
						Submit
                        {/* {toast("Your request")} */}
					</button>
                    <button to="/usernfts"
						
						className=" font-bold mt-10 ml-10 bg-gray-800 text-white rounded p-4 pt-4 shadow-lg"
					>
                    <Link to='/usernfts'>Back</Link>
                    </button>
                    </div>
                    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Confirm tranfser!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Do you want to Transfer ?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-green active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                </div>
            </div>
        </div>
    )
}
