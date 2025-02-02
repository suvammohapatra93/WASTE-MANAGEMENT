import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs"; 
import RefreshHandler from "./RefreshHandler";
import Classifier from "./components/Classifier";

function App() {
  return (
    <>
      <RefreshHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classifier" element={<Classifier/>}/>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} /> 
      </Routes>
    </>
  );
}

export default App;
