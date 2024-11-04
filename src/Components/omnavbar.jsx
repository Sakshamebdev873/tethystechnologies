import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose, IoMdCall } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Omnavbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center z-20 w-full overflow-hidden h-20 px-4 lg:px-24 bg-white shadow-md">
        <Link to="/omhome">
          <img
            src="../Om Sai Travels.png"
            alt="logo"
            className="h-[8rem] lg:h-[8rem] pr-12 lg:pr-0 w-[80%]  pt-2"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex  gap-x-5 items-center list-none">
          <NavLink
            to="/omhome"
            className="cursor-pointer text-2xl hover:text-gray-600 transition duration-200"
          >
            Home
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/omabout"
            className="cursor-pointer text-2xl hover:text-gray-600 transition duration-200"
          >
            About
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/omcontactus"
            className="cursor-pointer text-2xl hover:text-gray-600 transition duration-200"
          >
            Contact us
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <p className="py-2 px-7 bg-[#9A0000] rounded-md font-sans   text-white gap-4 flex"  ><IoMdCall className="text-2xl" />  Call us +91 9719631909  </p>
        </ul>

        {/* Mobile "Call Us" Button */}
        <p className="bg-[#9A0000] text-xs px-3 py-2 rounded-md font-sans text-white flex items-center gap-2  lg:hidden">
          <IoMdCall className="text-lg" /> Call us +91 9719631909
        </p>

        {/* Mobile Menu Icon */}
        <span
          className="flex items-center lg:hidden text-2xl cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          <FaBars />
        </span>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-20 h-full bg-white w-full shadow-lg transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center justify-between p-4 border-b">
            <p className="text-lg font-semibold">Menu</p>
            <IoMdClose
              onClick={() => setVisible(false)}
              className="text-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/omhome"
              className="text-lg font-medium hover:text-gray-600"
              onClick={() => setVisible(false)}
            >
              Home
            </Link>
            <Link
              to="/omabout"
              className="text-lg font-medium hover:text-gray-600"
              onClick={() => setVisible(false)}
            >
              About
            </Link>
            <Link
              to="/omcontactus"
              className="text-lg font-medium hover:text-gray-600"
              onClick={() => setVisible(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Omnavbar;
