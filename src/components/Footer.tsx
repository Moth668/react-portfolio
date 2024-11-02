// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <ul className="list-inline">
        <li className="list-inline-item">
          <a
            href="https://github.com/Moth668/react-portfolio"
            className="text-white"
          >
            GitHub
          </a>
        </li>
        {/* <li className="list-inline-item">
          <a href="https://linkedin.com/in/yourusername" className="text-white">LinkedIn</a>
        </li> */}
        <li className="list-inline-item">
          <a href="https://mail.google.com" className="text-white">
            Email
          </a>
        </li>
      </ul>
      <p>© 2024 Moth668. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
