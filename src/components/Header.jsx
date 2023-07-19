import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <main>
      <header className="sm:p-0 container mx-auto items-center">
        <nav className=" py-4 border-b-2 container mx-auto sm:flex justify-between items-center bg-white">
          <NavLink to="/">
            <h1 className=" restLogotext text-3xl text-center mb-5 sm:mb-0 text-cente sm:text-2xl md:text-3xl lg:text-3xl">
              Cheesy<span className="textnavlogo">.EAT</span>
            </h1>
          </NavLink>
          <Navbar />
          <div className=" sm:flex gap-3 text-xl leading-9">
            <NavLink className=" transition-all hover:text-orange-500" to="/">
              <FiSearch />
            </NavLink>
            <NavLink
              className=" relative navbar-link cart-trolley--link transition-all hover:text-orange-500"
              to="/cart">
              <FiShoppingCart />
            </NavLink>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
