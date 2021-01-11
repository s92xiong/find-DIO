import React from 'react';
import "./Navbar.css";
import NavbarModal from './NavbarModal';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Where's DIO?</h1>
      <h1>00:00</h1>
      <NavbarModal />
    </div>
  );
}

export default Navbar;