import findCharacter from "./findCharacter";

const eventHandlers = (imgRef, setModalOpen, currentCharacter, setCurrentCharacter, characters, setCharacters) => {


  const clickOnBackground = (e) => {
    // Access menu list, set popup nearby where user clicks
    const clickModal = document.querySelector(".left-click-modal");
    clickModal.style.top = `${e.clientY - 2}px`;
    clickModal.style.left = `${e.clientX + 18}px`;
    setModalOpen(true);

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
      setModalOpen(false); 

      if (currentCharacter !== character) {
        return console.log("Keep trying!");
      }

      const newCharacters = characters.filter(char => char !== currentCharacter);
      setCharacters(newCharacters);
      // console.log(`You found ${currentCharacter}!`);
      console.table(newCharacters);
    };
    return handler;
  };


  const closeModal = () => setModalOpen(false);


  return {
    clickOnBackground,
    selectCharacter,
    closeModal,
  };
};

export default eventHandlers;