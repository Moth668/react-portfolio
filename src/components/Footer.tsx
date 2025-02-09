// src/components/Footer.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const gitHub = <FontAwesomeIcon icon={faGithub} />;
const dev = <FontAwesomeIcon icon={faDev} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

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
            {gitHub}
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://dev.to/moth668" className="contact-link">
            {dev}
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=timothydavidrice@gmail.com&su=Portfolio%20Inquiry&body=Hi,%20I%20am%20impressed%20with%20your%20work!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {email}
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/timothydavidrice/"
            className="contact-link"
          >
            {linkedIn}
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.youtube.com/@moth668" className="contact-link">
            {youtube}
          </a>
        </li>
      </ul>
      <p>© 2024 Moth668. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
