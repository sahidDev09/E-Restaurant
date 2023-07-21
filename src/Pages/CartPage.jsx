import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, clearCart} = useCartContext();
  console.log("🚀 ~ file: CartPage.jsx:7 ~ CartPage ~ cart:", cart);

  if (cart.length === 0 ){
    return <div className="container mx-auto">
      <h1 className=" text-3xl font-bold text-center h-[300px] pt-[50px] text-gray-400">Cart is Empty! </h1>
      <NavLink to="/menu"> <button className=" py-3 px-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md mt-10">Go Shop</button></NavLink>
    </div>
  }

  return (
    <div className="parent block container mx-auto m-10 p-5 sm:p-0 sm:h-[500px]">
      <div className="tableHead grid grid-cols-5 text-gray-500">
        <p>Item</p>
        <p className=" invisible sm:visible">Price</p>
        <p>Quantity</p>
        <p className=" invisible sm:visible" >Subtotal</p>
        <p>Remove</p>
      </div>
      <hr className=" mt-5" />

      <div className="cartDAta">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <div className=" flex justify-between">
         <NavLink to="/menu">
          <button className=" py-3 px-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md mt-10">Continue Shopping</button>
         </NavLink>
         <button onClick={clearCart} className="py-3 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-10" > Clear cart </button>
      </div>
    </div>
  );
};

export default CartPage;
