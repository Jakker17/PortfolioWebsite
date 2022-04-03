import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import InDevelopment from "./components/pages/InDevelopment";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<InDevelopment/>}/>
          <Route path="/projects" element={<InDevelopment/>}/>
          <Route path="/blog" element={<InDevelopment/>}/>
        </Routes>
      </Router>
  );
}

export default App;
