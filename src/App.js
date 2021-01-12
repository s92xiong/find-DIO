import React, { useRef, useState } from "react";
import './App.css';
import findCharacter from "./logic/findCharacter";
import Navbar from "./components/Navbar/Navbar";
import backgroundImg from "./images/background.jpg";

function App() {

  // Obtain reference to background image
  const imgRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const [chars, setChars] = useState(["DIO", "Edward", "Spike"]);
  const [modalOpen, setModalOpen] = useState(false);
  const [character, setCharacter] = useState();

  const clickOnBackground = (e) => {
    // Access menu list, set popup nearby where user clicks
    const leftClickModal = document.querySelector(".left-click-modal");
    leftClickModal.style.top = `${e.clientY - 2}px`;
    leftClickModal.style.left = `${e.clientX + 18}px`;
    setModalOpen(true);

    // Get current width & height of image from useRef hook
    const imgWidth = Number(imgRef.current.width);
    const imgHeight = Number(imgRef.current.height);
    
    // Get x & y coordinates (e.g. pageX in pixels), calculate % relative to img width/height
    const x = e.pageX / imgWidth * 100;
    const y = (e.pageY - 70) / imgHeight * 100;
    
    setCharacter(findCharacter(x, y));
  };

  const closeModal = () => setModalOpen(false);

  const selectCharacter = (char) => {
    const handler = () => {
      if (character === char) {
        console.log(`You found ${character}!`);
        // Add a modal at the top centre that shows 'You found character!';
      } else {
        console.log(`Keep trying!`);
        // Add a modal at the top centre that shows 'Keep trying!';
      }
      setModalOpen(false);
    };
    return handler;
  };

  return (
    <div className="App">
      
      <Navbar />
      
      <img 
        src={backgroundImg} 
        className="waldo-background" 
        alt=""
        onClick={(modalOpen) ? closeModal : clickOnBackground}
        ref={imgRef}
      />

      {/* Popup Menu List */}
      <ul className={(modalOpen) ? "left-click-modal" : "left-click-modal off"}>
        {
          chars.map((char, i) => (
            <li 
              key={i}
              onClick={selectCharacter(char)}
              className={(chars.length === 1) ?  "modal-li last-item" : "modal-li"}
            >
              {char}
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
