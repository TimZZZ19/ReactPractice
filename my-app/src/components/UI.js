import React, { useContext } from "react";
import styles from "./UI.module.css";
import Context from "../store/Context";

const UI = () => {
  const context = useContext(Context);
  const {
    currentNumber,
    previousNumber,
    increaseNumber,
    decreaseNumber,
    resetNumber,
  } = context;
  return (
    <div className={styles["UI-container"]}>
      <h1>UI</h1>
      <h2>current number : {currentNumber}</h2>
      {previousNumber !== null && previousNumber !== undefined && (
        <h3>previous number : {previousNumber}</h3>
      )}
      <button onClick={() => increaseNumber()}>Increase</button>
      <button onClick={() => decreaseNumber()}>Decrease</button>
      <button onClick={() => resetNumber()}>Reset</button>
    </div>
  );
};

export default UI;
