import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import InDevelopment from "./components/pages/InDevelopment";
import Info from "./components/pages/Info";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContext";
import {themes_pages} from './components/pages/theme-context-pages'
import Blog from "./components/pages/Blog";

function App() {
  const [theme, setTheme] = useState("light");

  const getTheme = () => {
    if (theme === "light") {
      return themes_pages.light;
    }
    if (theme === "dimme") {
      return themes_pages.dimme;
    } else {
      return themes_pages.dark;
    }
  };

  return (
    <div className="app">
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Router>
          <Navbar />
          <div style={getTheme()} className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/projects" element={<InDevelopment />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
