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
    "/Cad/5.jpg",
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
        <div className="flex items-center justify-center ">
          <img src="/slide.jpg" alt="#" className="object-cover  " />
        </div>
        <Title text1={"Our"} text2={"Objective"} />
        <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center  box justify-between mt-5 pb-16 py-10  md:px-1 px-0 ">
          <img
            id="hello"
            src="/33.jpg"
            alt="image"
            className=" mt-5 rounded-lg object-cover    "
          />
          <div className="flex items-center mt-4  w-full  flex-col px-12  ">
            <h1
              id="head"
              className="text-center text-4xl font-medium mb-7 md:block "
            >
              Welcome to CAD Institute of Advance Skills: Shaping Tomorrow’s
              Innovators
            </h1>
            <p className="text-[15px]" >
              Start your path to excellence by enrolling at CAD Institute of
              Advanced Skill, the leading AutoCAD course institution in
              Rudrapur, Uttarakhand. CAD Institute of Advanced Skill opens doors
              to a rewarding career as an AutoCAD professional in the dynamic
              city of Rudrapur. Our reputable institution is proud to offer a
              well-rounded curriculum, expert mentors, and modern facilities,
              making us the top choice for AutoCAD training in Rudrapur. At CAD
              Institute of Advanced Skill, we are dedicated to delivering
              top-tier education for CAD enthusiasts like yourself.</p>
              <p className="mt-4 text-[15px] " > Dive into
              immersive, hands-on learning as you explore the intricate
              functions and features of AutoCAD. Our balanced approach combines
              in-depth theoretical learning with practical applications, helping
              you build strong skills in drafting, modeling, and design. Our
              flexible scheduling and personalized guidance are what truly set
              us apart. We recognize that each student has unique learning
              needs, and we’re here to support you every step of the way on your
              educational journey.</p>
              <p className="mt-4 text-[15px] " >Join the community of skilled AutoCAD
              professionals who have benefited from training at CAD Institute of
              Advanced Skill. With a proven record of success, we remain the top
              choice for CAD learners seeking the best AutoCAD courses in
              Rudrapur. Take advantage of this opportunity to start a
              transformative educational journey with CAD Institute of Advanced
              Skill in Rudrapur, Uttarakhand.
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
          Our Featured CAD Courses
        </h1>
        <p className="text-center text-[15px]  px-10  mt-8  ">
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
                src="https://img.freepik.com/premium-photo/close-up-computer-screen-with-engineering-software-blueprint-engine-component-use_937679-62638.jpg?size=626&ext=jpg&ga=GA1.1.1489463704.1727353803&semt=ais_hybrid"
                alt="travel"
                className="object-cover  rounded-lg "
              />
              <h1 className="text-2xl p-4 text-center ">
                Mechanical CAD Courses
              </h1>
              <p className="text-xl text-center mb-2 ">Auto Cad</p>
              <p className="text-xl text-center mb-2 ">Solidworks</p>
              <p className="text-xl text-center mb-2 ">Creo</p>
              <p className="text-xl text-center mb-2 ">Catia</p>
              <p className="text-xl text-center mb-2 ">Ugnxcad</p>
              <p className="text-xl text-center mb-2 ">Nxcam</p>
              <p className="text-xl text-center mb-2 ">Ansys</p>
              <p className="text-xl text-center mb-2 ">Kinematics</p>
              <p className="text-xl text-center mb-2 ">Reverse engineering</p>
              <p className="text-xl text-center mb-2 ">& many more</p>
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

              <h1 className="text-2xl p-4 text-center ">IT Cad Courses </h1>
              <p className="text-xl text-center mb-2">C</p>
              <p className="text-xl text-center mb-2">C++</p>
              <p className="text-xl text-center mb-2">Python</p>
              <p className="text-xl text-center mb-2">Java</p>
              <p className="text-xl text-center mb-2">Oracel</p>
              <p className="text-xl text-center mb-2">Sql</p>
              <p className="text-xl text-center mb-2">Dot.net</p>
              <p className="text-xl text-center mb-2">Robotics</p>
              <p className="text-xl text-center mb-2">Block Chain</p>
              <p className="text-xl text-center mb-2">& many more</p>
            </div>
            <div
              id="box3"
              className="box-1 flex flex-col w-full py-5 rounded-lg "
            >
              <img
                src="https://imgs.search.brave.com/YpPOUVKHnq_XSM967rsgBd_iY1oaTVkZuTES9WP1c24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NzY3NTgwMi9waG90/by9lbGVjdHJpY2Fs/LWVuZ2luZWVyaW5n/LWRyYXdpbmdzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1w/VFFCa25fZmFaVHlW/NF9kLUJ6WHY1YkNn/Y0U5eGdEWDQwSDdG/eEZkaXFJPQ"
                alt="travel"
                className="object-cover rounded-lg "
              />

              <h1 className="text-2xl p-4 text-center w-full ">
                Electrical Cad Courses
              </h1>
              <p className="text-xl text-center mb-2 ">Autocad Electrical</p>
              <p className="text-xl text-center mb-2 ">PLC</p>
              <p className="text-xl text-center mb-2 ">SCADA</p>
              <p className="text-xl text-center mb-2 ">HMI</p>
              <p className="text-xl text-center mb-2 ">MATLAB</p>
              <p className="text-xl text-center mb-2 ">Etap</p>
              <p className="text-xl text-center mb-2 ">& many more</p>
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
