import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import Tethnavbar from "./Tethnavbar";
import EventFooter from "../Footer brand/EventFooter";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  useGSAP(() => {
    gsap.from("#b", {
      y: 400,
      opacity: 0,
      delay: 0.5,
      duration: 2,
    });
    gsap.from("#c", {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 2.8,
    });
    gsap.from("#d", {
      y: 200,
      opacity: 0,
      delay: 0.2,
      duration: 3.2,
    });
  }, []);

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
      behavior: "smooth",
    });
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    // Reset visibility on route change
    useEffect(() => {
      setIsVisible(false);
    }, [location]);
  };

  const styles = {
    button: {
      position: "fixed",
      bottom: "50px",
      right: "30px",
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      zIndex: 1000,
    },
  };
  return (
    <>
      <Tethnavbar />
      <div className="mt-4 w-full pb-8">
        <Title text1={"Our"} text2={"Brands"} />
        <div className="flex flex-col gap-2 items-center justify-center   md:gap-4 px-9 mt-12 ">
          <div className="flex flex-col lg:flex-row gap-10 py-5 w-full ">
            <img
              src="/travel.webp"
              alt="travel"
              id="b"
              className="object-cover lg:w-[50%] lg:h-[50%]  rounded-md "
            />

            <div>
              <h1 className="text-4xl p-4 text-center ">Om Sai Travels</h1>
              <p className="text-xl text-center">
                Your Journey, Our Expertise Explore the World with Ease!
              </p>
              <p className=" text-xl mt-2 text-center ">
                Om Sai Travels prides itself on offering end-to-end travel
                solutions to meet the diverse needs of travelers. Whether it’s a
                weekend getaway, a spiritual pilgrimage, or an adventure-filled
                vacation, the agency customizes tours to suit the preferences of
                families, groups, and solo travelers. With a strong network of
                partnerships across the northern region, including hotels,
                transport providers, and local guides, Om Sai Travels ensures
                seamless travel experiences at competitive prices.{" "}
              </p>
              <h1 className="text-4xl mt-8 font-medium text-center">
                Customer Centric Approach{" "}
              </h1>
              <p className="text-xl mt-4 text-center">
                At Om Sai Travels, customer satisfaction is the highest
                priority. The agency emphasizes punctuality, transparent
                pricing, and 24/7 support throughout the journey. Clients are
                provided with well-maintained vehicles, experienced drivers, and
                responsive travel coordinators. From helping travelers choose
                the right itinerary to ensuring their journey runs smoothly, the
                agency focuses on creating stress-free, joyful experiences.
              </p>
              <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl mt-8 font-medium text-center">
                  Sustainable and Responsible Approach
                </h1>
                <p className="text-xl mt-4 text-center">
                  Om Sai Travels also promotes sustainable travel practices by
                  supporting eco-friendly accommodations and encouraging
                  responsible tourism. The agency is committed to preserving the
                  natural beauty and cultural heritage of the destinations it
                  serves, ensuring that future generations can enjoy them as
                  well.
                </p>
                <Link
                  to={"/omsaitravels"}
                  onClick={ScrollToTop}
                  type="button"
                  className="py-4 px-8 rounded-md mt-8 bg-black items-center text-white text-center"
                >
                  Visit us
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col lg:flex-row py-5 ">
            <img
              id="c"
              src="/design.webp"
              alt="travel"
              className="object-cover lg:w-[50%] lg:h-[50%]  rounded-md "
            />

            <div className="flex flex-col  lg:px-12 items-center justify-center">
              <h1 className="text-4xl p-4 text-center ">नक्शा घर</h1>
              <p className="text-xl text-center">
                Building Dreams, One Blueprint at a Time!
              </p>
              <p className=" text-xl mt-2  ">
                As Architect & Civil & survey works (we do make all types of
                layout, maps ,estimates do work for approvals from NHAI & vikas
                pradhikaran & Rera & Zila panchayat)
              </p>
              <p className="mt-4 text-xl  ">
              नक्शा घर is a dynamic architectural company known for its
                innovative designs and commitment to excellence. Specializing in
                creating functional and aesthetically appealing spaces, नक्शा घर offers services ranging from residential and commercial
                architecture to urban planning and interior design. With a focus
                on sustainability and modern trends, the company integrates
                creativity with practicality, ensuring that each project
                reflects the unique vision of its clients. Whether designing
                homes, offices, or public spaces, नक्शा घर aims to deliver
                architectural solutions that are timeless, efficient, and
                environmentally responsible.
              </p>
              <h1 className="text-4xl text-center p-4 ">
                Commitment to Sustainability
              </h1>
              <p className="text-xl mt-4 ">
                In an era of environmental consciousness, नक्शा घर places
                sustainability at the heart of its design philosophy. The
                company incorporates eco-friendly materials, energy-efficient
                technologies, and smart design principles to reduce
                environmental impact. From green roofs and solar-powered
                solutions to optimized ventilation systems, नक्शा घर ensures
                that each project contributes to a more sustainable future. The
                firm works closely with clients from the initial brainstorming
                phase to project completion, ensuring every detail aligns with
                their vision. Whether it’s a residential villa, a retail space,
                or a large-scale commercial complex, नक्शा घर expertise
                spans a variety of architectural projects.
              </p>
              <Link
                to="/nakshaghar"
                onClick={ScrollToTop}
                type="button"
                className="py-4 px-8 rounded-md mt-8 bg-black items-center text-white text-center"
              >
                Visit us
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row py-5  justify-center items-center ">
            <img
              id="d"
              src="/logo.jpg"
              alt="travel"
              className="object-cover lg:w-[50%] lg:h-[50%]  rounded-md  "
            />

            <div className="flex flex-col lg:px-16 items-center justify-center">
              <h1 className="text-2xl p-4 text-center ">
                CAD Institute of Advance Skills
              </h1>
              <p className="text-xl text-center">
                From Ideas to Icons – Learn, Create, Inspire.
              </p>
              <p className="text-xl mt-4 ">
                {" "}
                Our logo design Company empowers aspiring designers to
                master branding and visual identity. Through hands-on learning,
                students explore the art of creating impactful logos from
                scratch.{" "}
              </p>
              <p className="text-xl mt-4 ">
                The CAD Institute of Advanced Skill is dedicated to equipping
                students and professionals with cutting-edge knowledge in
                computer-aided design (CAD) and related technical fields.
                Through industry-relevant courses, hands-on training, and
                expert-led sessions, the institute prepares individuals for
                careers in architecture, engineering, interior design, and
                manufacturing. Its mission is to bridge the gap between
                theoretical learning and practical application, ensuring that
                students are job-ready from day one.
              </p>
              <h1 className="text-4xl text-center p-4 ">
                Comprehensive and Specialized Training
              </h1>
              <p className="text-xl mt-4 ">
                The institute offers a wide range of programs tailored to
                different industries, including 2D drafting, 3D modeling, BIM
                (Building Information Modeling), mechanical CAD, and
                architectural visualization. With a focus on real-world
                applications, the CAD Institute emphasizes project-based
                learning, where students solve industry-relevant problems,
                helping them develop the skills needed to excel in their fields.
              </p>
              <Link
                to="/cad"
                onClick={ScrollToTop}
                className="py-4 px-8 rounded-md mt-8 bg-black items-center text-white text-center"
              >
                Visit us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <EventFooter />
    </>
  );
};
export default Brands;
