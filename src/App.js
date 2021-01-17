import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Background from "./components/Background/Background";
import eventHandlers from "./logic/eventHandlers";
import Alert from "./components/Alert/Alert";
import GameStart from "./components/GameStart/GameStart";
import GameWon from "./components/GameWon/GameWon";
import getHighScores from "./logic/getHighScores";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Obtain reference to background image
  const imgRef = useRef();

  // Characters to find in game
  const [characters, setCharacters] = useState(["DIO", "Edward", "Spike"]);

  // Left-click menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Character that has been found in game
  const [currentCharacter, setCurrentCharacter] = useState();

  // Determine if alert box is ON/OFF - provides feedback so user knows if they are successful
  const [alert, setAlert] = useState({ alertOpen: false, success: false });

  // Track timer
  const [timerOn, setTimerOn] = useState(true);

  // Record win time as a string "00:00:00" and as an integer in seconds
  const [winTime, setWinTime] = useState({});

  // Input field to add HighScore
  const [inputHighScore, setInputHighScore] = useState("");

  // Array of highscores obtained from Firestore db in real time
  const [highScores, setHighScores] = useState();

  useEffect(() => {
    // Close alert box after 2 seconds
    if (alert.alertOpen) {
      setTimeout(() => {
        setAlert({ alertOpen: false, success: false });
      }, 2000);
    }

    if (gameWon) {
      getHighScores(setHighScores);
      setGameWon(true);
      setTimerOn(false);
    }
  }, [alert, gameWon]);

  const {
    // Event handler methods
    clickOnBackground, selectCharacter, closeModal, restartGame, submitHighScore 
  } = eventHandlers(
    // State arguments
    imgRef, setMenuOpen, currentCharacter, setCurrentCharacter, 
    characters, setCharacters, alert, setAlert, setGameStarted, 
    setGameWon, winTime, setWinTime, inputHighScore, setInputHighScore
  );

  if (gameWon) {
    return (
      <GameWon 
        restartGame={restartGame}
        highScores={highScores}
        winTime={winTime}
        setInputHighScore={setInputHighScore}
        submitHighScore={submitHighScore}
      />
    );
  }

  return (
    <div className="App">
      {
        (!gameStarted) ? 
        <GameStart setGameStarted={setGameStarted} setTimerOn={setTimerOn} />
        :
        <div className="game-container">
          <Navbar 
            characters={characters}
            setWinTime={setWinTime}
            timerOn={timerOn}
            gameWon={gameWon}
            setMenuOpen={setMenuOpen}
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
