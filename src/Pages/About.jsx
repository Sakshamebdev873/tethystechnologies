import React from "react";
import Navbar from "../Components/Navbar";
// import {Link } from  'react-router-dom'
import Footer from "../Components/Footermain";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex  items-center justify-center gap-2 mt-4 ">
        <h1 className="text-[50px] text-center font-medium">About us</h1>
        <p className="h-[2px] w-16 bg-gray-900 text-center "></p>
      </div>

      <div className="lg:mb-16 mb-0 lg:pb-12 lg:grid lg:items-center lg:grid-cols-2  flex flex-col items-center lg:px-16 px-6 ">
        <img
          src="https://caddmantra.com/wp-content/uploads/2023/08/architectural-blueprints-1-684x1024.jpg"
          alt="about us"
          className="object-cover rounded-md px-2 lg:px-7 lg:mt-16  "
        />
        <div className="flex flex-col  mt-12 lg:mt-0 items-center ">
          <h1 className="text-4xl mb-6 ">About</h1>
          <p>
            With over 15 years of dedication to building skills that matter, CAD
            Institute of Advanced Skill Group has evolved into a thriving global
            network of technical development centers. We’re passionate about
            more than just training—we’re on a mission to shape a powerful,
            skilled workforce ready to meet the challenges of tomorrow. Our
            network spans diverse fields, from engineering and design to
            advanced manufacturing, all focused on practical, job-ready skills
            that give you a real edge. As a technical workforce development
            enterprise, we take pride in offering hands-on learning,
            industry-certified courses, and guidance from experienced
            professionals. Our centers are designed to help you turn your
            ambitions into expertise and connect you to a global community
            that’s equally passionate about innovation and growth. Whether
            you're looking to start a career or level up, we’re here to support
            your journey every step of the way. Join us at CAD Institute of
            Advanced Skill Group, where skill meets opportunity on a global
            scale!
          </p>
          <h1 className="text-4xl mb-5 lg:mt-4 mt-12 ">Advantages of Joining us</h1>
          <p>
            Joining the CAD Institute of Advanced Skill Group offers numerous
            advantages that can significantly enhance your career prospects. Our
            industry-relevant training is designed in collaboration with experts
            to ensure you acquire the skills employers are actively seeking.
            With a focus on hands-on experience, you'll engage in real-world
            projects that build your confidence and set you apart from the
            competition. We understand the demands of modern life, so we offer
            flexible learning options, including evening and weekend classes,
            allowing you to balance your studies with work or other commitments.
            As part of our global network, you’ll connect with peers and
            professionals from diverse backgrounds, opening doors to
            collaborations, mentorships, and job opportunities that transcend
            borders. Upon completion of our courses, you’ll receive
            certifications that validate your skills, and our dedicated career
            services team will support you in navigating the job market. Learn
            from experienced instructors who bring practical insights to the
            classroom, and become part of a vibrant community of like-minded
            individuals who share your passion for growth. By choosing the CAD
            Institute of Advanced Skill Group, you’re not just enrolling in
            courses; you’re investing in a transformative experience that equips
            you with the skills, confidence, and connections needed to thrive in
            your career!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mt-8 mt-2 lg:px-16 px-6 ">
        <h1 className="text-4xl mb-5 mt-4 ">
          What Does CAD Institute of Advanced Skills Stance For?
        </h1>
        <p>
          We want to establish a worldwide community of students and teachers in
          which learning is continuous. We want to match our users with the
          appropriate course. We give them training and placement depending on
          their career goals, the profile, the course's industrial use,
          certification, cost, etc. We are continually expanding and adding new
          regularly online and offline. In the future, we want to enhance and
          broaden our horizons to assist our students in advancing their careers
          and professional objectives.
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
