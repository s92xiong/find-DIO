import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Background from "./components/Background/Background";
import eventHandlers from "./logic/eventHandlers";
import Alert from "./components/Alert/Alert";
import StartGame from "./components/StartGame/StartGame";
import GameWon from "./components/GameWon/GameWon";

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Obtain reference to background image
  const imgRef = useRef();

  // Characters to find in game
  const [characters, setCharacters] = useState(["DIO", "Edward", "Spike"]);

  // Open/close left-click menu
  const [menuOpen, setMenuOpen] = useState(false);

  // If user successfully targets a character, store this character into variable state
  const [currentCharacter, setCurrentCharacter] = useState();

  // Determine if alert box is ON/OFF - provides feedback so user knows if they are successful
  const [alert, setAlert] = useState({ alertOpen: false, success: false });

  // Keep track of whether or not the timer is on
  const [timerOn, setTimerOn] = useState(true);

  //
  const [winTime, setWinTime] = useState({});

  useEffect(() => {
    // Close alert box after 2 seconds
    if (alert.alertOpen) {
      setTimeout(() => {
        setAlert({ alertOpen: false, success: false });
      }, 2000);
    }

    // Game is won if there are no users left in the characters array
    if (characters.length < 1) {
      setGameWon(true);
      setTimerOn(false);
    }
  }, [alert, characters, gameWon]);

  const { 
    clickOnBackground, 
    selectCharacter, 
    closeModal,
  } = eventHandlers(
    imgRef, setMenuOpen, currentCharacter, setCurrentCharacter, 
    characters, setCharacters, alert, setAlert, setTimerOn
  );

  if (gameWon) {
    return (
      <GameWon />
    );
  }

  return (
    <div className="App">
      {
        (!gameStarted) ? 
        <StartGame setGameStarted={setGameStarted} />
        :
        <div className="game-container">
          <Navbar 
            characters={characters}
            setWinTime={setWinTime}
            timerOn={timerOn}
            gameWon={gameWon}
          />
          <Background 
            menuOpen={menuOpen} 
            closeModal={closeModal} 
            handleClick={clickOnBackground} 
            handleRef={imgRef}
          />
          <ContextMenu 
            menuOpen={menuOpen}
            characters={characters} 
            selectCharacter={selectCharacter}
          />
          <Alert alert={alert} currentCharacter={currentCharacter} />
        </div>
      }
    </div>
  );
}

export default App;
