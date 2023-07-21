import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  let LocalCartData = localStorage.getItem("sahidCart");


  if (LocalCartData ==[]) {
    return []; 
  }else{
    return JSON.parse(LocalCartData)
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart

  const clearCart = ()=>{
    dispatch({ type: "CLEAR_CART"});
  }

  // to add the data in local storage

  useEffect(() => {
    localStorage.setItem("sahidCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, AddToCart, removeItem , clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
