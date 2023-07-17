import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index 2.css";
import { AppProvier } from "./context/FoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvier>
    <App />
  </AppProvier>
);
