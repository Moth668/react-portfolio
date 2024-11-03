// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div
        className={
          theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
        }
      >
        <Header />
        <main className="flex-grow-1">
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
