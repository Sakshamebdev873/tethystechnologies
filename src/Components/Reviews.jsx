import React from "react";
import Title from "./Title";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
const Reviews = () => {
  useGSAP(() => {
    gsap.from("#e", {
      y: 400,
      duration: 3.4,
      delay: 0.6,
      opacity: 0,
    });
    gsap.from("#f", {
      y: 200,
      duration: 3.9,
      delay: 0.4,
      opacity: 0,
    });
    gsap.from("#g", {
      y: -50,
      duration: 4.4,
      delay: 0.4,
      opacity: 0,
    });
  }, []);
  return (
    <>
      <Title text1={"Our"} text2={"Reviews"} />
      <div className="w-full pb-8 pt-8 ">
        {/* cadd courses boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3  md:gap-4 px-9 mt-9 ">
          <div id="e" className="box-1 grid grid-cols-1 py-5 w-full ">
            <img
              src="https://imgs.search.brave.com/plVGkyhc6EL75cNEJGd87yMhzLjC9LZwVGIqUnzz3fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YXBweS15b3VuZy1p/bmRpYW4tc3R1ZGVu/dC13aXRoLWJhY2tw/YWNrLWdsYXNzZXMt/Y2FzdWFsLXN0eWxp/c2gtY2xvc2Utd2Fs/bF80OTYxNjktMTU1/NC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
              alt="travel"
              className="object-cover rounded-md "
            />
            <h1 className="text-2xl p-4 text-center ">Ritesh thakur </h1>
            <p className="text-[14px] mt-4 mx-5 text-center ">
              I’ve been working in the construction industry for a few years,
              and I wanted to expand my skill set with advanced design software.
              The CADD Institute was a great choice because they offer a range
              of software options like Revit and Staad Pro, which are directly
              relevant to my field.I appreciated that the classes were held in
              the evenings, which allowed me to balance work and studies. The
              instructors were experienced and shared practical tips. 
            </p>
          </div>
          <div id="f" className="box-1 flex flex-col py-5 w-full ">
            <img
              src="https://imgs.search.brave.com/e1UPd-PJpDdObI0zUwNmmI6S-qWrxOH156XdjyIp4zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1pbmRpYW4t/c3R1ZGVudC1tYW4t/cmVkLWNoZWNrZXJl/ZC1zaGlydC1qZWFu/cy1wb3NlZC1jaXR5/LXdpdGgtbW9iaWxl/LXBob25lLWhhbmRz/XzYyNzgyOS0yNjc0/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="travel"
              className=" object-cover rounded-md "
            />

            <h1 className="text-2xl p-4 text-center ">Ajay singh</h1>
            <p className="text-[14px] mx-5  mt-4 text-center">
              Students typically find their time at the institute valuable,
              especially if they’re committed to developing their skills. The
              institute also often provides certification upon completion of
              courses, which can be a useful addition to a resume. Many students
              also appreciate the networking opportunities with peers and
              professionals in the industry.
            </p>
          </div>
          <div id="g" className="box-1 flex flex-col w-full py-5 ">
            <img
              src="https://imgs.search.brave.com/nQCJCuVymNwfB4rWOFOwV7cUSy4-O07N8rGvfd126qY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1pbmRp/YW4tYnVzaW5lc3Nt/YW4tc3RhbmRzLWNv/bmZpZGVudGx5LXdp/dGgtY3Jvc3NlZC1h/cm1zLWJyaWdodC1w/aW5rLWJhY2tncm91/bmQtaGUtd2VhcnNf/MTI2ODQ4Ny04MjI4/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="travel"
              className="object-cover rounded-lg "
            />

            <h1 className="text-2xl p-4 text-center w-full ">Shubham Joshi</h1>
            <p className="text-[14px] text-center mx-5 mt-4 ">
              As a recent engineering graduate, I joined CADD Institute of
              Advanced Skills to gain a competitive edge in the job market. I
              enrolled in courses for AutoCAD and CATIA, and I found the
              practical focus extremely beneficial. The hands-on projects made
              it easier to understand complex concepts, and the instructors were
              supportive throughout. While they do offer some placement
              assistance, I felt like I needed to take extra steps on my own to
              secure interviews. Overall, the training was solid, and I feel
              much more prepared for roles in design and manufacturing.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-normal text-center pb-8 mt-16 ">
        and more than 100+ students
      </h1>
      {/* after reviews section   */}
      <section className="relative w-full mt-14 pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 ">
          <div className="flex flex-col items-center ">
            <h1 className="text-2xl mt-10 font-semibold text-center">
              Best AutoCAD Training
            </h1>
            <p className=" lg:text-xl mt-4">
              Cadd Institute of Advanced Skills has effectively imparted
              training to a remarkable number of 100,000+ individuals hailing
              from a wide spectrum of backgrounds encompassing engineering,
              graphics, and management disciplines.
            </p>
            <div className="flex items-center justify-between gap-5 mt-8">
              <Link
                to={"/about"}
                className="rounded-md bg-[#9A0000] lg:text-xl text-black px-5 py-2 "
              >
                About us
              </Link>
              <Link
                to={"/contact"}
                className="rounded-md border border-[#9A0000] lg:text-xl text-[#9A0000] px-5 py-2 "
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://caddmantra.com/wp-content/uploads/2023/12/AutoCad-Courses.jpeg"
              alt="#"
              className="w-full object-cover mt-8 rounded-md "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
