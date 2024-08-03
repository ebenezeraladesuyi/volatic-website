import React from "react";
import forexImg from "../../assets/forex/vol-forex.png";
import { iForex } from "../../types/interface";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { url2 } from "../../utils/Api";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";



const ForexRegister = () => {

    const [formData, setFormData] = React.useState<iForex>({
        fullName: "",
        email: "",
        phoneNumber: "",
    })

    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>()
    const navigate = useNavigate();

    // register Forex
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const forexData = await axios.post(`${url2}/registerforex`, formData)

            console.log("registetion successful", forexData.data)

            // reset formData
            setFormData({
                fullName: "", 
                email: "", 
                phoneNumber: ""
            })
            setError(null)

            if (forexData.data) {
                Swal.fire({
                  title: "Registration Successful",
                  text: "Thank You for registering. We will reach out to you via email or call.",
                  icon: "success",
                });
                navigate("/");
              }
        } catch (error) {
            console.error("Error with registration. Please, try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }
    
    return (
        <div className="w-full min-h-screen bg-[#150E28] flex justify-center items-center pt-[100px] md:pt-[70px] pb-[30px]">
            <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0">
                <div className="w-full md:w-[50%]">
                    <img className="w-full" src={forexImg} alt="" />
                </div>

                <div className="w-full md:w-[48%] lg:w-[40%]">
                    <form onSubmit={handleSubmit} className="w-full border-white border-[1px] p-4 rounded-md text-white flex flex-col gap-6" action="">
                        <span className="font-bold text-center ">Enter Details</span>

                        <input type="text"  placeholder="FullName" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px]" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        />

                        <input type="email"  placeholder="Email" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px]"  
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />

                        <input type="text"  placeholder="Phone Number" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px]"  
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        />

                        { loading? (
                            <div className="">
                                <DatasIsaLoading />
                            </div>
                         ) : (
                            <button type="submit" className="w-full text-[#150E28] hover:text-white hover:bg-transparent hover:border-white hover:border-[1px]  transition-all duration-300 ease-in-out font-bold">Register</button>
                        )}

                        {error && <p className="text-[7px]">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForexRegister;