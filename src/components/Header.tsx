// src/components/Header.tsx
import React from "react";
import Navigation from "./Navigation";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <Navigation />
      <button className="btn btn-secondary" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
