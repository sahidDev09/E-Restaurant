import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products } />;
  }
};

export default ProductList;
