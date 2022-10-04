import "./App.css";
import { useState, useRef, useEffect } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.addEventListener("mouseover", handleMouseOver);
    node.addEventListener("mouseout", handleMouseOut);
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return [ref, hovered];
};

function App() {
  const [hoverRef, hovered] = useHover();

  return (
    <div className="App">
      <h1 ref={hoverRef} className={!hovered ? "" : "hover-text-red"}>
        Hover over me and you will see me turn red.
      </h1>
    </div>
  );
}

export default App;
