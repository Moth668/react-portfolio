// src/components/Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={`navbar d-flex justify-content-around p-3 ${
        theme === 'light' ? 'navbar-light' : 'navbar-dark'
      }`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/weather"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        Weather
      </NavLink>
    </nav>
  );
};

export default Navigation;
