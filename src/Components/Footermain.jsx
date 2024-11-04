import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <>
      <div className="relative mt-10 border-t-4 border-[#9A0000] mb-8 w-full px-2 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-8 px-2 lg:px-8">
          <div className="flex flex-col items-center mt-8 px-2">
            <h1 className="text-2xl text-center">Our Office Address</h1>
            <p className="text-[14px] text-center mt-4">
              4th floor SGAD COMPLEX ABOVE VISHAL MEGA MART Nainital Road
              Rudrapur-263153, Uttarakhand, India.
            </p>
            <p className="mt-4 text-center flex items-center gap-5 text-xl">
              <MdEmail className="text-[#9A0000] md:text-xs" /> mayank.caddcentre@gmail.com
            </p>
            <p className="text-center flex items-center gap-4 mt-4 cursor-pointer hover:underline">
              <IoMdCall className="text-[#9A0000] md:text-xs" /> +91 9719631909
            </p>
            <p className="text-center flex items-center gap-4 mt-4 cursor-pointer hover:underline">
              <IoMdCall className="text-[#9A0000] md:text-xs" /> +91 9219040125
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 gap-4">
            <h1 className="text-2xl">Our Recruiters</h1>
            <div className="flex items-center flex-wrap gap-4 justify-center mt-4">
              <img
                src="https://i.pinimg.com/474x/7d/8c/6c/7d8c6c0a85b2cfbb9d2785ea6dd18083.jpg"
                alt="Recruiter 1"
                className="h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tuG_PTBiaoFauJfk15cs6n3Oepl4KDmfRg&s"
                alt="Recruiter 2"
                className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1Lozy3YD8qsY-0Ktu37eAcmljJoTsBmNRQ&s"
                alt="Recruiter 3"
                className="h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcWFzka_823Yy8QKTsbiNzHLFF6f0azUPpw&s"
                alt="Recruiter 4"
                className="h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24"
              />
              <p className="mt-4 lg:text-xl">..and many more</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl">Top Stream</h1>
            <ul className="list-none flex flex-col items-center mt-4 gap-4">
              <li>Mechanical CAD</li>
              <li>Civil CAD</li>
              <li>Electrical CAD</li>
              <li>Architectural CAD</li>
            </ul>
          </div>

          <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl text-center">Certifications</h1>
            <p className="mt-4 text-center mx-2 lg:mx-0">
              We provide globally valid NSDC approved Certification
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <img
                src="https://imgs.search.brave.com/0nKJOAfZzTWndgQ4JW1mb_XQ_Upp7HqwiU0V0B0DIRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzLzkyN19p/c285MDAxX2xvZ28u/anBn"
                alt="Certification 1"
                className="h-24 w-32"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0nUrtKtiUjMe39L0XUKOEWJY7HOzpCv3eg&s"
                alt="Certification 2"
                className="h-24 w-36"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPY0MVep7jkETTLZ5jLh1h7LbSQflZgGcaw&s"
                alt="Certification 3"
                className="h-24 w-40 mt-4 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-8 px-2 lg:px-8 mt-10">
        <Link to={'/cad'} onClick={scrollToTop}>
          <img src="/logo.jpg" alt="CAD Logo" className="h-14 lg:h-32" />
        </Link>
        <Link to="/nakshahome" onClick={scrollToTop}>
          <img src="/naksha ghar.png" alt="Naksha Ghar Logo" className="h-14 lg:h-32" />
        </Link>
        <Link to="/" onClick={scrollToTop}>
          <img src="/cc.jpg" alt="Main Logo" className="h-14 lg:h-32" />
        </Link>
        <Link to="/omhome" onClick={scrollToTop}>
          <img src="/Om Sai Travels.png" alt="Om Sai Travels Logo" className="h-14 lg:h-32" />
        </Link>
      </div>

      <p className="text-center lg:text-2xl py-4">
        @CAD Institute of Advanced Skills 2024, All rights reserved
      </p>
    </>
  );
};

export default Footer;
