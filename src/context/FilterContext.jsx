import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./FoodContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  filter: {
    text: "",
    category: "all",
    company: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { foods } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSrcFilter = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to sort the products

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  },[foods, state.filter]);

  // Grid view Products code

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: foods });
  }, [foods]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, handleSrcFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
