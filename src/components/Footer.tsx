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
        href="path/to/your-resume.pdf"
        className="btn btn-primary mt-3 mb-3"
        download
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
          <a href="mailto:youremail@example.com" className="contact-link">
            Email
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/realtortimrice/"
            className="contact-link"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p>© 2024 Moth668. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
