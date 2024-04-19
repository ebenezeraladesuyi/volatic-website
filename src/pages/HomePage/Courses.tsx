// import React from 'react'

import CourseCard from "../../components/static/CourseCard"
import img from "../../assets/images/ui-ux.png";
import img1 from "../../assets/images/frontend.png";
import img2 from "../../assets/images/backend.png";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <div className="w-full h-[] py-[40px] overflow-hidden flex flex-col justify-center items-center bg-[#f9f6f6] gap-6">
        <div className="w-[90%] relative flex flex-col flex-wrap lg:flex-row md:justify-between  gap-4 items-center justify-center">
            <CourseCard 
                img={img}
                title="PRODUCT DESIGN"
                details="A process of creating User Interfaces (UI) and enhancing the overall User Experience (UX) when interacting with a product or system. It involves the thoughtful design of visual elements, interactions, and user flows to ensure a seamless, intuitive, and enjoyable experience for the end user. UI design focuses on the look and feel of the interface, including elements such as layout, colors, typography, and imagery. UX design, on the other hand, is concerned with the overall user journey, ensuring that users can easily accomplish their tasks and derive satisfaction from the product."
            />

            <CourseCard 
                img={img1}
                title="FRONTEND ENGINEERING"
                details="Frontend Engineering involves the development of the user interface and user experience of a software application. Frontend engineers work on the client side, creating the visual elements and interactions that users see and interact with directly. They use technologies such as HTML, CSS, and JavaScript to build responsive and interactive interfaces, ensuring a positive user experience."
            />

            <CourseCard 
                img={img2}
                title="BACKEND ENGINEERING"
                details="Backend Engineering, focuses on the server-side development of an application. Backend engineers design and build the server, database, and application logic that enable the frontend to function. They work with server-side programming languages (e.g., Python, Java, Node.js), databases (e.g., MySQL, MongoDB), and server frameworks to handle data processing, storage, and business logic. Backend engineering ensures that the application's frontend has the necessary data and functionality to operate seamlessly.

                "
            />
        </div>

        <NavLink to='/courses'>
            <button className="bg-[#00AFEF] text-white animate-pulse border-none hover:border-none">
                All Courses
            </button>
        </NavLink>
    </div>
  )
}

export default Courses