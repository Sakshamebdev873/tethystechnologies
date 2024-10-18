import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {Link,NavLink} from 'react-router-dom'
const Omnavbar = () => {
const [visible,setvisible ] = useState(false)
  return (
    <>
      <nav className="flex justify-between items-center z-10 w-full h-20 px-4 lg:px-24 ">
        <Link  to='/omsaitravels' >
        <img
          src="../Om Sai Travels.png"
          alt="logo"
          className="h-[10rem] w-[14rem] pt-2 "
        /></Link>
        <ul className="hidden lg:flex md:flex gap-x-5 items-center list-none ">
          <NavLink to={'/omsaitravels'} className="cursor-pointer text-2xl active:border-b-2 hover:text-gray-600 hover:scale-125">
            Home
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink to={'/aboutsai'} className="cursor-pointer text-2xl  hover:text-gray-600 hover:scale-125">
            About
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink to={'/contactsai'} className="cursor-pointer text-2xl  hover:text-gray-600 hover:scale-125">
            Contact us
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
        </ul>
        <span className="flex items-center lg:hidden md:hidden text-2xl  cursor-pointer " onClick={()=>setvisible(!visible)}  >
          <FaBars />
        </span>
      </nav>
       {/* sidebar */}
       <div
        className={`absolute top-0 z-20 right-0 bottom-0 left-0 overflow-hidden bg-white ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 list-none">
          <div className="flex items-center gap-2 p-3">
            <IoMdClose onClick={()=>setvisible(false)} className="text-2xl cursor-pointer" />
            <p>Back</p>
          </div>
          <Link to={'/omsaitravels'}
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600  `}
          >
            Home
          </Link>
          <Link to={'/aboutsai'}
        
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600  `}
          >
            About
          </Link>
          <Link to={'/contactsai'}
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600  `}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
};

export default Omnavbar;
