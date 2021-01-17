import React from 'react';
import "./GameStart.css";
import jojoImg from "../../images/Jojo.png";

function GameStart({ setGameStarted, setTimerOn }) {
  
  const startGame = () => {
    setGameStarted(true);
    setTimerOn(true);
  };

  return (
    <div className="game-start">
      <div className="game-start-modal">
        <div className="left-side-modal">
          <h1>Find <span className="dio-span">DIO</span></h1>
          <img className="jojo-img" src={jojoImg} alt=""/>
          <p>Help the Joestars find their enemy <span className="dio-span">DIO</span> and his two minions, <span className="ed-span">Edward Elric</span> and <span className="spike-span">Spike Spiegel</span></p>
        </div>
        <div className="right-side-modal">
          <button onClick={startGame}>Start</button>
          <p className="artist"><a href="https://www.artstation.com/chekavo">Image by Egor Klyuchnyk</a></p>
        </div>
      </div>
    </div>
  );
}

export default GameStart;