import React from "react";
import Tethnavbar from "../Components/Tethnavbar";
import EventFooter from "../Footer brand/EventFooter";
import { Link } from "react-router-dom";
const Tethaboutus = () => {
  const pdfUrl = "/MSME CERTIFICATE.pdf"; // Public folder access

  const pdfopener = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Tethnavbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-16 mt-12 ">
        <img
          src="https://eventcracker.com/wp-content/uploads/2023/01/andiejustin-751-441x300.jpg"
          alt="about us"
          className="w-full rounded-lg "
        />
        <div className="flex flex-col pl-4 ">
          <h1 className="text-center lg:mt-0 mt-12 text-xl lg:text-5xl font-medium ">
            {" "}
            Tethys Technologies About us
          </h1>
          <p className="leading-6 mt-8 lg:mt-12 pl-2 lg:pl-7">
            Welcome to Tethys Technologies, where we’re all about taking your
            events from ordinary to extraordinary! I’m Mayank Shrivastava, the
            founder and owner of this amazing wedding and event planning
            company, and I specialize in creating personalized and unforgettable
            experiences for Traditional, Ethnic, Indian and Multi-Cultural
            weddings.With over a decade of experience under my belt, I’ve built
            strong relationships with suppliers all over the world, allowing me
            to negotiate the best deals in every aspect of your event. I pride
            myself on keeping you organized and ensuring that every detail is
            covered, so you can relax and enjoy your special day without
            worry.Together with my team, I am able to plan and execute
            successful events. It was an incredible experience, and I wouldn’t
            trade it for the world. I strive to provide high-quality service to
            each and every client, getting to know them personally and working
            with them to create a vision that represents their unique style and
            taste. After all, it’s all in the details! From pre-party planning
            to wedding rehearsals, engagement parties, traditional/modern
            ceremonies, receptions, and even destination weddings, I offer
            services tailored to fit your specific needs. Whether you’re looking
            for full planning, partial planning or day-of coordination, my team
            and I have the expertise to make your event a success. And if you
            need help managing your guest invitations, RSVPs, timelines, budget
            planning or vendor referrals, I’ve got you covered.  Thank you for considering Tethys Technologies
            for your upcoming event! I’m excited to work with you and can’t wait
            to help make your special day unforgettable.
          </p>
        </div>
      </div>
      <h1 className="font-normal text-5xl mt-7 lg:px-14 px-6 ">Cerfications</h1>
      <p className="mt-5 mb-7 lg:px-14 px-6">
        Tethys Technologies is a government-certified event management company,
        ensuring compliance with industry standards and legal requirements. Our
        operations follow approved business practices with all necessary
        licenses and certifications. We adhere to quality and sustainability
        guidelines, maintaining trust through affiliations with recognized
        industry bodies. With a focus on delivering reliable services, we
        operate in line with government policies and regulatory frameworks,
        ensuring smooth and legally compliant event management.
      </p>
      <Link
        to={"/certificate"}
        className="mt-5 px-14 text-blue-700 cursor-pointer "
        target="_blank"
        rel="noopener noreferrer"
      >
        View ISO Certificate
      </Link>
      <div className="mt-5 px-14 text-blue-700 cursor-pointer ">
        <button onClick={pdfopener}>View MSME Certificate</button>
      </div>
      <EventFooter />
    </>
  );
};

export default Tethaboutus;
