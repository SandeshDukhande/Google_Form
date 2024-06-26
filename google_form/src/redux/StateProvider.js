import React, { useContext, useReducer, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialstate, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
      {children})
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
