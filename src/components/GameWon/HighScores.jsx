import React from 'react';

function HighScores({ highScores }) {
  if (!highScores) return <></>
  // Render only the top 10 scores
  return highScores.map((score, i) => (i > 9) ? null : (<li key={i}>{score.name} {score.timeInString}</li>));
}

export default HighScores;