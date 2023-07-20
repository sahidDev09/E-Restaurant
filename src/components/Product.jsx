import React from "react";
import { NavLink } from "react-router-dom";
import pizza from "../icons/stricksframe.png";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <div className="cards sm:grid-cols-3 bg-slate-100 hover:bg-slate-200 hover:scale-105 transition-all">
      <div className="flex items-center">
        <div className="">
          <img className="foodimg" src={pizza} alt="" />
        </div>
        <div className=" items-center text-start justify-center ">
          <h1 className=" text-sm sm:text-xl md:text-xl lg:3xl text-center font-bold text-gray-600 uppercase">
            {name}
          </h1>
          <p className=" text-xl text-gray-400">{category}</p>
        </div>
      </div>
      <div className="justify-between items-center p-5 py-5">
        <h1 className=" text-xl text-gray-700 my-3">
          {<FormatPrice price={price} />}
        </h1>
        <NavLink to={`/singleproducts/${id}`}>
          <button className="p-1 px-2 rounded-md bg-orange-400 hover:bg-orange-600 text-white text-center ">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
