

import { NavLink } from "react-router-dom";
import boot from "../../assets/unizik/bootcamp.png";
import { motion } from "framer-motion";


export const Heroboot = () => {

    return (
        <motion.section className="w-full min-h-[100vh] flex items-center justify-center  bg-boot-bg bg-cover bg-center py-[30px] pb-[90px] relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="w-[90%] flex flex-col-reverse md:flex-row items-center  md:justify-between gap-6 mt-[80px]">
                <motion.div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[55%] items-center md:items-start"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 1.0 }}
                >
                    <h5 className='text-[13px] text-center md:text-left tracking-[4px] md:text-[16px] font-bold lg:text-[22px] md:tracking-[7px] text-[#c7c6c6]'>
                    VOLATIC ACADEMY
                    </h5>

                    <div className="text-white text-[30px] leading-8 md:text-[40px] text-center md:text-left font-bold md:leading-10 lg:leading-[60px]">
                        UNLOCK YOUR TECH FUTURE AT OUR 4-WEEKS BOOTCAMP
                    </div>

                    <div className="text-[#c7c6c6] text-center md:text-left text-[13px] md:text-[16px] lg:text-[18px] w-[80%]">
                        Don’t wait! Take the first step towards a rewarding tech career. Join our community of developers, designers, and innovators.
                    </div>

                    <NavLink to='/bootcamp'>
                        <button className="bg-[#00AFEF] text-white hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out mt-[10px] animate-pulse">Apply Now</button>
                    </NavLink>
                </motion.div>

                <div className="w-full md:w-[50%] lg:w-[40%]">
                    <motion.img src={boot} 
                        className="w-full" 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, delay: 1.5 }}
                    />
                </div>
            </div>

            

            
            <div className="w-full absolute  bottom-[10px]">
                <motion.div className='absolute md:hidde bottom-[40px] left-[10%] lg:left-[5%] flex gap-3'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="w-[20px] h-[20px] bg-white rounded-md animate-spin"></div>
                    <span className='w-[20px] h-[20px bg-white rounded-md animate-spin'></span>
                    <span className='h-[21px] animate-spin w-[21px] bg-[#00AFEF]'></span>
                    {/* <span className='w-[20px] h-[20px] animate-spin'></span> */}
                </motion.div>

                <motion.div className='absolute md:hidde bottom-[40px] lg:top-[90px lg:left-[10%  right-[10%] lg:right-[5%]  flex gap-3 transform -translate-y-full'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <span className='h-[21px] animate-spin w-[21px] bg-[#00AFEF]'></span>
                    <span className='w-[20px] h-[20px] bg-white rounded-md animate-spin'></span>
                    <span className="w-[20px] h-[20px] bg-white rounded-md animate-spin"></span>
                </motion.div>
            </div>
        </motion.section>
    )
}