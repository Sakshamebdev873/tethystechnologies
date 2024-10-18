import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
const Omfooter = () => {
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
   <div className='relative w-full mt-10 border-t-4 border-[#9A0000] mb-8 ' >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2  lg:px-5 ' >
        <div className='flex flex-col mt-8 px-2 lg:px-0 ' >
                <h1 className='text-2xl leading-8 pl-2 lg:pl-12  ' >Om Sai Travels Office Address</h1>
                <p className="text-[14px] lg:pl-12 mt-4">
              4th floor SGAD COMPLEX ABOVE VISHAL MEGA MART Nainital Road
              Rudrapur-263153,
              <br /> Utrrakhand, India.
              <p className="mt-4 text-xl">mayank.caddcentre@gmail.com</p>
              <p className="text-blue-600 hover:underline cursor-pointer mt-4 ">
                +91 9719631909
              </p>
            </p>
                <img src="../Om Sai Travels.png" alt="#" className='object-cover mt-8 ml-12 ' />
            </div>
            <div className='flex flex-col mt-8 px-2 lg:px-0 lg:items-center ' >
                <h1 className='text-2xl leading-8 ml-12  ' >Destinations</h1>
                <ul className='list-none mt-4 ' >
                    <li className='mt-4 pl-12' >Himachal Pradesh</li>
                    <li className='mt-4 pl-12' >Uttar Pradesh</li>
                    <li className='mt-4 pl-12' >Uttarakhand</li>
                    <li className='mt-4 pl-12' >Punjab</li>
                </ul>
            </div>
            <div className='flex flex-col mt-8 px-2 lg:px-0 lg:items-center ' >
                <h1 className='text-2xl leading-8 ml-12 ' >Vacation Types</h1>
                <ul className='list-none mt-4 ' >
                    <li className='mt-4 pl-12' >Honeymoon</li>
                    <li className='mt-4 pl-12' >Luxury</li>
                    <li className='mt-4 pl-12' >Last minute</li>
                    <li className='mt-4 pl-12' >Family</li>
                </ul>
            </div>
            <div className='flex flex-col mt-8 px-2 lg:px-0 lg:items-center ' >
                <h1 className='text-2xl leading-8 ml-12 ' >Navigate</h1>
                <ul className='list-none flex flex-col mt-4 ' >
                    <Link to={'/omsaitravels'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >Home</Link>
                    <Link to={'/aboutsai'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop}>About</Link>
                    <Link to={'/contactsai'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >Contact</Link>
                </ul>
            </div>
            
        </div>
    </div>
    <p className='lg:text-2xl text-center pb-4'> @OM SAI TRAVELS 2024,All rights reserved </p>
   </>
  )
}

export default Omfooter