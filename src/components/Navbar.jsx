import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mx-auto items-center justify-center ">
      <div>
        <ul className=" sm:flex leading-8 gap-6 text-xl text-center items-center justify-center mr-2">
          <li>
            <NavLink
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              to="/menu">
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:border-b-2 border-orange-500 transition-all hover:text-orange-500"
              to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
