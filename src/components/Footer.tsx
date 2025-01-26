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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=timothydavidrice@gmail.com&su=Portfolio%20Inquiry&body=Hi,%20I%20am%20impressed%20with%20your%20work!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
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
          <a href="https://www.youtube.com/@moth668" className="contact-link">
            YouTube
          </a>
        </li>
      </ul>
      <p>© 2024 Moth668. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
