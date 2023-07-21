import React from 'react'
import {FaPlus,FaMinus} from "react-icons/fa"

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div>
        <div className="amount flex gap-3">
            <button className=' text-gray-500' onClick={()=>{setDecrease()}}> <FaMinus/> </button>
            <p className=' text-xl text-orange-400'>{amount}</p>
            <button className=' text-gray-500' onClick={()=>{setIncrease()}}> <FaPlus/> </button>
        </div>
    </div>
  )
}

export default CartAmountToggle