import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import InDevelopment from "./components/pages/InDevelopment";
import Info from "./components/pages/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<InDevelopment />} />
          <Route path="/blog" element={<InDevelopment />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
