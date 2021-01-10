import React, { useRef } from "react";
import './App.css';
import findCharacter from "./components/logic/findCharacter";
import Navbar from "./components/UI/Navbar";
import waldo from "./images/waldo.jpg";

function App() {

  // Obtain reference to background image
  const imgRef = useRef();

  const getCoordinates = (e) => {
    // Get current width & height of image from useRef hook
    const imgWidth = Number(imgRef.current.width);
    const imgHeight = Number(imgRef.current.height);

    const navbarOffset = 70; // Height of navbar (pixels)

    // Get x & y coordinates (e.g. pageX in pixels), calculate % relative to img width/height
    const x = e.pageX / imgWidth * 100;
    const y = (e.pageY - navbarOffset) / imgHeight * 100;
    
    findCharacter(x, y);
  };

  return (
    <div className="App">
      <Navbar />
      <img 
        src={waldo} 
        className="waldo-background" 
        alt=""
        onClick={getCoordinates}
        ref={imgRef}
      />
    </div>
  );
}

export default App;
