import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
const [visible,setvisible ] = useState(false)
  return (
    <>
      <nav className="flex justify-between items-center z-10 w-full h-20 lg:px-28 px-4 ">
        <Link  to='/cad' ><img
          src="/logo.jpg"
          alt="logo"
          className="h-[5rem] w-[8rem] pt-2 "
        /></Link>
        <ul className="hidden lg:flex md:flex gap-x-5 items-center list-none ">
          <NavLink to={'/cad'} className="cursor-pointer text-2xl active:border-b-2 hover:text-gray-600 hover:scale-125">
            Home
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink to={'/about'} className="cursor-pointer text-2xl  hover:text-gray-600 hover:scale-125">
            About
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink to={'/contact'} className="cursor-pointer text-2xl  hover:text-gray-600 hover:scale-125">
            Contact us
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          {/* <NavLink to={'/brands'} className="cursor-pointer text-2xl  hover:text-gray-600 hover:scale-125">
            Brands
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink> */}
          <p className="py-2 px-7 bg-[#9A0000] rounded-md font-sans   text-white gap-4 flex"  ><IoMdCall className="text-2xl" />  Call us +91 9719631909  </p>
        
        </ul>
        <p className=" bg-[#9A0000] text-xs px-1 py-2 rounded-md font-sans gap-2 md:hidden lg:hidden  text-white flex"  ><IoMdCall className=" text-[16px] lg:text-2xl" />  Call us +91 9719631909  </p>
        <span className="flex items-center lg:hidden md:hidden text-2xl hover:rotate-90 cursor-pointer " onClick={()=>setvisible(!visible)}  >
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
          <Link to={'/cad'}
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600 hover:pl-10 `}
          >
            Home
          </Link>
          <Link to={'/about'}
        
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600 hover:pl-10 `}
          >
            About
          </Link>
          <Link to={'/contact'}
            className={`border pt-2 pl-3 cursor-pointer hover:text-gray-600 hover:pl-10 `}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
};

export default Navbar;
