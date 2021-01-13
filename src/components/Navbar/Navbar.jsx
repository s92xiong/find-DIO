import React from 'react';
import "./styles/Navbar.css";
import NavButton from './NavButton';

function Navbar({ characters }) {
  return (
    <div className="navbar">
      <div className="nav-item">
        <h1>find <span className="gold-title">DIO</span></h1>
      </div>
      <div className="nav-item">
        <h1>00:00</h1>
      </div>
      <NavButton className="nav-item" characters={characters} />
    </div>
  );
}

export default Navbar;