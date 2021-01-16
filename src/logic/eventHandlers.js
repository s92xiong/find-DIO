import { firestore } from "../firebase";
import findCharacter from "./findCharacter";

const eventHandlers = (
    imgRef, setMenuOpen, currentCharacter, setCurrentCharacter, 
    characters, setCharacters, alert, setAlert, setGameStarted, 
    setGameWon, winTime, setWinTime, inputHighScore
  ) => {


  const clickOnBackground = (e) => {
    // User can open left-click menu only if the alert box is closed
    if (alert.alertOpen && alert.success) return;

    // Access menu list, set popup nearby where user clicks
    const clickModal = document.querySelector(".left-click-modal");
    clickModal.style.top = `${e.clientY - 2}px`;
    clickModal.style.left = `${e.clientX + 18}px`;
    setMenuOpen(true);

    // Get current width & height of image from useRef hook
    const imgWidth = Number(imgRef.current.width);
    const imgHeight = Number(imgRef.current.height);
    
    // Get x & y coordinates (e.g. pageX in pixels), calculate % relative to img width/height
    const x = e.pageX / imgWidth * 100;
    const y = (e.pageY - 70) / imgHeight * 100; // Subtract height of navbar (70px)
    
    setCurrentCharacter(findCharacter(x, y));
  };


  const selectCharacter = (character) => {
    const handler = () => {
      // Close left-click menu after selecting a character
      setMenuOpen(false); 
      
      // Alert the user that they did not find the character
      if (currentCharacter !== character) {
        return setAlert({ 
          alertOpen: true, 
          success: false 
        });
      }
      
      // If user finds the character, remove character from [characters]
      const newCharacters = characters.filter(char => char !== currentCharacter);
      if (newCharacters.length < 1) setGameWon(true);
      setCharacters(newCharacters);

      // Alert user for successfully finding character
      return setAlert({ 
        alertOpen: true, 
        success: true 
      });
    };
    return handler;
  };

  const closeModal = () => setMenuOpen(false);
  
  const restartGame = () => {
    setCharacters(["DIO", "Edward", "Spike"]);
    setGameStarted(false);
    setGameWon(false)
    setCurrentCharacter(null);
    // setTimerOn(false);
    setWinTime({});
  };

  const submitHighScore = (e) => {
    e.preventDefault();
    if (inputHighScore.length < 1) return;

    // Add the new document/category to the db, set active to true
    firestore.collection("high-scores").add({
      name: inputHighScore,
      timeInSeconds: winTime.timeInSeconds,
      timeInString: winTime.timeInString,
    }).then(() => restartGame()).catch(error => console.error(error));
  };

  return {
    clickOnBackground,
    selectCharacter,
    closeModal,
    restartGame,
    submitHighScore
  };
};

export default eventHandlers;