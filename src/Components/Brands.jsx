import React from 'react'
import {Link } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from './Title';


gsap.registerPlugin(useGSAP,ScrollTrigger);
const Brands = () => {
  
  const [isVisible, setIsVisible] = useState(false);
        const location = useLocation();
  useGSAP(()=>{
    gsap.from('#b',{
      y: 400,
      opacity:0,
      delay:0.5,
      duration:6

    })
    gsap.from('#c',{
      y: 100,
      opacity:0,
      delay:0.2,
      duration:6.2

    })
    gsap.from('#d',{
      y: 200,
      opacity:0,
      delay:0.2,
      duration:6.4
    })
  },[])
        
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
    <div className='mt-4 w-full pb-8' >
     <Title text1={'Our'} text2={'Brands'} />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3   md:gap-4 px-9 mt-12 ' >
        <Link id='b' to={'/omsaitravels'} onClick={ScrollToTop} className='box-1 grid grid-cols-1 py-5 w-full ' >
        
          <img src="/travel.webp" alt="travel" className='object-cover  rounded-md '  />
       
          <h1 className='text-2xl p-4 text-center ' >Om Sai Travels</h1>
          <p className='text-xl text-center'  >Your Journey, Our Expertise <br/> Explore the World with Ease!</p>
          <p className='text-xs mt-2 text-center ' >As Travel Agencies provider of taxi services across<br/> north india
          </p>
        </Link >
        <Link id='c' to='./nakshaghar' onClick={ScrollToTop} className='box-1 w-full flex flex-col py-5 ' >
    
          <img src="/design.webp" alt="travel" className='object-cover rounded-md '  />
          
          <h1 className='text-2xl p-4 text-center ' >नक्शा घर</h1>
          <p className='text-xl text-center'  >Building Dreams, One <br/> Blueprint at a Time!</p>
          <p className='text-xs mt-2  text-center' >As Architect & Civil & survey works<br/>(we do make all types of layout, maps ,estimates<br/> do work 
          for approvals from NHAI <br/> & vikas pradhikaran & Rera & Zila panchayat)
          </p>
        </Link>
        <Link id='d' to='/cad' onClick={ScrollToTop} className='box-1  flex flex-col py-5  w-full ' >
        
          <img src="/logo.jpg" alt="travel" className='object-cover lg:h-[550px] lg:w-[100%] rounded-md '  />
        
          <h1 className='text-2xl p-4 text-center ' >Cad 
          Institute of Advance Skills</h1>
          <p className='text-xl text-center'>From Ideas to Icons – Learn, Create, Inspire.</p>
          <p className='text-xs pt-2  text-center ' > Our logo design tutoring company empowers aspiring designers to master branding and visual identity. Through hands-on learning, students explore the art of creating impactful logos from scratch. </p>
        </Link>
      </div>
    </div>
  )
}
export default Brands