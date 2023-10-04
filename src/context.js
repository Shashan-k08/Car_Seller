import React, { useReducer, useContext } from "react";
import {reducer,initialState} from "./reducer";



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  return (
    <AppContext.Provider value={{ state, getNextPage, getPrevPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
