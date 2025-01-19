// src/components/Header.tsx
import React from "react";
import Navigation from "./Navigation";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`d-flex justify-content-between align-items-center p-3 ${
        theme === "light" ? "header-light" : "header-dark"
      }`}
    >
      <Navigation />
      {/* <button
        className={`btn ${
          theme === "light" ? "btn-theme-light" : "btn-theme-dark"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Tim Rice." : "Tim Rice."}
      </button> */}

      <a
        href="/Tim_Rice_Resume.pdf"
        className="btn btn-primary mt-3 mb-3"
        download="Tim_Rice_Resume.pdf"
      >
        Download My Resume
      </a>
    </header>
  );
};

export default Header;
