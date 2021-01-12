import React from 'react';
import "./Navbar.css";
import OpenModalButton from './OpenModalButton';

function Navbar() {
  return (
    <div className="navbar">
      <h1>find <span className="gold-title">DIO</span></h1>
      <h1>00:00</h1>
      <OpenModalButton />
    </div>
  );
}

export default Navbar;