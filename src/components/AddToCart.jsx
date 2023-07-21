import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const {AddToCart} = useCartContext();
  const { id, colors, stock } = product;
  const [amount, setamount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  const setIncrease = () => {
    amount < stock ? setamount(amount + 1) : setamount(stock);
  };

  // add to cart

  return (
    <div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => AddToCart(id, amount, product)}>
        <button className=" my-5 py-2 rounded-lg px-5 bg-orange-400 uppercase font-semibold text-white">
          Add to Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
