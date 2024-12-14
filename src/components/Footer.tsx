// src/components/Footer.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`footer p-3 text-center ${
        theme === "light" ? "footer-light" : "footer-dark"
      }`}
    >
      <a
        href="/Tim_Rice_Resume.pdf"
        className="btn btn-primary mt-3 mb-3"
        download="Tim_Rice_Resume.pdf"
      >
        Download My Resume
      </a>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a
            href="https://github.com/Moth668/react-portfolio"
            className="contact-link"
          >
            GitHub
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://dev.to/moth668" className="contact-link">
            DEV
          </a>
        </li>
        <li className="list-inline-item">
          <a href="mailto:timothydavidrice@gmail.com" className="contact-link">
            Email
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/timothydavidrice/"
            className="contact-link"
          >
            LinkedIn
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.youtube.com/@moth668"
            className="contact-link"
          >
            YouTube
          </a>
        </li>
      </ul>
      <p>© 2024 Moth668. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
