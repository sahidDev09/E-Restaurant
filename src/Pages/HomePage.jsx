import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Hero/>;
      <Services/>
      <Trusted/>
      <FeaturedProducts/>
    </div>
  );
};

export default HomePage;
