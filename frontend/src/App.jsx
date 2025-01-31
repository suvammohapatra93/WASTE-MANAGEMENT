import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RefreshHandler from "./RefreshHandler";

function App() {
  return (
    <>
    <RefreshHandler/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
