import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import { useEffect } from "react";

function App() {
  const localStorageSetting = JSON.parse(
    localStorage.getItem("dark-mode") ?? "false"
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorageSetting);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  console.log(isDarkMode);
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100`}>
        <Container
          className={`d-flex flex-column ${
            isDarkMode ? "bg-dark text-light" : "bg-light"
          }`}
          style={{ minHeight: "100vh", minWidth: "100vw" }}
        >
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />{" "}
          <main className="flex-grow-1">
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/weather" element={<Weather />} />{" "}
            </Routes>{" "}
          </main>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
