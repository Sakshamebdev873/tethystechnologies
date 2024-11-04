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
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  md:gap-4 px-9 mt-9 ">
          <div id="e" className="box-1 grid grid-cols-1 py-5 w-full ">
            <img
              src="https://imgs.search.brave.com/plVGkyhc6EL75cNEJGd87yMhzLjC9LZwVGIqUnzz3fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YXBweS15b3VuZy1p/bmRpYW4tc3R1ZGVu/dC13aXRoLWJhY2tw/YWNrLWdsYXNzZXMt/Y2FzdWFsLXN0eWxp/c2gtY2xvc2Utd2Fs/bF80OTYxNjktMTU1/NC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
              alt="travel"
              className="object-cover rounded-md "
            />
            <h1 className="text-2xl p-4 text-center ">Ritesh singh</h1>
            <p className="text-[14px] mb-6  mx-5 text-center ">
              As someone with a few years in the construction industry, I knew I
              needed advanced design skills to keep growing. The CAD Institute
              of Advanced Skills turned out to be the perfect fit! They offer
              exactly what I was looking for—software like Revit and STAAD Pro,
              which are crucial in my field. The best part? Evening classes that
              made it possible to juggle my job and studies. The instructors
              were fantastic, bringing their real-world experience into every
              session with tips that truly made a difference. It’s not just
              about learning software here—it’s about applying it in ways that
              genuinely boost your expertise.
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
              My time at the CAD Institute of Advanced Skills was incredibly
              valuable, and I'd recommend it to anyone serious about developing
              their design skills. The institute offers certifications upon
              course completion, which definitely helped me stand out on my
              resume. Beyond the coursework, the networking was a huge bonus! I
              connected with both peers and industry professionals, making
              friendships and contacts that have already been helpful. If you're
              committed to advancing in CAD and design, this is a fantastic
              place to learn, grow, and make lasting connections.
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
              As a recent engineering graduate, I joined CAD Institute of
              Advanced Skills to gain a competitive edge in the job market. I
              enrolled in courses for CATIA, and I found the practical focus
              extremely beneficial. The hands-on projects made it easier to
              understand complex concepts, and the instructors were supportive
              throughout. While they do offer some placement assistance, I felt
              like I needed to take extra steps on my own to secure interviews.
              Overall, the training was solid, and I feel much more prepared for
              roles in design and manufacturing.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-normal text-center pb-8 mt-16 ">
        and more than 10,000+ students
      </h1>
      {/* after reviews section   */}
      <section className="relative w-full mt-14 pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 ">
          <div className="flex flex-col items-center ">
            <h1 className="text-2xl mt-10 font-semibold text-center">
              Best CAD Training
            </h1>
            <p className="  mt-8">
              CAD Institute of Advanced Skill has successfully trained over
              10,000 individuals from various fields, including engineering,
              graphics, and management. Our students come from diverse
              backgrounds, each with unique career goals, and we’re proud to
              help them build the practical skills they need to thrive. Whether
              you’re an engineer looking to enhance your technical expertise, a
              graphic designer expanding your creative toolkit, or a management
              professional adding a design edge, CAD Institute of Advanced Skill
              provides industry-focused training that combines knowledge with
              hands-on experience. Join us and experience how the right skills
              can transform your professional path!
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
            <div className="flex  lg:grid  gap-4 lg:gap-0 lg:grid-cols-3 mt-12 px-4 ">
              <div className="flex flex-col">
                <p className="text-2xl  lg:text-5xl font-semibold ">15+</p>
                <p className="text-[20px]  lg:text-xl font-medium mt-8">
                  Years in training
                </p>
              </div>
              <div className="flex flex-col">
                <p className=" text-2xl lg:text-5xl font-semibold ">4.9+</p>
                <p className="text-[20px] lg:text-xl font-medium mt-8">
                  Google Rating
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl  lg:text-5xl font-semibold ">10000+</p>
                <p className="text-[20px]  lg:text-xl font-medium mt-8">
                  Trained Professionals
                </p>
              </div>
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
