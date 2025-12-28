import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/Mainpage";
import About from "./components/About";
import UnitStills from "./components/UnitStills";
import Events from "./components/Events";
import Industrial from "./components/Industrail";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/unitstills" element={<UnitStills />} />
        <Route path="/events" element={<Events />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
