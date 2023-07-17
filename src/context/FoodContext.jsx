import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "http://localhost:3001/foods"

const AppProvier = ({ children }) => {


  const getFoods = async (url)=>{
    const res = await axios.get(url);
    console.log("🚀 ~file: FoodContext.jsx ~ line 10 ~ getProducts ~ res", res)

  }

    useEffect(()=>{
      getFoods(API);
    },[])
 
  return (
    <AppContext.Provider value={"sahid ahmed"}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvier, AppContext, useProductContext };
