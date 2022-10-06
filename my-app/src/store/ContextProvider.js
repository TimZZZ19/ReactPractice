import React, { useState, useRef, useEffect } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const previousNumberRef = useRef(null);

  useEffect(() => {
    previousNumberRef.current = currentNumber;
  }, [currentNumber]);

  const contextObject = {
    currentNumber,
    previousNumber: previousNumberRef.current,
    increaseNumber: () => setCurrentNumber((curr) => curr + 1),
    decreaseNumber: () => setCurrentNumber((curr) => curr - 1),
    resetNumber: () => setCurrentNumber(0),
  };

  return <Context.Provider value={contextObject}>{children}</Context.Provider>;
};

export default ContextProvider;
