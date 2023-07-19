import React from "react";
import { NavLink } from "react-router-dom";
import pizza from "../icons/stricksframe.png";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <div className="bg-slate-100 transition-all hover:bg-slate-200 p-4 rounded-xl hover:scale-[102%]">
      <div>
        <div className="">
          <img className="w-[200px] mx-auto mb-5" src={image} alt="" />
        </div>
        <h1 className=" text-xl font-bold text-orange-500 uppercase">{name}</h1>
        <p className=" text-xl text-gray-400">{category}</p>
      </div>
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl text-orange-400 ">
          {<FormatPrice price={price} />}
        </h1>
        <NavLink to={`/singleproducts/${id}`}>
          <button className=" text-xl py-2 px-4 rounded-lg bg-orange-400 hover:bg-orange-600 text-white text-center uppercase">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
