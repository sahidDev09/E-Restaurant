import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/FoodContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";

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
    <section className=" leading-8 text-sm p-10 sm:p-0">
      <PageNavigation title={name} />
      <div className="mainparant grid sm:grid-cols-2 justify-between sm:gap-10 container mx-auto items-center">
        {/* product for image */}

        <div className="foodsimg">
          <MyImage amazonImages={image} />
        </div>

        {/* foods data  */}

        <div className="foodsinfo sm:py-32">
          <h2 className=" sm:text-3xl font-bold uppercase ">{name}</h2>
          <Star stars={stars} reviews={reviews} />
          <p className="pricediv">
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="font-semibold text-orange-400">
            Discount Price :
            <FormatPrice price={price} />
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
          <hr className=" border-b-1 border-gray-300 my-2" />
          {stock > 0 && <AddToCart product = {singleProduct} />}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
