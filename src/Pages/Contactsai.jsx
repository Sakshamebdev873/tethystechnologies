import React from "react";
import Omfooter from "../Footer brand/Omfooter";
import Omnavbar from "../Components/omnavbar";
const Contactsai = () => {
  return (
    <>
      <Omnavbar />
      <div className="grid grid-cols-1 lg:grid-cols-2  mt-8 px-2 lg:px-12 ">
        
          <img
            src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/contact%20us%20-%20bp3.jpg?itok=NHv3w2Dl"
            alt="contact us"
            className="object-cover rounded-lg "
          />
       
        <div className="flex flex-col lg:pl-8 px-2 " >
        <h1 className="text-center text-4xl lg:mt-0 mt-4 lg:text-6xl font-medium  ">Contact us</h1>
        <p className="mt-5  " >
          Have more questions? We’ll find you the answers. Whether you’re ready
          to book a trip now or simply want to learn more about what Om Sai
          Travel has to offer, our consultants are available to help.
        </p>
        <h1 className="text-4xl font-medium mt-7 " >
          New Bookings
        </h1>
        <p className="mt-7 pb-7" ><p className="text-blue-500 cursor-pointer mb-7 " >+91 9719631909        </p>
          Ready to pack your bags for a vacation? Give us call to be matched with a travel consultant who will craft a trip just for you.</p>
        <h1 className="text-4xl font-medium  " >Connect With a Consultant</h1>
        <p className="mt-7 pb-7" >Work with an expert close to you or based on destination expertise. Our team is available in-store or virtually.</p>
        <h1 className="text-4xl font-medium  " >Connect In Store</h1>
        <p className="mt-7 pb-7 " >Visit us in our Office Address</p>
        <h1 className="text-4xl font-medium " >Connect By Email</h1>
        <p className="mt-7 pb-7 " ><p className="text-blue-500 cursor-pointer " >mayank.caddcenter@gmail.com</p> <br/>Get a quote or other info by sending us a message. Our travel consultants will contact you within 1 business day.</p>
        </div>
      </div>
      <Omfooter />
    </>
  );
};

export default Contactsai;
