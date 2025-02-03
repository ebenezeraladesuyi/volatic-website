// import React from 'react'

import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import { NavLink } from "react-router-dom";

const RegSuccess = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-center bg-cover bg-boot-bg font-mont">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-7 pb-[30px]">
            <div className="text-[150px] lg:text-[200px] text-white">
                <IoCheckmarkDoneCircle />
            </div>

            <div className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Thank you for registering for the PROJECT 200. We look forward to having a great learning experience with you. 
                {/* Please, clcik on the button below to join the Whatsapp Community, where classes infprmation will be shared. */}
            </div>

            <hr className="w-[100%] border-[1px] border-white" />

            <h1 className="text-[14px] text-white text-center">Click on a button of your selected skill to join the Telegram Community / Group</h1>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                    <a href="https://t.me/+Q_3WuXZ7sDNlZjA0" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse text-center">
                        Data Analysis
                    </a>

                    {/* <a href="https://t.me/+jMXGC02Gjnk5Zjg0" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse text-center">
                        Graphics Design
                    </a> */}
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                    <a href="https://t.me/+5AkwBFo2wnM1MDE0" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse text-center">
                    Web Development
                    </a>
                    <a href="https://t.me/+Po0MFu8P5KA2Njg0" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse text-center">
                        UI/UX Design
                    </a>
                </div>
            </div>

            {/* <NavLink to="/">
                <button className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">Explore Our Website</button>
            </NavLink> */}
        </div>
    </div>
  )
}

export default RegSuccess