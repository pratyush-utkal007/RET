import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/RET">
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
