import React from 'react'
import Archnavbar from './Archnavbar'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Archfooter from '../Footer brand/Archfooter'
const Contactarch = () => {
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
    <Archnavbar/>
    <img src="https://www.gilbaneco.com/wp-content/uploads/2023/08/J04983_000_N8-1686x600.jpg" alt="contact" className='w-full mt-2 lg:mt-5 object-cover rounded-lg ' />
    <div className='flex flex-col items-center ' >
      <h1 className='text-center mt-12 text-5xl font-medium ' >Contact us </h1>
      <p className='text-center text-2xl font-normal mt-7 ' >How can we help you?</p>
    <form
          onSubmit={handlesubmit}
          className="flex flex-col mb-16 min-h-[20rem] lg:min-w-[25rem]  w-[20rem] lg:w-[45rem] mt-14 gap-4  "
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
          <textarea  rows='4' className="border border-gray-400 rounded-md " placeholder="Your Query" ></textarea>
          <button type="submit"  className="bg-[crimson] text-white w-full p-2 rounded-md   " >Submit</button>
        </form>
        <h1 className='text-center font-medium text-5xl mt-12' > Report a Concern</h1>
        <p className='text-center mt-12 px-12 ' >
        We care deeply about upholding our commitment to integrity. If you see something concerning, we hope you will make a report. The Gilbane Ethics Hotline provides a confidential, anonymous way to report violations to our Code of Ethics or to address other concerns.
        </p>
    </div>
    <Archfooter/>
    </>
  )
}

export default Contactarch