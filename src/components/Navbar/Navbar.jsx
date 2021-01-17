import React from 'react';
import "./styles/Navbar.css";
import NavButton from './NavButton';
import Timer from './Timer';

function Navbar({ characters, setWinTime, timerOn, gameWon, setMenuOpen }) {
  return (
    <div className="navbar">
      <div className="nav-item">
        <h1><span className="find-h1">Find</span> <span className="gold-title">DIO</span></h1>
      </div>
      <Timer className="nav-item" setWinTime={setWinTime} timerOn={timerOn} gameWon={gameWon} />
      <NavButton className="nav-item" characters={characters} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default Navbar;