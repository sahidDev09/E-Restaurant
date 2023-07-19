import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className=" container mx-auto sm:text-xl items-start md:text-2xl my-5">
      <NavLink to="/"> <span className=" text-orange-400">Home</span> </NavLink>/{title}
    </div>
  );
};

export default PageNavigation;
