import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvier = ({ children }) => {
  return (
    <AppContext.Provider value={"sahid ahmed"}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvier, AppContext, useProductContext };
