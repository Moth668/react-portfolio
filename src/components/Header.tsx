// src/components/Header.tsx
import React from "react";
import Navigation from "./Navigation";
import { useTheme } from "../context/ThemeContext";
interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { theme } = useTheme();

  return (
    <header
      className={`d-flex justify-content-between align-items-center p-3 ${
        theme === "light" ? "header-light" : "header-dark"
      }`}
    >
      <Navigation />
      <h1>{isDarkMode ? "" : ""}</h1>
      <div
        className={isDarkMode ? "Dark Theme" : "Light Theme"}
        onChange={toggleDarkMode}
      >
        <input id="toggle" type="checkbox" checked={isDarkMode} />
        <label htmlFor="toggle" className="slider"></label>
      </div>
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
