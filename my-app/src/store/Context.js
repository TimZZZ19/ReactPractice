import React from "react";

const contextObject = {
  currentNumber: 0,
  previousNumber: null,
  increaseNumber: () => {},
  decreaseNumber: () => {},
  resetNumber: () => {},
};

const Context = React.createContext(contextObject);

export default Context;
