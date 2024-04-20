// import React from 'react'

import classroom from "../../assets/images/classroom.jpg";
import lady from "../../assets/images/lady2.jpg";

const WhyVolatic = () => {
  return (
    <div className="w-full md:h-[100vh flex flex-col justify-center items-center font-mont pb-[30px] relative overflow-hidden gap-5">

        <div className="w-full bg-black h-[50vh] text-white font-bold flex items-center justify-center text-[25px] md:text-[30px] lg:text-[35px] rounded-b-[35px] text-center">
            WHY VOLATIC ACADEMY?
        </div>

        <div className="w-[90%] flex flex-col gap-6 items-center">
            <div className="font-bold text-center text-[21px] md:text-[31px] text-[#00AFEF]">
                "To inspire people, do not show them your superpowers. <br />Show them theirs."
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4 md:justify-between">
                <div className="w-full md:w-[43%]">
                    <img className="w-full" src={classroom} alt="" />
                </div>

                <h5 className="text-justify text-[14px] md:text-[16px] w-full md:w-[50%] lg:text-[20px]">
                    <p className="mb-[10px]">
                        Lots of organization tell you what they can/will do for you, but at <span className="font-bold text-[#00AFEF]">Volatic Academy</span>, we  tell you <span className="font-bold text-[#00AFEF]">what you can do for you, what you can build for you, and what you can earn for you.</span> We join you, to challenge the status quo, to challenge the norm.
                    </p>
                    <p>
                        By leveraging on modern technological software skils, we are loaded and ready to <span className="font-bold text-[#00AFEF]">hold you by the hand, and lead you through your journey towards attaining a global skill,</span> that not just put you on the map as an intrigue in your community, but nationally and globally. 
                    </p>
                </h5>
            </div>

            {/* <hr className="w-[50%] border-[#00AFEF] border-[2px]" /> */}

            <div className="w-full flex flex-col-reverse md:flex-row gap-4 md:justify-between">

                <h5 className="text-justify text-[14px] md:text-[16px] w-full md:w-[50%] lg:text-[20px]">
                    <p className="mb-[10px]">
                        We believe that creating the next big Techie start from a search through the grassroot, mostly at rural areas. We are not creating your solution for you; we are giving you the tools and skills to create your own solution; because <span className="font-bold text-[#00AFEF]">no one understands your challenges, no one has lived through your challenges, no on sees a better solution to these challenges, as much as you.</span> We are creating an atmosphere where "the sons and daughters of nobody can become somebody, without knowing anybody."
                    </p>
                </h5>
                
                <div className="w-full md:w-[43%]">
                    <img className="w-full" src={lady} alt="" />
                </div>
            </div>

            <hr className="w-[50%] border-[#00AFEF] border-[2px] animate-pulse" />

            <div className="w-full flex flex-col md:flex-row gap-4 md:justify-between">

                <h5 className="text-justify text-[14px] md:text-[16px] w-full md:w-[50% lg:text-[20px]">
                    <p className="mb-[10px] text-[20px] font-bold text-center text-[#00AFEF] animate-bounce">
                        Our Instructors
                    </p>

                    <p>
                        Our Instuctors have an average of, at least, three years of active work and coding, in the Tech industry working for Tech organizations, which varies from Fin-Tech, Health-Tech, Game-Tech, Edu-Tech etc; impacting that knowledge into you, to the level of you being able to pass it to the next person, is one of our goals.
                    </p>
                </h5>
                
                {/* <div className="w-full md:w-[43%]">
                    <img className="w-full" src={lady} alt="" />
                </div> */}
            </div>

            <hr className="w-[50%] border-[#00AFEF] border-[2px] animate-pulse" />
        </div>
    </div>
  )
}

export default WhyVolatic;