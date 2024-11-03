// adding styling to contact
import React from "react";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  return (
    <div
      className="container mt-5 p-4 rounded"
      style={{
        backgroundColor:
          theme === "light" ? "var(--light-gray)" : "var(--deep-navy)",
        color: theme === "light" ? "var(--deep-navy)" : "var(--white)",
      }}
    >
      <h1 className="display-4 text-center mb-4">Get in Touch</h1>
      <p className="lead text-center">
        I'm always open to discussing new opportunities, exciting projects, or
        ways I can contribute to your team. Feel free to reach out if you’d like
        to connect or learn more about my work!
      </p>
      <div className="text-center mt-4">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:tim@timothydavidrice.com" className="contact-link">
            tim@timothydavidrice.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/timothydavidrice/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/timothydavidrice/
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Moth668"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/Moth668
          </a>
        </p>
      </div>
      <p className="text-center mt-5">
        I look forward to hearing from you and exploring how we can work
        together!
      </p>
    </div>
  );
}

export default Contact;
