/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// import img1 from "../../assets/images/2.svg"

interface iPartnersCard {
    imag: any,
}

const PartnersCard:React.FC<iPartnersCard> = ({imag}) => {
  return (
    <div className="w-[80px] h-full flex justify-center items-center mr-[30px] ml-[30px]">
        <img className="w-full" src={imag} alt="" />
    </div>
  )
}

export default PartnersCard