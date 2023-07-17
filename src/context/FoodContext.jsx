import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FoodReducer";

const AppContext = createContext();

const API = "http://localhost:5500/foods";

const initialstate = {
  isLoading: false,
  isError: false,
  foods: [],
  featureProducts: [],
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

  useEffect(() => {
    getFoods(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvier, AppContext, useProductContext };
