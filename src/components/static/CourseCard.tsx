/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface iCourseCard {
    img : any,
    title : string,
    details : string,
}

// import img  from "../../assets/images/ui-ux.png";

const CourseCard:React.FC<iCourseCard> = ({img, title, details}) => {
  return (
    <div className="w-full h-[350px md:w-[47%] lg:w-[32%] p-5 flex flex-col gap-4 justify-between bg-white shadow-md rounded-lg">
        <div className="w-full">
            <img className="full" src={img} alt="" />
        </div>

        <h6 className="text-center font-bold text-[#50519f]">
            {/* UI/UX DESIGN */}
            {title}
        </h6>

        <hr className="w-full border-[1px] border-[#00AFEF]" />

        <h6 className="text-justify text-[13px]">
            {/* A process of creating User Interfaces (UI) and enhancing the overall User Experience (UX) when interacting with a product or system. It involves the thoughtful design of visual elements, interactions, and user flows to ensure a seamless, intuitive, and enjoyable experience for the end user. UI design focuses on the look and feel of the interface, including elements such as layout, colors, typography, and imagery. UX design, on the other hand, is concerned with the overall user journey, ensuring that users can easily accomplish their tasks and derive satisfaction from the product. */}
            {details}
        </h6>

        <hr className="w-full border-[1px] border-[#00AFEF]"  />
    </div>
  )
}

export default CourseCard