import React from "react";
import Navbar from "../Components/Navbar";
import {Link } from  'react-router-dom'
import Footer from "../Components/Footermain";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex  items-center justify-center gap-2 mt-4 ">
        <h1 className="text-[50px] text-center font-medium">About us</h1>
        <p className="h-[2px] w-16 bg-gray-900 text-center "></p>
      </div>

      <div className="lg:mb-16 mb-0 lg:pb-12 lg:grid lg:items-center lg:grid-cols-2 gap-x-4 flex flex-col items-center lg:px-16 px-6 ">
        <img
          src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20164.jpg?size=626&ext=jpg&ga=GA1.1.1489463704.1727353803&semt=ais_hybrid"
          alt="about us"
          className="object-cover rounded-md  "
        />
        <div className="flex flex-col lg:mt-4 mt-12 items-center ">
          <h1 className="text-4xl mb-6 lg ">About</h1>
          <p>
            CADD Institute of Advance Skill Group is a global network of diversified skill
            development centers. We are a technical workforce development
            enterprise. CADD Centre Training services is the training division
            of CADD Centre Group.
          </p>
          <h1 className="text-4xl mb-5 lg:mt-4 mt-12 ">Our History</h1>
          <p>
            Over the past decade, we have witnessed an extraordinary surge in
            technology that has brought about a profound transformation in
            industries on a global scale. The field of engineering has
            consistently enticed individuals in search of promising and
            rewarding careers. Each year, thousands of aspiring engineers
            complete their academic journeys, carrying with them the aspiration
            to make a significant impact on the world. However, in today’s
            fiercely competitive landscape, securing the ideal job with a
            commensurate salary can appear as an imposing challenge.
            Nonetheless, at CADD Institute of Advance Skill, we have chosen to confront
            this challenge in a distinctive manner.I would like to take a moment
            to pay homage to the memory of my inspiration and mentor, the late
            Shri Satya Prakash Singhal, who envisioned a platform where students
            could engage with technology in an unconventional manner. It is
            through his visionary spirit and unwavering dedication that we have
            given rise to SICCES and its flagship institute, CADD Mantra. I am
            thrilled to share that our team’s tireless efforts, combined with my
            father’s visionary leadership and my own fervor for technology, have
            positioned us in a league of our own, setting us apart from our
            contemporaries.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mt-8 mt-2 lg:px-16 px-6 ">
        <h1 className="text-4xl mb-5 mt-4 ">
          What Does CADD Centre Group Stance For?
        </h1>
        <p>
          We want to establish a worldwide community of students and teachers in
          which learning is continuous. We want to match our users with the
          appropriate course. We give them training and placement depending on
          their career goals, the profile, the course's industrial use,
          certification, cost, etc. CADD Centre offers CAD/ CAE/project
          management/ IT/industrial design/ Interior design / Fashion Design/
          Business skills. We are continually expanding and adding new regularly
          online and offline. In the future, we want to enhance and broaden our
          horizons to assist our students in advancing their careers and
          professional objectives.
        </p>
      </div>
      

      <div className="bg-[#616060] pb-16 pt-16 flex flex-col mt-12 items-center justify-center ">
        <h1 className="text-4xl text-center text-white ">
          Ensure You Stay Well-Informed and Explore Our Latest Offerings <br />{" "}
          – Subscribe to Our Newsletter Today!
        </h1>
        <p className="text-center mt-5 text-white">
          Enroll in our newsletter to gain access to comprehensive insights,
          timely updates, and exclusive access to exciting new features. Be
          among the <br />
          first to receive updates on the latest developments in our sphere.
        </p>
        <div className="flex items-center mt-4 ">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-500 rounded-md  bg-[##616060] py-4 pr-20   text-center  "
          />
          <button
            type="button"
            className="text-center bg-[crimson] text-white p-4  "
          >
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
