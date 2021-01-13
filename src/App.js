import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Background from "./components/Background/Background";
import eventHandlers from "./logic/eventHandlers";
import Alert from "./components/Alert/Alert";

function App() {

  // Obtain reference to background image
  const imgRef = useRef();

  // Characters to find in game
  const [characters, setCharacters] = useState(["DIO", "Edward", "Spike"]);

  // Open/close left-click menu
  const [menuOpen, setMenuOpen] = useState(false);

  // If user successfully targets a character, store this character into variable state
  const [currentCharacter, setCurrentCharacter] = useState();

  // Determine if alert box is ON/OFF - provides feedback so user knows if they are successful
  const [alert, setAlert] = useState({
    alertOpen: false,
    success: false,
  });

  useEffect(() => {
    // Close alert box after 2 seconds
    if (alert.alertOpen) {
      setTimeout(() => {
        setAlert({ alertOpen: false, success: false });
      }, 2000);
    }

    // If user has found all of the characters in the characters array
    if (characters.length < 1) console.log("Game is won!");
  });

  const {
    clickOnBackground, selectCharacter, closeModal,
  } = eventHandlers(
    imgRef, setMenuOpen, currentCharacter, setCurrentCharacter, 
    characters, setCharacters, alert, setAlert,
  );

  return (
    <div className="App">
      <Navbar />
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
  );
}

export default App;
