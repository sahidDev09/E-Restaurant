import React from "react";
import kfc from "../companiesIcons/kfc.png";
import cocacola from "../companiesIcons/cocacola.png";
import macd from "../companiesIcons/macdonalds.png";
import foodpanda from "../companiesIcons/foodpanda.png";
import burgerking from "../companiesIcons/burgerking.png";

const Trusted = () => {
  return (
    <>
      <div className=" container mx-auto bg-slate-100 p-10 rounded-lg">
        <h1 className=" text-center text-xl text-gray-500 ">
          Trusted by 1000+ Companies
        </h1>
        <div className="parant_div h-[60%] justify-evenly gap-7  grid sm:grid-cols-5 grid-cols-2 scale-75 items-center opacity-75">
          <div>
            <img className=" w-[250px]" src={foodpanda} alt="foodpanda" />
          </div>

          <div>
            <img
              className=" w-[200px] h-[100px]"
              src={burgerking}
              alt="burgerking"
            />
          </div>

          <div>
            <img className=" w-[220px] h-[180px]" src={kfc} alt="kfc" />
          </div>

          <div>
            <img className=" w-[130px] h-[100px]" src={macd} alt="macdonals" />
          </div>

          <div>
            <img
              className=" w-[200px] h-[100px]"
              src={cocacola}
              alt="cocacola"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
