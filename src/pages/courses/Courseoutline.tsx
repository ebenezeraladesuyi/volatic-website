/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CoursesCard from '../../components/static/CoursesCard';
import figma from "../../assets/design/figma.png"
import adobe from "../../assets/design/AdobeXD.png"
import photoshop from "../../assets/design/photoshop.png"
import corel from "../../assets/design/coreldraw.png"
import html from "../../assets/frontend/html.png";
import css from "../../assets/frontend/css.png";
import javascript from "../../assets/frontend/javascript.png";
import typescript from "../../assets/frontend/Typescript.png";
import react from "../../assets/frontend/react.png";
import next from "../../assets/frontend/next.png";
import node from "../../assets/backend/node.png";
import mongo from "../../assets/backend/MongoDB.png";
import express from "../../assets/backend/express.png";
import socket from "../../assets/backend/socketio.png";
import think from "../../assets/highPerform/designThinking.jpg";
import high from "../../assets/highPerform/highPerformance.webp";

const Courseoutline = () => {

    const [activeButton, setActiveButton] = React.useState(0);

    const handleButtonClick = (index : any) => {
        setActiveButton(index);
    };

    const renderContent = () => {
        switch (activeButton) {
          case 0:
            return <div className='flex flex-wrap gap-3 justify-betwee'>
                <CoursesCard 
                    img={figma}
                    title='FIGMA'
                    details='Figma is a collaborative design tool used to create user interfaces, prototypes, and interactive designs. It enables real-time collaboration and seamless sharing among designers and stakeholders.'
                />
                <CoursesCard 
                    img={adobe}
                    title='ADOBE XD'
                    details='Adobe XD is a powerful design tool for creating prototypes, wireframes, and user interfaces. It streamlines the design process with features like artboards, responsive resizing, and collaboration tools.'
                />
                <CoursesCard 
                    img={photoshop}
                    title='PHOTOSHOP'
                    details='
                    Photoshop is a powerful graphics editing software used for image manipulation, design, and digital art creation. It offers a wide range of tools and features for professional-level editing and creative projects.'
                />
                <CoursesCard 
                    img={corel}
                    title='CORELDRAW'
                    details='
                    CorelDRAW is a vector graphics editor used for creating illustrations, logos, and layouts. It offers tools for drawing, designing, and editing images with precision and flexibility.'
                />
            </div>
          case 1:
            return <div className='flex flex-wrap gap-3 justify-betwee'>
                <CoursesCard 
                    img={html}
                    title='HTML'
                    details='HTML (Hypertext Markup Language) is the standard language for creating web pages. It defines the structure and content of web documents using tags and attributes.'
                />
                <CoursesCard 
                    img={css}
                    title='CSS'
                    details='CSS (Cascading Style Sheets) is a language used to style the appearance of web pages, controlling layout, typography, colors, and more to enhance the visual presentation of HTML content.'
                />
                <CoursesCard 
                    img={javascript}
                    title='JAVASCRIPT'
                    details='JavaScript is a versatile programming language used for creating interactive websites. It runs in web browsers and allows developers to add dynamic behavior, validate forms, and manipulate content.'
                />
                <CoursesCard 
                    img={typescript}
                    title='TYPESCRIPT'
                    details='TypeScript is a statically typed superset of JavaScript that adds optional static typing, allowing for better code quality, tooling, and scalability in web development projects.'
                />
                <CoursesCard 
                    img={react}
                    title='REACT'
                    details='React.js is a JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering. It simplifies the process of creating interactive web applications.'
                />
                <CoursesCard 
                    img={next}
                    title='NEXT'
                    details='
                    Next.js is a React framework for building server-side rendered and statically generated web applications. It provides features like automatic code splitting, routing, and server-side rendering out of the box.'
                />
          </div>;
          case 2:
            return <div className='flex flex-wrap gap-3 justify-betwee'>
                <CoursesCard 
                    img={node}
                    title='NODE'
                    details='Node.js is a runtime environment that allows developers to run JavaScript code outside the browser, enabling server-side scripting and building scalable network applications.'
                />
                <CoursesCard 
                    img={mongo}
                    title='MONGO DB'
                    details='MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is widely used for its scalability, high performance, and ability to handle large volumes of data'
                />
                <CoursesCard 
                    img={express}
                    title='EXPRESS'
                    details='Express.js is a minimalist web framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for handling HTTP requests and routing.'
                /> 
                <CoursesCard 
                    img={socket}
                    title='SOCKET.IO'
                    details='Socket.io is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. It simplifies building interactive applications with features like event-based messaging and automatic reconnection.'
                />
          </div>;
          case 3:
            return <div className='flex flex-wrap gap-3 justify-betwee'>
                <CoursesCard 
                    img={think}
                    title='DESIGN THINKING'
                    details='Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration to generate innovative solutions. It involves understanding user needs, ideating, prototyping, and testing to address complex challenges.'
                />
                <CoursesCard 
                    img={high}
                    title='HIGH PERFORMANCE'
                    details='High performance refers to the ability of a system to execute tasks efficiently, achieving optimal speed, responsiveness, and resource utilization, often resulting in improved user experience and productivity.'
                />
          </div>;
          default:
            return null;
        }
      };

  return (
    <div className="w-full h-[60vh flex justify-center items-center font-mont py-[30px] relative overflow-hidden">
        <div className="w-[90%] flex flex-col items-center gap-5">

            <div className="flex gap-1 flex-wrap w-full justify-cente bg-black py-5 justify-around">
                {["Graphics & Product Design", "Frontend Engineering", "Backend Engineering", "Soft/Sellable Skills"].map((text, index) => (
                      <button
                        key={index}
                        className={`text-[13px] pb-[7px] px-3 w-[46%] md:w-[23%] lg:w-[19%] bg-[#00AFEF] outline-0 text-white ${index === activeButton ? "border-b-[3px] outline-0 border-b-[#50519f border-none bg-[#50519f] text-[#50519f]" : ""}`}
                        onClick={() => handleButtonClick(index)}
                      >
                        {text}
                      </button>
                    ))}
            </div>

            <div className="w-full mt-2 flex flex-col gap-3">
                {renderContent()}
            </div>
        </div>
    </div>
  )
}

export default Courseoutline