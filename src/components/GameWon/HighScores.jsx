import React from 'react';

function HighScores({ highScores }) {
  if (!highScores) return <></>
  return highScores.map((score, i) => (<li key={i}>{score.name} {score.timeInString}</li>));
}

export default HighScores;