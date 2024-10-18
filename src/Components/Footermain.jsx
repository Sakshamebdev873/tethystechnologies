import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="relative w-full mt-10 border-t-4 border-[#9A0000] mb-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2  lg:px-16 ">
          <div className="flex flex-col lg:items-center items-center mt-8 px-7 lg:px-0 ">
            <h1 className="text-2xl leading-8 text-center ">Our Office Address</h1>
            <p className="text-[14px] text-center mt-4">
              4th floor SGAD COMPLEX ABOVE VISHAL MEGA MART Nainital Road
              Rudrapur-263153,
              <br /> Utrrakhand, India.
              <p className="mt-4  pr-4 lg:pr-0 text-xl">mayank.caddcentre@gmail.com</p>
              <p className="text-blue-600 hover:underline cursor-pointer mt-4 ">
                +91 9719631909
              </p>
            </p>
            <img
              src="/logo.jpg"
              alt="#"
              className="w-[200px] h-[140px]  mt-8 "
            />
          </div>
          <div className="flex flex-col lg:items-baseline items-center mt-8  ">
            <h1 className="text-2xl leading-8 ml-12  ">Our Recruiters</h1>
            <p className="  mt-4 flex lg:flex-wrap  ">
              <img
                src="https://i.pinimg.com/474x/7d/8c/6c/7d8c6c0a85b2cfbb9d2785ea6dd18083.jpg"
                alt=""
                className="h-24 w-24 "
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tuG_PTBiaoFauJfk15cs6n3Oepl4KDmfRg&s"
                alt=""
                className="h-20 w-20 "
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1Lozy3YD8qsY-0Ktu37eAcmljJoTsBmNRQ&s"
                alt=""
                className="h-24 w-24"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcWFzka_823Yy8QKTsbiNzHLFF6f0azUPpw&s"
                alt=""
                className="h-24 w-24"
              />
              <p className="mt-8 text-xl ">..and many more</p>
            </p>
          </div>
          <div className="flex flex-col mt-8   ">
            <h1 className="text-2xl leading-8 ml-12 ">Top Stream</h1>
            <ul className="list-none mt-4 ">
              <li className="mt-4 pl-12">Mechanical CADD</li>
              <li className="mt-4 pl-12">Civil CADD</li>
              <li className="mt-4 pl-12">Electrical CADD</li>
              <li className="mt-4 pl-12">Architectural CADD</li>
            </ul>
          </div>
          <div className="flex flex-col mt-8  ">
            <h1 className="text-2xl leading-8 ml-12 ">Certifications</h1>
            <p className="mt-7  mx-12 lg:mx-0 " >We provide globally valid nsdc approved Certification
            
            </p>
            <div className="flex mt-4 lg:flex-row flex-col  " >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0nUrtKtiUjMe39L0XUKOEWJY7HOzpCv3eg&s" alt="" className="h-28 w-56" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPY0MVep7jkETTLZ5jLh1h7LbSQflZgGcaw&s" alt="" className="h-32 w-64 mt-7 lg:mt-0 " />
            </div>
          </div>
        </div>
      </div>
      <p className=" lg:text-2xl text-center pb-4">
        {" "}
        @CAD Institute of Advance Skills 2024,All rights reserved{" "}
      </p>
    </>
  );
};

export default Footer;
