import React from "react";
import discount from "../icons/discount.png";
import fresh from "../icons/fresh.png";
import delivery from "../icons/delivery.png";

const Services = () => {
  return (
    <section className=" container mx-auto py-10">
      <div
        id="mainperentDiv"
        className=" grid sm:grid-cols-3 items-center justify-around gap-5">
        <div
          id="card1"
          className=" flex items-center bg-slate-100 transition-all hover:bg-slate-200 p-5 rounded-xl hover:scale-[102%]">
          <div className=" mr-3">
            <img src={discount} alt="discount" />
          </div>
          <div>
            <h1 className=" font-bold">Discount Voucher</h1>
            <p className=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Soluta, eos.
            </p>
            <button className="mt-2 text-orange-400 transition-all hover:text-orange-500 hover:border-orange-500 border-b-4">
              See more
            </button>
          </div>
        </div>

        <div
          id="card2"
          className=" flex items-center bg-slate-100 transition-all hover:bg-slate-200 p-5  rounded-xl hover:scale-[102%]">
          <div className=" mr-3">
            <img src={fresh} alt="discount" />
          </div>
          <div>
            <h1 className=" font-bold">Fresh Healthy Food</h1>
            <p className=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Soluta, eos.
            </p>
            <button className="mt-2 text-orange-400 transition-all hover:text-orange-500 hover:border-orange-500 border-b-4">
              See more
            </button>
          </div>
        </div>

        <div
          id="card3"
          className=" flex items-center bg-slate-100 transition-all hover:bg-slate-200 p-4 rounded-xl hover:scale-[102%]">
          <div className=" mr-3">
            <img src={delivery} alt="discount" />
          </div>
          <div>
            <h1 className=" font-bold">Fast Home Delivery</h1>
            <p className=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Soluta, eos.
            </p>
            <button className="mt-2 text-orange-400 transition-all hover:text-orange-500 hover:border-orange-500 border-b-4">
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
