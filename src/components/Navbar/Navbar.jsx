import React from 'react';
import "./styles/Navbar.css";
import NavButton from './NavButton';

function Navbar() {
  return (
    <div className="navbar">
      <h1>find <span className="gold-title">DIO</span></h1>
      <h1>00:00</h1>
      <NavButton />
    </div>
  );
}

export default Navbar;