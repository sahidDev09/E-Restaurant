import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/FoodContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";

const API = "https://api.pujakaitem.com/api/products";

const SinglePage = () => {
  const { getsingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  useEffect(() => {
    getsingleProduct(`${API}?id=${id}`);

    //eslint-disable-next-line
  }, []);

  if (isSingleLoading) {
    return (
      <div className=" text-2xl font-bold container mx-auto text-center mt-6">
        Loading...
      </div>
    );
  }

  return (
    <section className=" leading-8 text-sm">
      <PageNavigation title={name} />
      <div className="mainparant grid grid-cols-2 container mx-auto items-center">
        {/* product for image */}

        <div className="foodsimg">
          <MyImage imgs={image} />
        </div>

        {/* foods data  */}

        <div className="foodsinfo py-32">
          <h2 className=" sm:text-3xl font-bold uppercase ">{name}</h2>
          <p className=" text-gray-500 mt-3">{stars}</p>
          <p className=" text-gray-500 ">({reviews}) reviews </p>
          <p className="pricediv">
            <del>
              <h1>
                <FormatPrice price={price + 250000} />
              </h1>
            </del>
          </p>
          <p>
            <h1 className=" font-semibold text-orange-400">
              {" "}
              Discount Price :
              <FormatPrice price={price} />
            </h1>
          </p>
          <p className=" leading-5 text-gray-400 mb-5">{description}</p>
          <div className=" flex justify-between bg-slate-100 p-2 rounded-md mb-5">
            <div>
              <div>
                <TbTruckDelivery />
              </div>
              <h1 className=" text-[10px] text-gray-400">Free Delivery</h1>
            </div>

            <div>
              <TbReplaceFilled />
              <h1 className=" text-[10px] text-gray-400">Recplacement</h1>
            </div>

            <div>
              <GiFoodTruck />
              <h1 className=" text-[10px] text-gray-400 ">Fresh foods</h1>
            </div>

            <div className=" text-center">
              <MdDinnerDining />
              <h1 className=" text-[10px] text-gray-400 ">Dine-in</h1>
            </div>
          </div>
          {/* end of icon and service */}

          <div>
            <p className=" text-gray-400">
              Available : 
              <span className=" font-bold text-gray-600"> 
                {stock > 0 ? " In Stock" : "Stock Out"} 
              </span> 
            </p>
            <p className=" text-gray-400">
              ID : <span> {id} </span>
            </p>
            <p className=" text-gray-400">
              Brand : <span> {company} </span> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
