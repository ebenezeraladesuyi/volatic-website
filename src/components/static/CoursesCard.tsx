/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// import react from "../../assets/frontend/html.png"

interface iCoursesCard {
    img : any,
    title : string,
    details : string
}

const CoursesCard:React.FC<iCoursesCard> = ({img, title, details}) => {
  return (
    <div className="p-3 rounded-md shadow-md w-[275px] flex justify-b gap-3">
        <div className="w-[37%] mt-[15px]">
            <img className="w-full" src={img} alt="" />
        </div>

        {/* <hr className="border-[2px] border-[#50519f] w-[35%] mt-[10px]" /> */}

        <div className="p-4 flex flex-col gap-3 w-[60%]">
            <h4 className="font-bold text-[#50519f] text-[14px]">
                {/* REACT */}
                {title}
            </h4>

            <hr className="border-[2px] border-[#50519f] w-[35%]" />

            <h5 className="text-[#00AFEF] text-[11px] text-justify">
                {/* React.js is a JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering. It simplifies the process of creating interactive web applications. */}
                {details}
            </h5>
        </div>
    </div>
  )
}

export default CoursesCard