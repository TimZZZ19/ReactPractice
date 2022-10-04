import styles from "./App.module.css";
import { useState } from "react";

const detectHover = (Component) => {
  return () => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Component hovered={hovered} />
      </div>
    );
  };
};

function App(props) {
  return (
    <div className={styles.App}>
      <h1 className={props.hovered && styles["hover-text-red"]}>
        Hover over me and you will see me turn red.
      </h1>
    </div>
  );
}

export default detectHover(App);
