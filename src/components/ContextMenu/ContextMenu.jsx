import React from 'react';
import "./ContextMenu.css";

function ContextMenu({ menuOpen, characters, selectCharacter }) {
  return (
    <ul className={(menuOpen) ? "left-click-modal" : "left-click-modal off"}>
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

export default ContextMenu;