import React from 'react';

function HighScores({ highScores }) {
  if (!highScores) return <></>
  if (highScores.length < 1) return (<p>No high scores!</p>);
  return highScores.map((score, i) => (i > 9) ? null : (
    <li key={i}>{score.name} {score.timeInString}</li>
  ));
}

export default HighScores;