import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/FoodContext";

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
  } = singleProduct;

  useEffect(() => {
    getsingleProduct(`${API}?id=${id}`);

    //eslint-disable-next-line
  }, []);

  return <div className=" text-4xl container mx-auto font-bold my-7">{name}</div>;
};

export default SinglePage;
