import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg ${theme === "light" ? "header-light" : "header-dark"}`}
    >
      <button
        className={`navbar-toggler ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {scrollItems.map(({ id, label }) =>
            isHomePage ? (
              <li className="nav-item" key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  className="nav-link"
                >
                  {label}
                </ScrollLink>
              </li>
            ) : (
              <li className="nav-item" key={id}>
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  {label}
                </span>
              </li>
            ),
          )}
          {/* Keep Weather as traditional route */}
          <li className="nav-item">
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Weather
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
