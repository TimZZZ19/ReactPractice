import "./App.css";
import { useState } from "react";

const DetectHover = ({ render }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {render(hovered)}
    </div>
  );
};

function App() {
  const render = (hovered) => (
    <div className="App">
      <h1 className={hovered && "hover-text-red"}>
        Hover over me and you will see me turn red.
      </h1>
    </div>
  );

  return <DetectHover render={render} />;
}

export default App;
