import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LeftClickModal from "./components/ContextMenu/ContextMenu";
import BackgroundImg from "./components/Background/Background";
import eventHandlers from "./logic/eventHandlers";

function App() {

  // Obtain reference to background image
  const imgRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState(["DIO", "Edward", "Spike"]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState();

  useEffect(() => {
    if (characters.length < 1) console.log("Game is won!");
  });

  const {
    clickOnBackground,
    selectCharacter,
    closeModal,
  } = eventHandlers(imgRef, setModalOpen, currentCharacter, setCurrentCharacter, characters, setCharacters);

  return (
    <div className="App">
      <Navbar />
      <BackgroundImg 
        modalOpen={modalOpen} 
        closeModal={closeModal} 
        handleClick={clickOnBackground} 
        handleRef={imgRef}
      />
      <LeftClickModal 
        modalOpen={modalOpen}
        characters={characters} 
        selectCharacter={selectCharacter}
      />
    </div>
  );
}

export default App;
