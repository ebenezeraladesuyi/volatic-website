import { NavLink } from "react-router-dom";



const ForexHome = () => {

    return (
        <div className="w-full min-h-[50vh] bg-forex-bg bg-cover bg-center flex justify-center items-center py-[20px] relative">

            <div className="absolute w-full h-full top-0 left-0 bg-[#0000009a]"></div>

            <div className="w-[90%] md:w-[65%] lg:w-[50%] text-white flex flex-col justify-center items-center gap-4 z-20">
                <h2 className="text-[14px] lg:text-[18px] text-center font-bold">
                    Are you a Professional Worker, a Corp Member, a Student or a person who needs another stream of income?
                </h2>

                <h1 className="text-[30px] text-center font-bold border-[1px] border-white p-2">Join Our 8-Weeks Forex Trading Class</h1>

                <h3 className="text-[14px] md:text-[18px] text-center font-bold">
                    As you make money from anywhere you are, and right on your phone. We will teach Forex money management, risk management, trading decisons, signals etc.
                </h3>

                <NavLink to="/forex">
                    <button className="w-[150px] rounded-md h-[43px] bg-white text-[#00AFEF] animate-bounce mt-[20px]">
                        Register Now
                    </button>
                </NavLink>

                <h3 className="text-[18px] text-center font-bold animate-pulse">
                    Classes start 28th August, 2024. <br />(Both Physical and Online Classes) 
                </h3>
            </div>
        </div>
    )
}

export default ForexHome;