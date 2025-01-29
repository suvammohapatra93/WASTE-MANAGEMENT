import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;