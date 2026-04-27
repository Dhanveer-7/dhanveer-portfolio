import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">DM</div>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
