import React from 'react';
import img from "../../images/background.jpg";
import "./Background.css";

function BackgroundImg({ menuOpen, setMenuOpen, handleClick, handleRef }) {

  const closeModal = () => setMenuOpen(false);

  return (
    <img 
      src={img} 
      className="background-img" 
      alt=""
      onClick={(menuOpen) ? closeModal : handleClick}
      ref={handleRef}
    />
  );
}

export default BackgroundImg;