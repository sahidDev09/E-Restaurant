import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FoodReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
  isLoading: false,
  isError: false,
  foods: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvier = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getFoods = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const foods = await res.data;

      dispatch({ type: "SET_API_DATA", payload: foods });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my second API call for singleproduct

  const getsingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getFoods(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getsingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvier, AppContext, useProductContext };
