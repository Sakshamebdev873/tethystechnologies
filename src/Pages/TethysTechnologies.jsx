import React, { useEffect } from "react";
import EventFooter from "../Footer brand/EventFooter";
import Tethnavbar from "../Components/Tethnavbar";
import TethReviews from "../Components/TethReviews";
import TethServices from "./TethServices";
import Brands from "../Components/Brands";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TethysTechnologies = () => {
  useEffect(() => {
    gsap.from("#a", {
     
      opacity: 1,
      duration: 1.2,
      delay:0.1
    }),
    gsap.from("#b", {
      y: 400,
      opacity: 0,
      duration: 1,
    }),
      gsap.from("#c", {
        y: -400,
        opacity: 0,
        duration: 1.4,
      }),
      gsap.from("#d", {
        y: -400,
        opacity: 0,
        duration: 1.7,
      }),
      gsap.from("#e", {
        y: -400,
        opacity: 0,
        duration: 1.7,
      }),
      gsap.from("#f", {
        y: -400,
        opacity: 0,
        duration: 1.7,
      }),
      gsap.from("#g", {
        y: -400,
        opacity: 0,
        duration: 1.7,
      })
      gsap.to("#i", {
        y: -400,
        opacity: 0,
        duration: 1.7,
      })
    // gsap.to('#c',{
    //   opacity:1,
    //   duration:1
    // })
  }, []);
  const even = ["/Event/1.jpg", "/Event/3.jpg", "/Event/4.jpg"];
  return (
    <>
      <Tethnavbar />
      <div className="mt-4 flex items-center justify-center overflow-x-hidden pb-12">
        <img src="/ee.jpg" alt="" />
      </div>
      <div className="mt-4 overflow-x-hidden w-full">
        <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 px-2 lg:px-12 mt-4 ">
          <img
            
            src="/event.webp"
            alt="omsaitravels"
            className="object-cover mt-4 box rounded-lg "
          />
          <div id="b" className="flex flex-col  pl-2 lg:pl-8 ">
            <h1 className="text-5xl font-medium lg:mt-0 mt-8 mb-4 pl-4 lg:pl-12">
              Tethys Technologies
            </h1>
            <p id="c" className="mt-7 pl-4 lg:pl-12 ">
              The objective of Tethys Technologies as an event management
              platform is to provide an all-in-one solution that simplifies the
              complexities of event organization, making it accessible and
              efficient for both small and large-scale events. With tools that
              cover every aspect of the event lifecycle—from planning and
              scheduling to execution and post-event analysis—Tethys aims to
              streamline workflows, automate repetitive tasks, and enhance
              communication among organizers, vendors, and attendees. The
              platform offers features such as real-time attendee management,
              allowing for quick registration, personalized notifications, and
              seamless check-ins. Budget and vendor tracking tools ensure
              transparency and financial control, while built-in engagement
              features—like polls, Q&A sessions, and interactive agendas—keep
              participants involved throughout the event. After the event,
              Tethys provides actionable insights through detailed analytics to
              measure success and improve future planning.
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row  flex-col mt-16 lg:px-6 px-5 justify-center lg:justify-around items-center ">
        
        <img
          id="c"
          src="https://balloonpro.in/wp-content/uploads/2023/08/event-organisers-bangalore.webp"
          alt="trusted"
          className="w-[3rem] h-[3rem] lg:mx-4   "
        />
        <div className=" flex flex-col ">
          <h1 className="text-2xl font-medium lg:px-0 px-4">
            Reliable Quality Service
          </h1>
          <p className="lg:px-0 px-4">
            We never compromise the quality for high-quality to décor services
          </p>
        </div>
       
        <div className="flex items-center lg:flex-row lg:mt-0 mt-8 flex-col justify-between">
          <img
            id="d"
            src="https://balloonpro.in/wp-content/uploads/2023/08/event-organisers-in-bangalore.webp"
            alt="trusted"
            className="w-[3rem] h-[3rem] mx-4 "
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium lg:px-0 px-4 ">
              Most Trusted Company
            </h1>
            <p className="lg:px-0 px-4">
              Our expertise and experience establish us as a top event
              decoration company in Bangalore.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:flex-row lg:mt-0 mt-8 flex-col justify-between  ">
          <img
            id="e"
            src="https://balloonpro.in/wp-content/uploads/2023/08/events-organiser-in-bangalore.webp"
            alt="trusted"
            className="w-[3rem] h-[3rem] mx-4 "
          />
          <div className="flex flex-col  ">
            <h1 className="text-2xl font-medium lg:px-0 px-4  ">
              AFFORDABLE RATES
            </h1>
            <p className="lg:px-0 px-4">
              We are committed to quality and not to high pricing!
            </p>
          </div>
        </div>
      </div>

      {/* <Title text1={"Our Big"} text2={"Organised Events"} />
      <p className="mt-10 text-2xl leading-4 text-center py-7 ">
        We Organise Budget Friendly Events{" "}
      </p> */}
      {/* <Organisedevents /> */}

      <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 px-2 lg:px-12 mt-12 py-14 ">
        <img id="f"
          src="/aa.webp"
          alt="omsaitravels"
          className="object-cover box  mt-4 rounded-lg "
        />
        <div id="g" className="flex flex-col px-2 lg:pl-7 ">
          <h1  className=" text-4xl  lg:text-5xl font-medium mt-6 lg:mt-4 md:mb-4 ">
            What makes us special?
          </h1>
          <p  className="mt-4 ">
            As Tethys Technologies, our uniqueness lies in our commitment to
            revolutionizing event management through a comprehensive,
            user-friendly platform. We empower event planners with tools that
            streamline the entire process—from initial planning and scheduling
            to attendee management and post-event analysis. Our platform
            features real-time collaboration capabilities, allowing teams to
            work seamlessly together regardless of location, enhancing
            communication and efficiency. With advanced automation for tasks
            like registrations and notifications, we minimize administrative
            burdens, enabling planners to focus on creating exceptional
            experiences for attendees. Additionally, our data-driven insights
            provide valuable analytics that help clients evaluate event success
            and refine future strategies. By integrating modern technology with
            a deep understanding of the event management landscape, Tethys
            Technologies stands out as a vital partner for organizations looking
            to elevate their event planning processes and deliver memorable
            experiences.
          </p>
        </div>
      </div>
      <TethReviews />
      <TethServices />
      <Brands />
      <EventFooter />
    </>
  );
};

export default TethysTechnologies;
