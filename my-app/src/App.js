import "./App.css";
import ContextProvider from "./store/ContextProvider";
import UI from "./components/UI";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <UI />
      </div>
    </ContextProvider>
  );
}

export default App;
