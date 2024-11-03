// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
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
            className="text-white"
          >
            GitHub
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://dev.to/moth668" className="text-white">
            DEV
          </a>
        </li>
        <li className="list-inline-item">
          <a href="mailto:youremail@example.com" className="text-white">
            Email
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/realtortimrice/"
            className="text-white"
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
