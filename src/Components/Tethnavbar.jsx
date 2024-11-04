import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose, IoMdCall } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Tethnavbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center z-10 w-full overflow-x-hidden h-20 px-6 lg:px-20">
        <Link to="/">
          <img
            src="/cc.jpg"
            alt="logo"
            className="h-[16rem] w-[16rem] -mx-[50px] lg:mx-0 pt-24"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-x-5 items-center list-none">
          <NavLink
            to="/"
            className="cursor-pointer text-2xl hover:text-gray-600 transition-all"
          >
            Home
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/tethabout"
            className="cursor-pointer text-2xl hover:text-gray-600 transition-all"
          >
            About
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/tethcontactus"
            className="cursor-pointer text-2xl hover:text-gray-600 transition-all"
          >
            Contact us
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/tethbrands"
            className="cursor-pointer text-2xl hover:text-gray-600 transition-all"
          >
            Brands
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>
          <NavLink
            to="/tethgallery"
            className="cursor-pointer text-2xl hover:text-gray-600 transition-all"
          >
            Gallery
            <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
          </NavLink>

          <p className="py-2 px-4 lg:px-7 bg-black rounded-md font-sans flex items-center text-white gap-4">
            <IoMdCall className="text-2xl" /> Call us +91 9719631909
          </p>
        </ul>

        {/* Call Us button for mobile */}
        <p className="bg-black text-xs py-1 md:px-4 rounded-md font-sans text-white flex items-center justify-center lg:hidden  w-[60%] md:w-auto ">
          <IoMdCall className="text-[16px] mr-2" /> Call us +91 9719631909
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setVisible(!visible)}
          className="flex items-center lg:hidden  text-2xl cursor-pointer"
        >
          <FaBars />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-20 bg-white transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600 list-none p-4">
          <button
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 mb-4"
            aria-label="Close navigation"
          >
            <IoMdClose className="text-2xl" />
            <span>Back</span>
          </button>

          <Link
            to="/"
            className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
            onClick={() => setVisible(false)}
          >
            Home
          </Link>
          <Link
            to="/tethabout"
            className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
            onClick={() => setVisible(false)}
          >
            About
          </Link>
          <Link
            to="/tethcontactus"
            className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
            onClick={() => setVisible(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/tethbrands"
            className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
            onClick={() => setVisible(false)}
          >
            Brands
          </Link>
          <Link
            to="/tethgallery"
            className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
            onClick={() => setVisible(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tethnavbar;
