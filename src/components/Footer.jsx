import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="mainfooter" className=" bg-slate-500 mt-20">
      <section>
        <div
          id="uppersection"
          className=" flex justify-between container mx-auto p-5">
          <div className="logo">
            <NavLink to="/">
              <h1 className=" text-white restLogotext text-2xl text-center mb-5 sm:mb-0 text-cente sm:text-2xl md:text-2xl lg:text-2xl">
                Cheesy<span className=" text-red-500">.EAT</span>
              </h1>
            </NavLink>
          </div>
          <div className="socialmedia flex gap-6 text-4xl items-center justify-evenly ">
            <NavLink className="text-white" to="https://www.facebook.com/">
              <FaFacebook />
            </NavLink>
            <NavLink
              className="text-white"
              to="https://www.instagram.com/accounts/login/">
              <FaInstagram />
            </NavLink>
            <NavLink className=" text-white" to="https://www.linkedin.com/">
              <FaLinkedin />
            </NavLink>
            <NavLink className=" text-white" to="https://www.youtube.com/">
              <FaYoutube />
            </NavLink>
          </div>
        </div>
        <hr className="border-b-1 border-gray-400 mb-5" />
      </section>

      <section className=" pb-7">
        <div className=" sm:flex justify-around pb-5 text-gray-300">
          <div>
            <h1 className=" text-xl font-bold text-white">Owner's</h1>
            <ul>
              <li>Sahid</li>
              <li>Joffie</li>
              <li>Ahmed</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">Best foods</h1>
            <ul>
              <li>Pizza</li>
              <li>Burger</li>
              <li>Juice</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">Services</h1>
            <ul>
              <li>Dine-in</li>
              <li>Home delivery</li>
              <li>Offers</li>
            </ul>
          </div>

          <div className="subs ">
            <h1 className="text-xl font-bold text-white">Subscribe us</h1>
            <input
              className=" w-[100%] py-1 rounded-sm bg-transparent border-gray-50 border-[1px]"
              type="text"
              placeholder=" Enter your email"
            />
            <input
              className=" w-[100%] bg-white text-black mt-3 py-1 rounded-sm"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
