import React from "react";
import lostwifi from "../icons/internetlost.png";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex items-center gap-7 container mx-auto w-[100%] h-[100%]">
      <div className="text_info">
        <h1 className=" font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[10rem] ">
          4<span className=" text-red-500">0</span>4
        </h1>
        <h1 className=" text-4xl ">UH OH! Connection Broken! </h1>
        <p className=" mt-3 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          debitis repellendus autem tempora eveniet. Provident neque aliquam
          quam repellat hilo . Provident neque aliquam quam repellat hilo
        </p>
        <NavLink to="/">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white p-3 transition-all px-5 my-4 rounded-lg uppercase">
            Back to Home
          </button>
        </NavLink>
      </div>

      <div>
        <img src={lostwifi} alt="no internet" />
      </div>
    </div>
  );
};

export default ErrorPage;
