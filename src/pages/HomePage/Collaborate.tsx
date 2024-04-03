// import React from 'react'

import img from "../../assets/images/collaborate.png"

const Collaborate = () => {
  return (
    <div className="w-full h-[] py-[40px] overflow-hidden flex justify-center items-center bg-black">
        <div className="w-[90%] flex flex-col md:flex-row md:justify-between md:items-center lg:items-start gap-5">
            <div className="w-full md:w-[55%] md:w-[60%">
                <img className="w-full" src={img} alt="" />
            </div>

            <div className="flex flex-col gap-3 text-white w-full md:w-[40%]">
                <h4 className="text-[20px] lg:text-[27px] font-bold text-center md:text-left">COLLABORATE WITH US..</h4>

                <h6 className="text-[13px] lg:text-[16px] text-justify">
                    We are committed to helping many young Nigerians, especially those with limited resources and lower income communities, kick start a career in Technology by providing them with access to quality technical education that makes them equipped with global talents and re-inventing themselves towards a bigger and better tomorrow, making them useful to themselves, their families and the society at large. <br /><span className="mt-[10px] font-bold">Are you Interested in inspiring the next generation of top Software Engineers? </span> 
                </h6>

                <button className="p-3 bg-[#00AFEF] text-white hover:bg-[#50519f] border-none lg:mt-[20px]">
                    Support Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Collaborate