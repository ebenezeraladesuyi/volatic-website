
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
// import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

const ImageUpload = () => {

    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result || null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.getElementById('fileInput')?.click();
    };

    return (
        <div className="w-full min-h-[50vh] py-[4px] flex justify-center items-center">
            <div className="w-full md:w-[60%] lg:w-[40%] shadow-md min-h-[350px] p-[20px] rounded-md bg-white">
                <h4 className="text-center font-bold mb-[20px] text-[20px]">Register</h4>

                <form action="" className="flex flex-col gap-3">
                    <input type="email" placeholder="Email" className="w-full h-[40px] pl-5 border-[#150E28] rounded-md border-[1px]"/>

                    <input type="password" placeholder="Create Password" className="w-full h-[40px] pl-5 border-[#150E28] rounded-md border-[1px]" />

                    <div className="w-full relative h-[160px]">
                        <input 
                            style={{display:"none"}} 
                            type="file"
                            accept="image/jpeg, image/svg, image/png"
                            onChange={handleFileChange}
                            id="fileInput" 
                        />
                        
                        <img 
                            className="w-[150px] h-[150px] rounded-full border-[2px] border-[#150E28] " 
                                alt="Your Profile Image"
                                src={imageSrc as string}
                        />

                        <button onClick={handleButtonClick} className="absolute left-[120px] bottom-[20px] flex gap-3 items-center text-white bg-[#150E28]" >
                            Upload Profile Image
                            <FaCamera />
                        </button> 
                    </div>

                    <button className="w-full h-[45px] bg-[#150E28] rounded-md text-white">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default ImageUpload;