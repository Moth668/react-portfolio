// src/components/Header.tsx
import React from "react";
import Navigation from "./Navigation";
import { useTheme } from "../context/ThemeContext";


const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`d-flex justify-content-between align-items-center p-3 ${
        theme === "light" ? "header-light" : "header-dark"
      }`}
    >
      <Navigation />
      <button
        className={`btn ${
          theme === "light" ? "btn-theme-light" : "btn-theme-dark"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Tim Rice" : "Tim Rice"}
      </button>
    </header>
  );
};

export default Header;
