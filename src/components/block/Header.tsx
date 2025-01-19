import { useState } from 'react'
import logo from "../../assets/images/vol.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// import { Link } from "react-scroll";

const Header = () => {

    const [dropdown, setDropdown] = useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className="w-full h-[70px] flex justify-center items-center shadow-m font-pop fixed z-40 bg-transparent text-white">
        <div className="w-[90%] h-full flex justify-between items-center ">

            <NavLink to="/">
                <img className="w-[40px] md:w-[50px] relative z-40" src={logo} alt="volatic-logo" />
            </NavLink>

            <div className=''>
                <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out">
                    <div className='lg:bg-black lg:bg-opacity-40 rounded-[30px] lg:shadow-md p-3 px-4 flex gap-5 '>
                        <NavLink to="/">
                            <ol className='text-white hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                        </NavLink>

                        <NavLink to='/courses'>
                            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Courses</ol>
                        </NavLink>

                        <NavLink to='/whyvolatic'>
                            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Why Volatic</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="testimonies"> */}
                            {/* <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Hire Our Talent</ol> */}
                        {/* </Link> */}

                        <NavLink to='/contact'>
                            <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                        </NavLink>
                    </div>

                    {/* <NavLink to="/register"> */}
                    <NavLink to="/project200">
                        <button className=' px-4 py-2 bg-[#00AFEF] border-none hover:bg-[#50519f] text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out ' >
                            Register For Project 200
                        </button>
                    </NavLink>
                </li>

                

            { dropdown ?
                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#00AFEF]  relative z-50 p-1 rounded-md bg-white" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-[#00AFEF]  shadow-md bg-white p-1 rounded-md ml-[6px] relative z-50" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>

        </div>

        {/* {
            dropdown ? */}

            <div className={` ${dropdown ? 'transform translate-x-0' : 'transform -translate-y-full'} lg:hidden w-full h-[100vh] absolute bg-[#00AFEF] backdrop-blur-m top-0 transition-all ease-in-out z-30 duration-300`} onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col items-start justify-start pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute ">
                {/* <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out"> */}
                    <NavLink to="/">
                        <ol className='text-white hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Home</ol>
                    </NavLink>

                    <NavLink to='/courses'>
                        <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Courses</ol>
                    </NavLink>

                    <NavLink to='/whyvolatic'>
                        <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Why Volatic</ol>
                    </NavLink>

                    {/* <Link offset={-100} smooth={true} duration={500} to="testimonies"> */}
                        {/* <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Hire Our Talent</ol> */}
                    {/* </Link> */}
                    
                    <NavLink to='/contact'>
                        <ol className='text-white  hover:text-[#80c41c] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                    </NavLink>

                    {/* <NavLink to="/register"> */}
                    <NavLink to="/project200">
                        <button className=' w-[120px px-3 py-3 bg-white border-none hover:text-[#3d82b3] text-[#00AFEF] font-semibold animate-puls rounded-[60px] transition-all duration-300 ease-in-out hover:px-5 hover:py-4'>
                            Register For Project 200
                        </button>
                    </NavLink>
                {/* </li> */}
                </div>
            </div>

            {/* :
                null
        } */}
    </div>
  )
}

export default Header;

// #80c41c
// #3d82b3