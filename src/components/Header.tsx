// src/components/Header.tsx
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-light py-3 mb-4">
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
