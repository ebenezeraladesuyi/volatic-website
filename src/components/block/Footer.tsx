// import React from 'react'

import logo from "../../assets/images/vola2.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-[60vh pt-[30px] bg- flex flex-col justify-center items-center font-pop shadow-md  bg-white">
      <div className="w-[90%] flex flex-col md:flex-row gap-8 mb-[25px] md:mb-">

        <div className="flex flex-col gap-5 w-full md:w-[40%] ">
          <div className="w-[130px]">
            <img className="w-full" src={logo} alt="" />
          </div>

          <h6 className="text-[12px] md:text-[15px] text-justify text-[#50519f]">
            Volatic Academy. We are a supportive and inclusive Academy, where every student is inspired to dream big, while challenging them and the status quo, equipping them with business skill, technology skills, leadership skills and life skills.
          </h6>

          <h5 className="text-[12px] lg:text-[14px] text-cente mb-[20px] flex flex-col text-[#50519f]">
            <span className="text-[#80c41c]">Address:</span>3, Nova Road 3, Adebayo, Ado-Ekiti, Ekiti State  <span className="text-[#80c41c]">Phone:</span> +234 (0) 703 675 0857 || +234 (0) 814 890 5370 <span className="text-[#80c41c]">Email:</span> volaticacademy@gmail.com
          </h5>

          <div className="flex gap-3 items-center">
            <a href="https://facebook.com/volaticacademy" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF] border-[#00AFEF] rounded-full">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/volatic24" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF] border-[#00AFEF] rounded-full">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/volaticacademy" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF] border-[#00AFEF] rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="https://volaticacademy@gmail.com" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center text-[#00AFEF] border-[#00AFEF] rounded-full">
              <MdAttachEmail />
            </a>
          </div>
        </div>

        <div className="flex flex-col font-semibold gap-3 text-[13px] md:text-[15px] text-[#50519f] md:ml-[30px]">
          <h6 className="cursor-pointr mb-[20px] text-[16px] md:text-[18px] font-bold md:mt-[20px]">Services</h6>
          <h6 className="cursor-pointr">Product Design</h6>
          <h6 className="cursor-pointe">Product Engineering</h6>
          <h6 className="cursor-pointr">Product Strategy</h6>
          <h6 className="cursor-pointr">Creative Design</h6>
          <h6 className="cursor-pointr">Digital Marketing</h6>
          <h6 className="cursor-pointr">Data Analysis</h6>
          <h6 className="cursor-pointr">Forex Trading</h6>
          <h6 className="cursor-poiner">Professional Training</h6>
        </div>

      </div>

      <div className="bg-[#00AFEF] py-5 w-full flex items-center justify-center">
        <h5 className="text-[12px] md:text-[15px] text-white mt-[30px w-[90%] text-center md:text-left">
          Copyright &#169; 2024 Volatic Academy
        </h5>
      </div>
    </div>
  )
}

export default Footer