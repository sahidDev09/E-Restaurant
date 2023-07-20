import React from "react";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import { useFilterContext } from "../context/FilterContext";

const MenuPage = () => {
  const { filter_products } = useFilterContext();

  return (
    <section className=" p-10 sm:p-0">
      <div>
        <FilterSection />
      </div>
      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default MenuPage;
