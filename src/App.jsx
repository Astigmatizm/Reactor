import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reactor from "./components/Reactor";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Portfolio from "./components/PI";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reactor />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
