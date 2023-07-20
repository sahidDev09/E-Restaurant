import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index 2.css";
import { AppProvier } from "./context/FoodContext";
import { FilterContextProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvier>
    <FilterContextProvider>
      <App /> 
    </FilterContextProvider>
  </AppProvier>
);
