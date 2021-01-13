import React from 'react';
import "./ContextMenu.css";

function LeftClickModal({ modalOpen, characters, selectCharacter }) {
  return (
    <ul className={(modalOpen) ? "left-click-modal" : "left-click-modal off"}>
      {
        characters.map((char, i) => (
          <li 
            key={i}
            onClick={selectCharacter(char)}
            className={(characters.length === 1) ?  "modal-li last-item" : "modal-li"}
          >
            {char}
          </li>
        ))
      }
    </ul>
  );
}

export default LeftClickModal;