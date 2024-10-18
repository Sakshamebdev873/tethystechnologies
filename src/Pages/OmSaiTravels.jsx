import React from "react";
import Title from "../Components/Title";
import Omservices from "../Components/Omservices";
import Omfooter from "../Footer brand/Omfooter";
import Omnavbar from "../Components/omnavbar";
import gsap from "gsap";
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
const OmSaiTravels = () => {
  const omsai = [
    "/Travels/1.jpg",
    "/Travels/2.jpg",
    "/Travels/3.jpg",
    "/Travels/4.jpg",
    "/Travels/5.jpg"
  ];
  useGSAP(() => {
    gsap.from('#ab', {
      x: -100,
      opacity: 0,
      duration: 2.5,
    }),
      gsap.from("#bc", {
        y: 100,
        opacity: 0,
        duration: 2.6,
      }),
      gsap.from("#cd", {
        x: -400,
        opacity: 0,
        duration: 2.7,
      }),
      gsap.from("#da", {
        y: 400,
        opacity: 0,
        duration: 2.7,
      })
  }, [])
  return (
    <>
      <Omnavbar />
      <div className="flex items-center justify-center ">
        <img src="/om.jpg" alt="" className="object-cover" />
      </div>
      <div className="mt-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 px-2 lg:px-24 py-5  ">
          <img
            src="/travel.webp"
            alt="omsaitravels"
            className="object-cover mt-4 box rounded-lg "
          />

          <div className="flex flex-col px-2 lg:px-10 justify-center items-center ">
            <h1 id="ab" className="text-4xl font-medium lg:mt-0 mt-6 ">Om Sai Travels</h1>
            <p id="bc" className=" mt-6 ">
              Om Sai Travels is a customer-centric travel agency dedicated to
              curating memorable journeys across a variety of destinations.
              Specializing in domestic and international travel, the agency
              offers a comprehensive range of services, including customized
              holiday packages, flight and hotel bookings, pilgrimage tours,
              honeymoon getaways, and corporate travel management. With a deep
              understanding of client needs, Om Sai Travels ensures smooth,
              hassle-free planning, focusing on every detail to provide a
              seamless travel experience. Beyond vacations, the agency
              emphasizes spiritual journeys, offering well-organized pilgrimage
              tours to renowned temples and holy sites. Om Sai Travels prides
              itself on building long-term relationships with clients through
              transparent pricing, 24/7 customer support, and reliable
              partnerships with airlines, hotels, and transport providers. Their
              mission is to deliver joyful and enriching travel experiences
              while turning dreams into reality—whether it’s a relaxing family
              vacation, a business trip, or a spiritual retreat.
            </p>
          </div>
        </div>
      </div>
      <Title text1={"Our"} text2={"Services"} />
      <p className=" lg:text-2xl leading-4 text-center mt-16 ">
        We Provide our services over North India
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 px-2 lg:px-24 mt-14 ">
        <img id="cd"
          src="https://imgs.search.brave.com/Qos4s2UEZmip0HqZkneUZl2BQ0qYJyimS7BBpSkBHd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFwc29md29y/bGQuY29tL2luZGlh/L25vcnRoLWluZGlh/LW1hcC5qcGc"
          alt="omsaitravels"
          className="object-cover mt-4 rounded-lg "
        />
        <div id="da" className="flex flex-col justify-center px-2 mt-4 lg:mt-0 lg:pl-7 ">
          <h1 className="text-4xl mb-5 font-medium ">Why choose us?</h1>
          <ul className="mt-5">
            We can provide instant, 24/7 support to your customers, answering
            common queries about bookings, destinations, and travel policies.
          </ul>
          <ul className="mt-5">
            Based on customer preferences (budget, travel dates, interests), I
            can recommend personalized travel packages, accommodations, and
            activities.
          </ul>
          <ul className="mt-5">
            We can guide customers through the booking process, from selecting
            destinations to finalizing travel itineraries.
          </ul>
          <ul className="mt-5">
            We can communicate in multiple languages, making it easier to serve
            international customers.
          </ul>
          <h1 className="text-4xl mb-5 mt-8 font-medium ">About us</h1>
          <p className="mt-4 ">
            Om Sai Travels is dedicated to ensuring a stress-free experience for every traveler by offering end-to-end support, from planning to execution. Its transparent pricing policy and partnerships with top airlines, hotels, and transport providers reflect the company’s commitment to delivering value and reliability. Known for its 24/7 customer support and customized itineraries, Om Sai Travels strives to build lasting relationships with clients by transforming travel dreams into memorable journeys filled with comfort and joy.
            Om Sai Travels is a customer-centric travel agency focused on providing high-quality, personalized travel experiences. It offers a range of services such as domestic and international holiday packages, flight and hotel bookings, car rentals, and travel insurance. The agency caters to different travel needs, including family vacations, corporate trips, honeymoons, and pilgrimage tours, with a special emphasis on organizing seamless spiritual journeys to prominent religious sites.
          </p>
          <h1 className="text-4xl font-medium mt-8 ">Our Extra Services </h1>
          <p className="mt-7">
            <ul>
              Help establish and maintain relationships with hotels, airlines,
              and local tour operators to get the best deals for your clients.
            </ul>
            <ul>
              Set up affiliate programs to earn commissions by partnering with
              local tour guides, travel gear companies, or insurance providers.
            </ul>
            <ul>
              Explore partnership opportunities with travel-related businesses
              like visa agencies, car rentals, or event organizers for mutual
              benefits.
            </ul>
          </p>
        </div>
      </div>
      <Omservices />
      <Omfooter />
    </>
  );
};

export default OmSaiTravels;
