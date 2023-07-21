import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, price, amount }) => {
  const {removeItem} = useCartContext();
  const setDecrease = () => {
    // amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setamount(amount + 1) : setamount(stock);
  };

  return (
    <div className=" mt-5 bg-slate-200 py-5 px-1 rounded-lg">
      <div className="img_name grid grid-cols-5 w-full items-center">
        <div className=" flex gap-4">
          <img className=" w-8 " src={image} alt={id} />
          <h1 className=" text-md text-gray-500">{name}</h1>
        </div>
        <div className="price text-md text-gray-500 invisible sm:visible">
          <h1>
            <FormatPrice price={price} />
          </h1>
        </div>
        <div className="quantity">
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
        </div>

        <div className="subtotal invisible sm:visible">
          <h1>
            <FormatPrice price={price * amount} />{" "}
          </h1>
        </div>

        <div className=" text-red-500">
          <FaTrash onClick={()=> removeItem(id)}/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
