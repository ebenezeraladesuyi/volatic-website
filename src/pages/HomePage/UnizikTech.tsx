
import { NavLink } from 'react-router-dom';
import unizik from '../../assets/unizik/unizik.jpg';

const UnizikTechHome = () => {

    return (
        <div className="w-full min-h-[40vh] bg-white flex justify-center items-center py-[30px]">
            <div className="w-[90%] flex flex-col md:flex-row md:justify-between md:items-center gap-6" >
                <div className="w-full md:w-[40%]">
                    <img src={unizik} alt="" />
                </div>

                <div className='w-full md:w-[50%] flex flex-col gap-3'>
                    <h1 className='text-[15px] lg:text-[17px] font-bold text-center md:text-lef'>
                        Are you a UNIZIK student or local resident with a passion for technology? <p className='mt-[6px] lg:mt-[10px]' >Curious about the latest advancements in tech.?</p><p className='mt-[6px] lg:mt-[10px]'>Eager to innovate but unsure where to start or how to find the right opportunities?</p>
                    </h1>

                    <h2 className='text-[15px] lg:text-[17px] font-bold text-center md:text-lef'>
                        Then, you would'nt wanna miss..
                    </h2>

                    <h3 className='text-[25px] lg:text-[30px] font-bold text-center md:text-lef border-[1px] border-[#00AFEF] p-2 text-[#00AFEF] rounded-md'>
                        ENTREPRENUERSHIP & INNOVATION FOR UNDERGRADUATE
                    </h3>

                    <h4 className='text-[15px] lg:text-[17px] font-bold text-center md:text-lef'>
                        A Tech. Conference that will be enlightening, educative, informative, thought-evolving and mind-blowing..
                    </h4>

                    <h5 className='text-[15px] lg:text-[17px] font-bold text-center md:text-lef flex flex-col md:flex-row items-center justify-center gap-2'>
                        Wanna be in attendance?
                        <NavLink to="/uniziktechconf"><button className='mt-[10px] animate-bounce bg-[#00AFEF] text-white'>
                            Register Now!
                        </button></NavLink>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default UnizikTechHome;