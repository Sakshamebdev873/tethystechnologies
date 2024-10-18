import React from "react";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import Carsouel from "../Components/Carsouel";
import FeaturedDesign from "../Components/FeaturedDesign";
import Archfooter from "../Footer brand/Archfooter";
import Archnavbar from "./Archnavbar";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
const Nakshaghar = () => {
  const blue = [
    "/naksha ghar/1.jpg",
    "/naksha ghar/2.jpg",
    "/naksha ghar/3.jpg",
    "/naksha ghar/4.jpg",
  ];
  useGSAP(() => {
    gsap.from('#aa', {
      x: -100,
      opacity: 0,
      duration: 2.9,
    }),
      gsap.from("#bb", {
        y: 100,
        opacity: 0,
        duration: 3.2,
      }),
      gsap.from("#cc", {
        x: -400,
        opacity: 0,
        duration: 3.4,
      }),
      gsap.from("#dd", {
        y: 400,
        opacity: 0,
        duration: 3.6,
      })
  }, [])
  return (
    <>
      <Archnavbar />
      <div className="mt-4 flex items-center justify-center pb-12">
        {/* <Carsouel images={blue} /> */}
        <img src="/nk.jpg" alt="" className="object-cover" />
      </div>
      <div className="mt-4 w-full pb-8 px-2 lg:px-12 ">
        <div className="grid grid-cols-1 gap-x-12 items-center  md:grid-cols-2 px-2 lg:px-10 mt-4 ">
          <img id="aa"
            src="/design.webp"
            alt="omsaitravels"
            className="mt-4 box rounded-lg object-cover "
          />
          <div id="bb" className="flex flex-col gap-x-5 ">
            <h1 className="text-5xl font-medium lg:mt-0 mt-8  ">नक्शा घर</h1>
            <p className=" mt-12 ">
            नक्शा घर is a forward-thinking architecture firm dedicated to
              crafting designs that harmoniously blend beauty and practicality.
              Their ethos revolves around sustainability, as they prioritize
              eco-friendly materials and innovative solutions in all their
              projects. Each design reflects a commitment to understanding the
              unique needs and aspirations of their clients, ensuring a
              personalized experience from concept to completion. With a diverse
              portfolio that spans residential, commercial, and public spaces,
              Naksha Ghar demonstrates versatility and creativity across various
              architectural styles. Their team of skilled professionals
              leverages cutting-edge technology and design trends to deliver
              exceptional results that not only meet but exceed client
              expectations. By fostering strong collaborations and communication
              throughout the design process, Naksha Ghar transforms visions into
              stunning realities, creating spaces that inspire, engage, and
              endure for generations to come.
            </p>
          </div>
        </div>
      </div>
      <Title text1={"Featured"} text2={"Designs"} />
      <div className="mt-7">
        <FeaturedDesign />
      </div>

      <div className="flex items-center flex-col ">
        <div className="flex flex-col items-center lg:mt-12 px-2 lg:px-16 ">
          <h1 className="text-5xl font-medium  ">Achievments</h1>
          <img id="cc" src="https://imgs.search.brave.com/r0ZIXlafMqWjDkHFoaOPBFy0Ta0OyMum5wS-9oFOy94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90ZWFtLWNlbGVi/cmF0ZXMtdGhlaXIt/dHJpdW1waC1ob2xk/aW5nLWNoYW1waW9u/c2hpcC10cm9waHkt/YWdhaW5zdC1iYWNr/ZHJvcC1yYWRpYW50/LXN1bl8xNDk0NTMt/NjQxLmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="" className="object-cover rounded-lg mt-7 " />
          <p className=" mb-12 mt-12 ">
          नक्शा घर has achieved remarkable milestones in its journey as an
            architecture firm, underscoring its commitment to excellence and
            innovation. The company has received several prestigious awards for
            its distinctive and creative designs, highlighting its status in the
            architectural community. Recognized for its dedication to
            sustainability, Naksha Ghar has successfully completed numerous
            projects that achieved certifications like LEED, demonstrating its
            focus on environmentally responsible practices. Client satisfaction
            is a hallmark of Naksha Ghar's success, with a high retention rate
            reflecting its ability to deliver personalized service and
            exceptional quality. The firm’s diverse portfolio encompasses a wide
            range of projects, from elegant residential homes to expansive
            commercial spaces, showcasing its versatility and expertise in
            handling various architectural challenges. Furthermore, Naksha Ghar
            has been at the forefront of integrating advanced technology into
            its design processes, utilizing tools like Building Information
            Modeling (BIM) and virtual reality (VR) for enhanced project
            visualization and collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center lg:px-16 px-2 ">
          <h1 className="text-5xl font-medium  ">Milestones</h1>
          <img id="dd" src="https://imgs.search.brave.com/9pLpIaRXUJqrZH-iNrKlTRpXV0Zxz-plpW_DOUJ3OY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlsZXN0b25ldGVj/aC5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDQvYXJj/aGl0ZWN0cy0zLmpw/Zw" alt="" className="object-cover rounded-lg mt-7 "/>
          <p className=" mt-7 ">
          नक्शा घर has achieved significant milestones since its inception,
            marking its presence as a distinguished architecture firm. Founded
            with a vision to blend innovative design with sustainability, the
            company quickly gained recognition within the industry, completing
            its first major residential project that established its reputation
            for quality and creativity. Over the years, Naksha Ghar has garnered
            multiple prestigious awards for architectural excellence, showcasing
            its commitment to innovative and sustainable practices. The firm
            expanded its services beyond residential and commercial architecture
            to include urban planning and landscape design, highlighting its
            adaptability to market demands. Notably, Naksha Ghar has achieved
            sustainability milestones with several projects receiving LEED and
            other green building certifications, reflecting its dedication to
            environmentally friendly architecture. The integration of advanced
            technologies, such as Building Information Modeling (BIM) and
            virtual reality (VR), has further enhanced its project delivery and
            client engagement. Additionally, Naksha Ghar has actively
            participated in community engagement initiatives, launching projects
            that promote sustainable development and strengthen its ties to
            local communities. The firm has also ventured into international
            collaborations, enriching its design philosophy and expertise
            through partnerships with global architects and firms. These
            milestones collectively illustrate Naksha Ghar's commitment to
            excellence in architecture and its impact on the communities it
            serves.
          </p>
        </div>
      </div>
      <Archfooter />
    </>
  );
};
export default Nakshaghar;
