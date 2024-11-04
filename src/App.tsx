// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div
        className={`d-flex flex-column min-vh-100 ${
          theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
        }`}
      >
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
