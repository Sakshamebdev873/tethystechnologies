import React from "react";
import Tethnavbar from "../Components/Tethnavbar";
import EventFooter from "../Footer brand/EventFooter";
const TethContact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Tethnavbar />
      <h1 className="font-medium text-5xl text-center mt-7 mb-10 ">
        Tethys Technologies Contact us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
        <div className="flex flex-col mt-7 gap-y-7 px-10 ">
          <img
            src="https://eventcracker.com/wp-content/uploads/2022/02/Sumitra-Sandeep-Wedding-67-450x300.jpg"
            alt="contact"
            className="rounded-lg lg:block hidden object-cover"
          />
          <img
            src="https://eventcracker.com/wp-content/uploads/2022/04/IJSneakPeeksFallWeddingOliviaPeabodyPhotoPortlandOregon-50-450x300.jpg"
            alt="hello"
            className="rounded-lg lg:block hidden object-cover"
          />
        </div>
        <div className="flex flex-col pl-2 px-2 lg:pl-12">
          <form
            onSubmit={handlesubmit}
            className="flex flex-col mb-16 min-h-[20rem] lg:min-w-[25rem] lg:w-[35rem] lg:mt-24 mt-14 gap-4  "
          >
            <h1 className="text-center text-5xl font-medium mb-7 " >Contact us</h1>
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-500 rounded-md p-2 "
            />
            <input
              type="email"
              placeholder="Please Enter your Email"
              className="border border-gray-500 rounded-md p-2 "
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border border-gray-500 rounded-md p-2 "
            />
            <textarea
              rows="4"
              className="border border-gray-400 rounded-md "
              placeholder="Your Query"
            ></textarea>
            <button
              type="submit"
              className="bg-[crimson] text-white w-full p-2 rounded-md   "
            >
              Submit
            </button>
            <h1 className="text-center text-2xl lg:text-5xl font-medium mt-12 " > We value your time </h1>
            <p className="text-center font-medium mt-7 " >We prioritize efficiency without compromising quality, respecting both your learning pace and schedule.</p>
          </form>
        </div>
      </div>
      <EventFooter />
    </>
  );
};

export default TethContact;
