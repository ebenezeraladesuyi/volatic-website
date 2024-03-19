// import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Vision = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }

  return (
    <div className="w-full py-[40px] overflow-hidden flex justify-center items-center">
        <div className="w-[80%]">

            <Slider {...settings} className="w-full">

                <div className="flex flex-col gap-5 ">
                    <h4 className="text-[17px] font-bold md:text-[20px] lg:text-[25px] text-[#00AFEF] animate-bounce text-center mb-[15px]">OUR VISION</h4>

                    <div className="flex flex-col gap-4 text-[13px] md:text-[15px] lg:text-[17px] text-center">
                        <h5 className="font-bold">
                            Empowering Youths Through Free Access to Technology Education
                        </h5>

                        <h6>
                            In less technological-oriented areas where access to quality education and technology is limited, our vision is to break down barriers and provide every young person with the opportunity to thrive in the digital age. We envision a future where rural youth are equipped with the skills, knowledge, and confidence to pursue rewarding careers in technology, regardless of their background or financial means.
                        </h6>

                        <h6>
                            By offering free and accessible technology education programs, we aim to empower rural youth to unleash their full potential and become catalysts for positive change in their communities. Our vision is to create a supportive and inclusive learning environment where every student is inspired to dream big and pursue their passions in the ever-evolving field of technology.
                        </h6>

                        <h6>
                            Through our commitment to equity and inclusion, we aspire to bridge the digital divide and ensure that no rural youth is left behind in the digital revolution. By nurturing talent, fostering innovation, and cultivating a culture of lifelong learning, we believe that rural communities can thrive and prosper in the digital economy of the future.
                        </h6>
                    </div>
                </div>

                <div>
                    <h4 className="text-[17px] font-bold md:text-[20px] lg:text-[25px] text-[#00AFEF] animate-bounce text-center mb-[15px]">MISSION STATEMENT</h4>

                    <h6 className="flex flex-col gap-4 text-[13px] md:text-[15px] lg:text-[17px] text-center">
                        Our mission is to bridge the digital divide by providing world-class technology education and resources to rural youth. Through hands-on training, mentorship, and access to cutting-edge tools, we aim to equip our students with the skills and confidence they need to succeed in the digital economy. By nurturing talent and fostering innovation in rural communities, we strive to create a future where every young person has the opportunity to thrive and contribute to the advancement of society.
                    </h6>

                </div>

            </Slider>

        </div>
    </div>
  )
}

export default Vision