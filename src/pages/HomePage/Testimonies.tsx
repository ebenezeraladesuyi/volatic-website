// import React from 'react'

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestiCard from "../../components/static/TestiCard";
// import { FaUser } from "react-icons/fa6";
import TestiCard2 from "../../components/static/TestiCard2";
// import RevealOnScroll from "../../components/static/onScroll/RevealOnScroll";
// import SlideInComponent from "../../components/static/onScroll/SlideIn";
import stu1 from "../../assets/students/Joe-Vol.png";
import stu2 from "../../assets/students/Sunday-Vol.png";
import stu3 from "../../assets/students/micheal-Vol.png";
import stu4 from "../../assets/images/vol.png";

const Testimonies = () => {

    // const settings = {
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     dots: false,
    //     infinite: true,
    //     speed: 700,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     rtl: true,
    //     // responsive: [
    //     //     {
    //     //         breakpoint: 1000,
    //     //         settings: {
    //     //             slidesToShow: 3,
    //     //             slidesToScroll: 1,
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 770,
    //     //         settings: {
    //     //             slidesToShow: 2,
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 600,
    //     //         settings: {
    //     //             slidestoShow: 1,
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 475,
    //     //         settings: {
    //     //             slidesToShow: 1,
    //     //         }
    //     //     }
    //     // ]
    // }


  return (
    // <SlideInComponent>
      <div id="testimonies" className="w-full h-[70vh p-[30px] bg-[#f9f6f6]  text-whit flex flex-col gap-4 justify-center bg-opac items-center">

          {/* <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">TESTIMONIES</h5> */}

          <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left font-bold mb-[10px] text-center animate-pulse">What Our Students Say About Us..</h3>

          {/* <div className="text-[60px] border-[2px] border-white rounded-full p-3 mt-[20px]">
            <FaUser />
          </div> */}

          {/* <Slider {...settings} className="w-[95%] px-10 mt-[10px]" >

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center flex flex-col justify-center">
                <div className=" border-[2px] border-white rounded-full p- mt-[20px] w-[80px] h-[80px] overflow-hidden">
                  <img className="w-full " src={dan} alt="" />
                </div>
                "Remarkable experience! Their IT solutions streamlined our operations, the graphics design team brought our vision to life with creativity, and the printing service delivered exceptional quality on time. Highly recommended!" <br /><span className="font-bold mt-[30px]">- JUDITH MICHEAL</span>
              </h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center">"The graphics design team delivered captivating visuals that elevate our brand, and the printing service provided impeccable quality. A reliable partner for our business growth!" <br /><span className="font-bold mt-[30px]">- LORI TEACH</span></h2>

              <h2 className="text-[13px] md:text-[16px] lg:text-[20px] text-center w-[90%] md:w-[70%] lg:w-[60%]">"Incredible! Their IT solutions revolutionized our workflow, the graphics design team captured our brand essence perfectly, and the printing quality surpassed expectations. A one-stop solution for all our needs!" <br /><span className="font-bold mt-[30px]">- BEN GRIMMER</span></h2>

          </Slider> */}

          <div className="w-[90%]">

            <TestiCard 
                image={stu1}
                name="Olofinte Joseph"
                title="Software Engineer"
                quote="I am so glad a discovered Volatic Academy when starting my journey nto Software Engineering. For real, no other place compares. The environment fosters growth and the instructors are kind, taking their time to expalain complex concepts. Thank you Volatic Academy for this amazing opportunity. you guys rock!"
            />

            <TestiCard2 
                image={stu2}
                name="Sunday Osatehinse"
                title="Software Engineer"
                quote="Volatic Academy is one of the best institute to learn Software Engineering in Nigeria. Instructors are very supportive and friendly. I got to learn many things regarding coding. Thank you for building my career."
            />

            <TestiCard 
                image={stu3}
                name="Michael Makanjuola"
                title="Software Engineer"
                quote="Volatic Academy is an academy set upon the hill, a centre of excellence, which has so far, remained the best software teaching Academy. I've learnt to explore my abilities and how to apply knowlegde and coding into real life situations. The Academy will produce more notable Engineers who will global"
            />

            <TestiCard2 
                image={stu4}
                name="Princewill Ibekwe"
                title="Product Designer"
                quote="I've always had passion for design, but I did't quite fit in or understand in places I have been to. At Volatic Academy, I fit in quite well. The classes are explain to the bearest minimum of understanding. The Instructors give personl attention to individuals. The encouragement and inspiration talks is top notch. You need to be here, if you want a career in Tech."
            />

          </div>
          
      </div>
    // </SlideInComponent>
  )
}

export default Testimonies