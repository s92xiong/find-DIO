import React from 'react';
import "./StartGame.css";
import jojoImg from "../../images/Jojo.png";

// import dioImg from "../../images/dio.png";
// import spikeImg from "../../images/spike.png";
// import edImg from "../../images/ed.png";
// import Character from './Character';

function StartGame({ setGameStarted }) {

  const startGame = () => setGameStarted(true);

  return (
    <div className="start-game">
      <div className="start-game-modal">
        <div className="left-side-modal">
          <h1>find <span className="dio-span">DIO</span></h1>
          <img className="jojo-img" src={jojoImg} alt=""/>
          <p>Help the Joestars find their enemy <span className="dio-span">DIO</span> and his two minions, <span className="ed-span">Edward Elric</span> and <span className="spike-span">Spike Spiegel</span></p>
        </div>
        <div className="right-side-modal">
          <button onClick={startGame}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default StartGame;