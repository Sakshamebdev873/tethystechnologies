import React from 'react'
import Title from '../Components/Title'
import gsap from "gsap";
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

const TethServices = () => {
    useGSAP(() => {
        gsap.from('#w', {
            x: -100,
            opacity: 0,
            duration: 6.9,
        }), 
        gsap.from("#x", {
            x: 100,
            opacity: 0,
            duration: 7,
        }),
            gsap.from("#y", {
                x: -400,
                opacity: 0,
                duration: 7.1,
            }),
            gsap.from("#z", {
                x: 400,
                opacity: 0,
                duration: 7.1,
            })
    }, [])
    return (
        <div className='mt-5 flex flex-col gap-12' >
            <Title text1={'Our'} text2={'Services'} />
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:px-32 px-2 ' >
                <img id='w' src="https://eventcracker.com/wp-content/uploads/2020/06/about.jpg" alt="wedding" className='object-cover rounded-lg ' />
                <div className='flex flex-col pl-2 lg:pl-7' >
                    <h1 className='text-5xl font-medium mt-7 lg:mt-0 ' >Wedding</h1>
                    <p className='mt-7' >Every bride dreams of having the perfect wedding, but planning that can be quite a task. Throw in all of the cultural nuances associated with ethnic weddings and the task can become overwhelming. We work directly with you and your families to handle all of aspects of your wedding. The result is an extraordinary event that is just as you envisioned.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-20 ' >
                <div className='flex flex-col pl-2 lg:pl-7' >
                    <h1 className='text-5xl font-medium' >DESTINATION WEDDINGS</h1>
                    <p className='mt-7 pr-7 ' >Thailand, Bali, Dubai, Udaipur, Malaysiaare just a few of the locations around the world where we have planned Destination Weddings and Events. We work directly with you to discover the perfect location and to ensure that all the details are in place for your big day. Our offices are located in the Thailand &Portland but our planning takes us all over the world.</p>
                </div>
                <img id='x' src="https://eventcracker.com/wp-content/uploads/2020/06/2.jpg" alt="wedding" className='object-cover rounded-lg lg:mt-0 mt-4 ' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-20 ' >
                <img id='y' src="https://eventcracker.com/wp-content/uploads/2020/06/homepage-image.jpg" alt="wedding" className='object-cover lg:block hidden rounded-lg ' />
                <div className='flex flex-col pl-2 lg:pl-7' >
                    <h1 className='text-5xl font-medium  mt-2 lg:mt-0 ' >CORPORATE EVENTS</h1>
                    <p className='mt-7' >We are at your service to execute your Corporate event, from simple luncheons to large black-tie galas. We bring sharpness and flair to any corporate event to wow your clients and colleagues with an unforgettable event.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-20 ' >
                <div className='flex flex-col pl-2 lg:pl-7' >
                    <h1 className='text-5xl font-medium' >SOCIAL EVENTS</h1>
                    <p className='mt-7 pr-10 ' >We are a full-service event planning company for any occasion – a Lavish Baby Shower, Birthday Party, Anniversary Party, or Sweet 16. Let us take care of the planning so that you and your guests can relax and enjoy your event stress-free. From location selection to invitation design to the perfect signature drink, we welcome the opportunity to assist you.</p>
                </div>
                <img id='z' src="https://eventcracker.com/wp-content/uploads/2020/06/Beach-wedding-decor-Homepage-IMAGE-1536x1152.jpg" alt="wedding" className='object-cover mt-4 lg:mt-0 rounded-lg ' />
            </div>
            <p className='text-center text-2xl' >and many more..</p>
        </div>
    )
}

export default TethServices