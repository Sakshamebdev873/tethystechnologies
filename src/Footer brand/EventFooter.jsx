import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
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
              <p className="mt-4 text-center text-xl">mayank@tethystechnologies.com</p>
              <p className="text-blue-600 text-center hover:underline cursor-pointer mt-4 ">
                +91 9719631909
              </p>
           
                <img src="/cc.jpg" alt="#" className='w-[200px] h-[200px] mt-8 ml-12 ' />
            </div>
            <div className='flex flex-col mt-[-5rem] sm:mt-7 lg:mt-7  ' >
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
                    <Link to={'/'} className='mt-4 pl-12 cursor-pointer '  onClick={ScrollToTop} >Home</Link>
                    <Link to={'/tethabout'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >About</Link>
                    <Link to={'/tethcontact'} className='mt-4 pl-12 cursor-pointer ' onClick={ScrollToTop} >Contact</Link>
                </ul>
            </div>
        </div>
    </div>
    <p className='lg:text-2xl text-center pb-4'>@TethysTechnologies 2024,All rights reserved </p>
    </>
  )
}

export default EventFooter