import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { useState,useEffect } from 'react';
import { IoMdCall } from "react-icons/io";
const EventFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

const ScrollToTop = () => {
    

    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Reset visibility on route change
    useEffect(() => {
        setIsVisible(false);
    }, [location]);

   
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
    },
};
  return (
    <>
    <div className='relative w-full mt-10 border-t-4 border-black mb-8 ' >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-5 ' >
            <div className='flex flex-col mt-8 ' >
                <h1 className='text-2xl leading-8 pl-2 lg:pl-12  ' >TethysTechnologies Office Address</h1>
                <p className="text-[14px] lg:pl-12 mt-4">
              4th floor SGAD COMPLEX ABOVE VISHAL MEGA MART Nainital Road
              Rudrapur-263153,
              <br /> Utrrakhand, India. </p>
              <p className="mt-4 text-center flex px-2 lg:px-10 items-center text-[15px] gap-5"><p className='text-black ' ><MdEmail/></p>mayank@tethystechnologies.com</p>
              <p className="font-sans  text-center flex gap-4 px-2 lg:px-12 hover:underline cursor-pointer mt-4 ">
                <p className='text-black text-xl ' ><IoMdCall/></p>+91 9719631909 
              </p>
              <p className="font-sans  text-center flex gap-4 px-2 lg:px-12 hover:underline cursor-pointer mt-4 ">
                <p className='text-black text-xl ' ><IoMdCall/></p> +91 9219040125
              </p>
            </div>
            <div className='flex flex-col mt-6 sm:mt-7 lg:mt-7  ' >
                <h1 className='text-2xl leading-8 ml-12  ' >Services</h1>
                <ul className='list-none mt-4 ' >
                    <li className='mt-4 pl-12' >Food Catering</li>
                    <li className='mt-4 pl-12' > Artist Booking </li>
                    <li className='mt-4 pl-12' >Magicians</li>
                    <li className='mt-4 pl-12' >and more</li>
                </ul>
            </div>
            <div className='flex flex-col mt-8  ' >
                <h1 className='text-2xl leading-8 ml-12 ' >Locations</h1>
                <ul className='list-none mt-4 ' >
                    <li className='mt-4 pl-12' >Haldwani</li>
                    <li className='mt-4 pl-12' >Rudrapur</li>
                    <li className='mt-4 pl-12' >Haridwar</li>
                </ul>
            </div>
            <div className='flex flex-col mt-8  ' >
                <h1 className='text-2xl leading-8 ml-12 ' >Navigate</h1>
                <ul className='list-none flex flex-col mt-4 ' >
                    <Link to={'/tethhome'} className='mt-4 pl-12 cursor-pointer '  onClick={ScrollToTop} >Home</Link>
                    <Link to={'/tethabout'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >About</Link>
                    <Link to={'/tethcontactus'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >Contact</Link>
                </ul>
            </div>
            
        </div>

    </div>
    <div className="flex mt-7 items-center justify-around  lg:px-0 px-12  lg:flex-row lg:flex-wrap  flex-nowrap ">
        <Link to={'/cad'} onClick={ScrollToTop} ><img src="/logo.jpg" alt="#" className="lg:w-[200px] h-[50px] w-[250px] lg:h-[140px]  mt-8 "  /></Link>
        <Link to={'/nakshahome'} onClick={ScrollToTop} ><img
          src="/naksha ghar.png"
          alt=""
          className="lg:w-[300px] h-[50px] w-[350px]  lg:h-[140px]  mt-8" 
        /></Link>
        <Link to={'/'} onClick={ScrollToTop} ><img src="/cc.jpg" alt="" className="lg:w-[200px] lg:h-[140px]  mt-16"  /></Link>
        <Link to={'/omhome'} onClick={ScrollToTop} ><img
          src="/Om Sai Travels.png"
          alt=""
          className="lg:w-[200px] lg:h-[140px] h-[50px] w-[350px] mt-4"
        /></Link>
      </div>
    <p className='lg:text-2xl text-center pb-4'>@TethysTechnologies 2024,All rights reserved </p>
    </>
  )
}

export default EventFooter