import React from "react";
import { Link } from "react-router-dom";
import Carsouel from '../Components/Carsouel'
const FeaturedDesign = () => {
  const blue = [
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
  ];
  return (
    // <div className="mt-4 w-full pb-8">
    //   <div className="grid grid-cols-1 md:grid-cols-2 h-full lg:grid-cols-3 gap-x-12 px-12 ">
    //     <div className="box-1 flex flex-col  mt-7  ">
    //       <img
    //         src="/naksha ghar/5.jpg"
    //         alt="travel"
    //         className=" rounded-md "
    //       />
    //     </div>
    //     <div className="box-1 flex flex-col mt-8  ">
    //       <img
    //         src="/naksha ghar/6.jpg"
    //         alt="travel"
    //         className="object-cover rounded-md "
    //       />

         
    //     </div>
    //     <div className="box-1 flex flex-col mt-8  ">
    //       <img
    //         src="/naksha ghar/7.jpg"
    //         alt="travel"
    //         className="object-cover  rounded-md "
    //       />

         
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12  px-12 ">
    //     <div  className="box-1 flex flex-col mt-8 ">
    //       <img
    //         src="/naksha ghar/9.jpg"
    //         alt="travel"
    //         className=" object-cover rounded-md "
    //       />

          
    //     </div>
    //     <div className="box-1 flex flex-col mt-8 ">
    //       <img
    //         src="/naksha ghar/10.jpg"
    //         alt="travel"
    //         className="object-cover rounded-md "
    //       />

        
    //     </div>
    //     <div className="box-1 flex flex-col  mt-8 ">
    //       <img
    //         src="/naksha ghar/11.jpg"
    //         alt="travel"
    //         className="object-cover  rounded-md "
    //       />

          
    //     </div>
    //   </div>
    // </div>
   <div className="pb-8" >
     <Carsouel images={blue} />
   </div>
  );
};
export default FeaturedDesign;
