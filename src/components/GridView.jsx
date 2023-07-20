import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  console.log("🚀 ~ file: GridView.jsx:5 ~ GridView ~ products:", products)
  return (
    <div>
      <div className=" grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mt-10">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
