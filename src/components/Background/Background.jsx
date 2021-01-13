import React from 'react';
import img from "../../images/background.jpg";
import "./Background.css";

function BackgroundImg({ modalOpen, closeModal, handleClick, handleRef }) {
  return (
    <img 
      src={img} 
      className="background-img" 
      alt=""
      onClick={(modalOpen) ? closeModal : handleClick}
      ref={handleRef}
    />
  );
}

export default BackgroundImg;