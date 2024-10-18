import React from "react";

import Title from "./Title";
import Reviews from "./Reviews";
import Footer from "./Footermain";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
const Hero = () => {
  const herocourselimages = [
    "/Cad/1.jpg",
    "/Cad/2.jpg",
    "/Cad/3.jpg",
    "/Cad/4.jpg",
    "/Cad/5.jpg"
  ];

  useGSAP(() => {
    gsap.from("#hello", {
      x: -500,
      y: 0,
      opacity: 0,
      duration: 2.7,
    });
    gsap.from("#head", {
      x: 500,
      y: 0,
      opacity: 0,
      duration: 2.7,
    });
    gsap.from("#body", {
      x: 500,
      y: 0,
      opacity: 0,
      duration: 2.7,
    });
    gsap.from("#build", {
      x: 400,
      y: 0,
      opacity: 0,
      duration: 2.5,
    });
    gsap.from("#box1", {
      opacity: 0,
      x: -400,
      duration: 1.6,
      delay: 0.2,
    });
    gsap.from("#box2", {
      opacity: 0,
      y: 400,
      duration: 1.8,
      delay: 0.4,
    });
    gsap.from("#box3", {
      opacity: 0,
      x: 800,
      duration: 2,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-5">
        {/* <Carsouel images={herocourselimages} /> */}
        <div className="flex items-center justify-center " >

        <img src="/slide.jpg" alt="#" className="object-cover  " />

        </div>
        <Title text1={"Our"} text2={"Objective"} />
        <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center  box justify-between mt-5 pb-16 py-10 md:px-32 px-0 ">
          <img
            id="hello"
            src="/33.jpg"
            alt="image"
            className=" mt-5 rounded-lg object-cover    "
          />
          <div
          
            className="flex items-center mt-4  w-full  flex-col px-12  "
          >
            <h1 id='head' className="text-center text-4xl font-medium mb-7 md:block ">
              Welcome to CAD Institute of Advance Skills: Shaping Tomorrow’s Innovators
            </h1>
            <p id="build"  >
            For over 15 years, CAD Institute of Skills has been a beacon of excellence in the world of design and engineering, proudly rooted in the serene landscapes of Uttarakhand. What began as a regional hub for skill development has now grown into a trusted name, preparing thousands of students to excel in their careers. As we continue to evolve, our vision is clear—we are expanding across the nation, empowering minds from every corner of India.
              <br  />
             <p id="body" className="mt-4 md:block " > India is on the path of rapid growth and technological
              advancement, and the demand for skilled professionals in design
              and engineering is greater than ever. At CAD Institute of Skills,
              we offer more than just courses—we provide a launchpad for your
              career. Whether you are looking to master AutoCAD, SolidWorks,
              Revit, or other leading design software, our expert trainers and
              hands-on approach will prepare you to excel in the industry.</p>
            </p>
            {/* <div className="mb-4 md:flex md:flex-col ">
            <Title text1={"About"} text2={"us"} />
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo
              recusandae temporibus. Laborum temporibus cum perferendis
              voluptate! Cupiditate vitae temporibus magnam quas nihil nisi
              officiis recusandae natus, commodi sunt molestias.
            </p>
          </div> */}
          </div>
        </div>

        {/* cadd courses */}
        <h1 className="text-center text-4xl mt-20 font-medium ">
          Our Featured Cad courses
        </h1>
        <p className="text-center text-[15px] px-10  leading-4 mt-8  ">
          Delve into our accurate selection of prominent courses, each designed
          to empower you with essential skills and
          <br /> knowledge that resonate with the demands of the industry. By
          embarking on this educational journey, you have the opportunity to{" "}
          <br /> tap into a reservoir of expertise and insights, all aimed at
          fostering your professional development and growth.
        </p>
        <div className="mt-4 w-full pb-8">
          {/* cadd courses boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  md:gap-4 px-9 mt-9 ">
            <div
              id="box1"
              className="box-1 grid grid-cols-1 py-5 w-full rounded-lg "
            >
              <img
                src="https://imgs.search.brave.com/UBEhb17bFJreoURQ-lKihmk1zNF6dJUB844b8Y5RENk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ibHVlbnRjYWQu/Y29tL2ltYWdlcy9B/cmNoaXRlY3R1cmFs/LURyYXdpbmctMS53/ZWJw"
                alt="travel"
                className="object-cover  rounded-lg "
              />
              <h1 className="text-2xl p-4 text-center ">Architectural CAD</h1>
              <p className="text-xl text-center mb-2 ">
                Autocad, Revit Architecture, <br /> Revit Structure, 3dsMax,
                <br />
                V-Ray, Sketchup & many more
              </p>
            </div>
            <div
              id="box2"
              className="box-1 flex flex-col py-5 w-full rounded-lg "
            >
              <img
                src="https://imgs.search.brave.com/5Jd_mf6Z6UyNW-GWQBjeinMLyvJuCikVRVb0H9E6MiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/OTEwNDk5MS9waG90/by9lLWxlYXJuaW5n/LW9ubGluZS1lZHVj/YXRpb24tY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZHRhMnRucGFD/OTVGZGNxU3k0YnBw/MnRMekJRRFRDTmFq/WGVMeE5zS1hvbz0"
                alt="travel"
                className="object-cover rounded-lg "
              />

              <h1 className="text-2xl p-4 text-center ">IT courses </h1>
              <p className="text-xl text-center">
                C , C++ ,Python , java Oracel Sql,<br/> Dot.net, Robotics, Block chain
                <br/>Datascience Data analytics<br/> Chatgbt &many more
              </p>
            </div>
            <div
              id="box3"
              className="box-1 flex flex-col w-full py-5 rounded-lg "
            >
              <img
                src="https://img.freepik.com/premium-photo/close-up-computer-screen-with-engineering-software-blueprint-engine-component-use_937679-62638.jpg?size=626&ext=jpg&ga=GA1.1.1489463704.1727353803&semt=ais_hybrid"
                alt="travel"
                className="object-cover rounded-lg "
              />

              <h1 className="text-2xl p-4 text-center mt-7 w-full ">
                Mechanical CAD
              </h1>
              <p className="text-xl text-center ">
                Autocad Solidworks Creo Catia
                <bt /> Ugnxcad Nxcam Ansys Kinematics
                <br />
                Reverse engineering Solidworks motion
                <br /> & many more
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-normal text-center mt-9 pb-8 ">
          and many more....
        </h1>

        {/* <Brands /> */}
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default Hero;
