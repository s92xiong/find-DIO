import React from 'react';

function CharacterStatus({ characters, char }) {
  // Render the UI to show if a character has been found
  if (characters.includes(char)) {
    return <p className="character-status">Not yet yound</p>;
  }
  return <p className="character-status found">Found!</p>;
}

export default CharacterStatus;