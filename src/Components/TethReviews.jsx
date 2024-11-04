import React, { useEffect } from "react";
import Title from "./Title";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const TethReviews = () => {
  useGSAP(() => {
    gsap.from('#e',{
      y:400,
      duration: 4.4,
      delay:0.6,
      opacity:0
    })
    gsap.from('#f',{
      y:200,
      duration: 4.9,
      delay:0.4,
      opacity:0
    })
    gsap.from('#g',{
      y:-50,
      duration: 5.2,
      delay:0.4,
      opacity:0
    })
  }, []);
  return (
    <>
      <Title text1={"Our"} text2={"Reviews"} />
      <div className="w-full pb-8 pt-8 ">
        {/* cadd courses boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3  md:gap-4 px-9 mt-9 ">
          <div id="e" className="box-1 grid grid-cols-1 py-5 w-full ">
            <img
              src="https://imgs.search.brave.com/o9sJq4QCnjn_fRuWss-SSe4mPvtPIDwp1ynve2QosQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b25maWRlbnQtaGFu/ZHNvbWUtZ3V5LXBv/c2luZy1hZ2FpbnN0/LXdoaXRlLXdhbGxf/MTc2NDIwLTMyOTM2/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="travel"
              className="object-cover rounded-md "
            />
            <h1 className="text-2xl p-4 text-center ">Ritesh thakur </h1>
            <p className="text-[14px] mt-4 text-center">
            Tethys Technologies saved me so much time! I’ve used it for several conferences, and the automation tools made registration and ticketing seamless. The attendee tracking features were really helpful too. But, I did have to spend a bit of time learning the platform before I got comfortable with all the features
            </p>
          </div>
          <div id="f" className="box-1 flex flex-col py-5 w-full ">
            <img
              src="https://imgs.search.brave.com/LZS4JkGAEa3sBbPkIlPpnlrjUbL1RIYbDDRQP4ralLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1jYXN1/YWwtZ3V5LXBvc2lu/Zy1zdHVkaW9fMTc2/NDIwLTI4OTA3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
              alt="travel"
              className=" object-cover rounded-md "
            />

            <h1 className="text-2xl p-4 text-center ">Ajay singh</h1>
            <p className="text-[14px] mt-4 text-center">
            I love using Tethys Technologies for our fundraisers. Setting up events is a breeze, and the ability to customize forms makes it easy for us to collect the right information. I also appreciate their customer support—it feels like they’re always ready to help, which really reduces the stress of planning
            </p>
          </div>
          <div id="g" className="box-1 flex flex-col w-full py-5 ">
            <img
              src="https://imgs.search.brave.com/Wz98bGbBP0520SmSFnVITqVjNT2mApYCSjoZwsNyuwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYW4td2Vhcmlu/Zy1nbGFzc2VzLXN3/ZWF0ZXItd2hpdGUt/YmFja2dyb3VuZF84/NjI5OTQtNTk2MDA0/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="travel"
              className="object-cover rounded-lg "
            /> 

            <h1 className="text-2xl p-4 text-center w-full ">Shubham Joshi</h1>
            <p className="text-[14px] text-center mt-4 ">
            I used it to manage a hybrid event, and it worked smoothly. I liked that we could handle everything—registration, check-ins, and budget tracking—all from one place. That said, it took a bit of trial and error to get the hang of all the tools since there’s so much going on in the platform
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-normal text-center pb-8 mt-16 ">
        and more than 100+ customers
      </h1>
      {/* after reviews section   */}
      
    </>
  );
};

export default TethReviews;
