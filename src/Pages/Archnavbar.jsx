import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose, IoMdCall } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Archnavbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center z-10 w-full h-20 px-7 lg:px-20">
        <Link to="/nakshaghar">
          <img
            src="/naksha ghar.png"
            alt="Naksha Ghar Logo"
            className="object-cover ml-[-2rem] lg:ml-0 pt-2"
          />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-x-5 items-center list-none">
          {["Home", "About", "Contact Us"].map((item, index) => (
            <NavLink
              key={index}
              to={`/naksha${item.toLowerCase().replace(" ", "")}`}
              className="cursor-pointer text-2xl hover:text-gray-600 hover:scale-105 transition-all"
              activeClassName="border-b-2 border-gray-700"
            >
              {item}
            </NavLink>
          ))}
          <p className="py-2 px-4 lg:px-7 bg-[#9A0000] rounded-md font-sans flex items-center text-white gap-4">
            <IoMdCall className="text-2xl" /> Call us +91 9719631909
          </p>
        </ul>
        
        {/* Call Us button for mobile */}
        <span className="bg-[#9A0000] text-xs py-2 px-4 rounded-md font-sans text-white flex items-center justify-center w-full md:hidden text-center">
          <IoMdCall className="text-[16px] lg:text-2xl mr-2" /> Call us +91 9719631909
        </span>
        
        {/* Toggle Button */}
        <button
          onClick={() => setVisible(!visible)}
          className="flex items-center lg:hidden text-2xl hover:rotate-90 transition-transform cursor-pointer"
          aria-label="Toggle navigation"
        >
          {visible ? <IoMdClose /> : <FaBars />}
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
            <span>Close</span>
          </button>

          {["Home", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/naksha${item.toLowerCase().replace(" ", "")}`}
              className="border-b py-2 px-3 cursor-pointer hover:text-gray-600 hover:pl-6 transition-all"
              onClick={() => setVisible(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Archnavbar;
