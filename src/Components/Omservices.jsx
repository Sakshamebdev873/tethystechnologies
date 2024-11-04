import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
const Omservices = () => {
  useGSAP(() => {
    gsap.from("#w", {
      x: -100,
      opacity: 0,
      duration: 4.5,
    }),
      gsap.from("#x", {
        x: 100,
        opacity: 0,
        duration: 4.6,
      }),
      gsap.from("#y", {
        x: -400,
        opacity: 0,
        duration: 4.7,
      }),
      gsap.from("#z", {
        x: 400,
        opacity: 0,
        duration: 4.8,
      });
  }, []);
  return (
    <>
      <div className=" w-full pb-8 mt-20">
        <h1 className=" text-2xl lg:text-4xl font-light text-center mt-6 flex justify-center items-center ">
          Mode of<p></p>{" "}
          <h1 className=" text-2xl lg:text-4xl font-medium px-2 ">
            {" "}
            Transportation{" "}
          </h1>
          <p className="w-8 h-[1px] bg-gray-700"></p>
        </h1>
        <p className="mt-4 lg:mt-7 text-center  ">
          We offer various modes of transportation depending on the destination,
          budget, and type of travel experience desired by the client.
        </p>
      </div>

      <div
        id="w"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 px-12 "
      >
        <div className="box-1 flex flex-col items-center py-5 ">
          <img
            src="https://imgs.search.brave.com/TCl8UQUgz4uMwLJkzYCBmXyyYhRC46CAAsJzLoGLm54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzgxLzIxLzY0/LzM2MF9GXzE4MTIx/NjQwOF9CT1lWWDdm/aVVEaUFHZUdjV3l6/RGExRzU1M3Q3S3ly/TS5qcGc"
            alt="travel"
            className="object-cover rounded-md  "
          />

          <h1 className="text-2xl p-4 text-center ">Rail Travel</h1>
          <p className="text-xl text-center ">
            Experience the Journey, Not Just the Destination – Travel by Rail.
          </p>
        </div>
        <div id="x" className="box-1 flex flex-col items-center py-5 ">
          <img
            src="https://imgs.search.brave.com/VxOOMKlFIq92Uy5gknNvp_VeMaeJM3ZKLG_M85Ui8tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NTkxNjAzMS9waG90/by90aGUtd2F5LXRv/LXRoZS1wbGFuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/alRhbHYwRGRHWmE3/NkU2cXJTakgtMnJt/VHAyTk5IdmRnU2JR/QkVEM3BQOD0"
            alt="travel"
            className="object-cover rounded-md "
          />

          <h1 className="text-2xl p-4 text-center ">Air Travel</h1>
          <p className="text-xl text-center ">
            Fly High, Travel Smart – Your Journey Begins in the Clouds.
          </p>
        </div>

        <div id="z" className="box-1 flex flex-col items-center py-5 ">
          <img
            src="https://delen.s3.ap-southeast-1.amazonaws.com/Leafy_Bus_to_Deploy_50_Electric_Buses_d23998f7ac.webp"
            alt="travel"
            className="object-cover  rounded-md "
          />

          <h1 className="text-2xl p-4 text-center ">Road Travel</h1>
          <p className="text-xl text-center">
            Hit the Road, Embrace Freedom – Every Mile a New Memory.
          </p>
        </div>
      </div>
    </>
  );
};
export default Omservices;
