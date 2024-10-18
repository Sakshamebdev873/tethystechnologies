import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footermain";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Title from "../Components/Title";
const Contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <img src="https://caddcentre.com/assets/images/contactus/contactus.jpg" alt="Contact" className="object-cover mb-8 lg:mt-10 mt-4 " />
      <div className="grid  grid-cols-1 md:grid-cols-2 px-16 ">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <h1 className="lg:text-[100px] text-5xl font-semibold text-center " >Contact us</h1>
      <h1 className="text-center font-semibold lg:mb-8 mb-2 ">Get in Touch with us</h1>
      </div>
        <form
          onSubmit={handlesubmit}
          className="flex flex-col mb-16 min-h-[20rem] lg:min-w-[25rem] lg:w-[45rem] lg:mt-24 gap-4  "
        >
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-500 rounded-md p-2 "
          />
          <input
            type="email"
            placeholder="Please Enter your Email"
            className="border border-gray-500 rounded-md p-2 "
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border border-gray-500 rounded-md p-2 "
          />

          <Menu as="div" className="relative inline-block text-left border border-gray-500 ">
            <div>
              <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Select Courses
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Architecture Cad
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                   Mechanical Cad
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                  Civil Cad
                  </a>
                </MenuItem>

                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                   Electrical Cad
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <textarea  rows='4' className="border border-gray-400 rounded-md " placeholder="Your Query" ></textarea>
          <button type="submit"  className="bg-[crimson] text-white w-full p-2 rounded-md   " >Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
