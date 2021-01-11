import React from 'react';
import dioImg from "../../images/dio.png";
import spikeImg from "../../images/spike.png";
import edImg from "../../images/ed.png";

function PopupModal() {
  return (
    <div className="popup-modal">

      <div className="character">
        <img src={dioImg} alt="" className="character-img dio-img" />
        <div className="character-info">
          <h3 className="character-name">DIO</h3>
          <p className="anime">JoJo's Bizarre Adventure</p>
        </div>
      </div>

      <div className="character">
        <img src={edImg} alt="" className="character-img edward-img" />
        <div className="character-info">
          <h3 className="character-name">Edward</h3>
          <p className="anime">Full Metal Alchemist</p>
        </div>
      </div>

      <div className="character">
        <img src={spikeImg} alt="" className="character-img spike-img" />
        <div className="character-info">
          <h3 className="character-name">Spike</h3>
          <p className="anime">Cowboy Bebop</p>
        </div>
      </div>
  
    </div>
  );
}

export default PopupModal;