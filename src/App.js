import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import InDevelopment from "./components/pages/InDevelopment";
import Info from "./components/pages/Info";
import { themes_pages } from "./components/pages/theme-context-pages";
import { ThemeContext } from "./components/ThemeContext";

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
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
