import React from 'react';
import dioImg from "../../images/dio.png";
import spikeImg from "../../images/spike.png";
import edImg from "../../images/ed.png";
import CharacterStatus from './CharacterStatus';

function DropdownMenu({ characters }) {

  return (
    <div className="dropdown-menu">

      <div className="character">
        <img src={dioImg} alt="" className="character-img dio-img" />
        <div className="character-info">
          <h3 className="character-name">DIO</h3>
          <p>JoJo's Bizarre Adventure</p>
          <CharacterStatus characters={characters} char="DIO" />
        </div>
      </div>

      <div className="character">
        <img src={edImg} alt="" className="character-img edward-img" />
        <div className="character-info">
          <h3 className="character-name">Edward</h3>
          <p>Fullmetal Alchemist</p>
          <CharacterStatus characters={characters} char="Edward" />
        </div>
      </div>

      <div className="character">
        <img src={spikeImg} alt="" className="character-img spike-img" />
        <div className="character-info">
          <h3 className="character-name">Spike</h3>
          <p >Cowboy Bebop</p>
          <CharacterStatus characters={characters} char="Spike" />
        </div>
      </div>
  
    </div>
  );
}

export default DropdownMenu;