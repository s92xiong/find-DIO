import React from 'react';
import "./Navbar.css";
import ModalButton from './ModalButton';

function Navbar() {
  return (
    <div className="navbar">
      <h1>find <span className="gold-title">DIO</span></h1>
      <h1>00:00</h1>
      <ModalButton />
    </div>
  );
}

export default Navbar;