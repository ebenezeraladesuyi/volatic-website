// import React from 'react'

import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden bg-mobile-bg md:bg-hero-bg md:bg-center bg-cover flex justify-center items-center">

        <div className="md:hidden absolute bg-black w-full h-full opacity-50"></div>

        <div className="w-[90%] flex flex-col justify-center items-center md:items-start text-white relative z-30">
  
            <h5 className='text-[13px] text-center md:text-left tracking-[3px] md:text-[16px] font-bold lg:text-[22px] md:tracking-[7px]'>
                VOLATIC ACADEMY
            </h5>

            <h3 className="text-white text-center md:text-left text-[37px] md:text-[45px] font-bold lg:text-[70px] mt-[20px] leading-6 md:leading-9 lg:mt-[30px] h-[50%">
                <span className='text-[#00AFEF]'>
                    <Typewriter
                        options={{ loop: true }}
                        onInit={(typewriter) => {
                        typewriter

                            .typeString("RE-IGNITING")
                            .pauseFor(1500)
                            .deleteAll()

                            .typeString("RE-INVENTING")
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                        }}
                    />
                </span>
                <br />YOURSELF..
            </h3>

            <h4 className='text-[12px] md:text-[14px] w-[90%] md:w-[50%] lg:w-[35%] text-center md:text-left mt-[30px] lg:mt-[40px] '>
                Launch your Tech journey with Volatic Academy where innovation meets education.
            </h4>

            <button className="w-[160px] mt-[20px] bg-[#00AFEF]  hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out" >
                Apply Now
            </button>

        </div>

        <div className='absolute md:hidde bottom-[40px] left-[10%] lg:left-[5%] flex gap-3'>
            <div className="w-[20px] h-[20px] bg-white rounded-md animate-spin"></div>
            <span className='w-[20px] h-[20px bg-white rounded-md animate-spin'></span>
            <span className='h-[21px] animate-spin w-[21px] bg-[#00AFEF]'></span>
            {/* <span className='w-[20px] h-[20px] animate-spin'></span> */}
        </div>

        <div className='absolute md:hidde bottom-[40px] lg:top-[90px lg:left-[10%  right-[10%] lg:right-[5%]  flex gap-3'>
            <span className='h-[21px] animate-spin w-[21px] bg-[#00AFEF]'></span>
            <span className='w-[20px] h-[20px] bg-white rounded-md animate-spin'></span>
            <span className="w-[20px] h-[20px] bg-white rounded-md animate-spin"></span>
        </div>
    </div>
  )
}

export default Hero