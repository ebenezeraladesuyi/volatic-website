/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// import dan from "../../assets/images/Daniel.png";

interface iTestiCard {
    quote: string;
    image: any;
    name : string;
    title: string;
}

const TestiCard:React.FC<iTestiCard> = ({quote, image, name, title}) => {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-3 transition-all duration-300 ease-in-out mt-[20px]">

        <div className="md:w-[27% flex flex-col gap- md:items-center">
            <img className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] lg:w-[150px] lg:h-[150px] rounded-full border-[2px]" src={image} alt="" />
            <h6 className="font-bold text-[18px] md:text-[21px]">
                {/* Olofinte Joseph */}
                {name}
            </h6>
            <h6 className="font-bold md:text-[17px] text-blue-300">
                {/* Software Engineer */}
                {title}
            </h6>
        </div>

        <div className="border-[2px] border-blue-300 rounded-md p-3 text-[13px] md:text-[16px] md:w-[67%] lg:w-[72%]">
            <h4><span className="font-bold text-[17px] md:text-[22px]">"</span>
             {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae consequuntur neque eos, commodi quis repellat culpa, adipisci aliquid corporis consectetur deleniti perspiciatis minima provident tempore earum et dolorem accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae consequuntur neque eos, commodi quis repellat culpa. */}
             {quote}
             <span className="text-[17px] md:text-[22px] font-bold">"</span></h4>
        </div>
    </div>
  )
}

export default TestiCard