import React from 'react';
import "./GameWon.css";
import HighScores from './HighScores';

function GameWon({ restartGame, highScores, winTime, setInputHighScore, submitHighScore }) {

  const handleInputFieldChange = (e) => setInputHighScore(e.target.value.toUpperCase());

  if (!highScores) return <></>;
  
  return (
    <div className="game-won">
      <div className="game-won-modal">
        <div className="high-scores">
          <h2>High Scores</h2>
          <ol>
            <HighScores highScores={highScores} />
          </ol>
        </div>
        {
          (highScores.length < 10 || winTime.timeInSeconds < highScores[9].timeInSeconds) ?
          <div className="user-score">
            <h1>Add Your Score</h1>
            <h2>Time</h2>
            <p>{winTime.timeInString}</p>
            <form onSubmit={submitHighScore} className="user-score-form">
              <input 
                id="inputHighscore"
                onChange={handleInputFieldChange}
                placeholder="NAME" type="text" 
                maxLength="4" 
                autoComplete="off" 
                required 
              />
              <button className="submit-high-score-button">Submit</button>
            </form>
          </div>
          :
          <div className="user-score">
            <h1>Time</h1>
            <p>{winTime.timeInString}</p>
            <button onClick={restartGame}>Restart</button>
          </div>
        }
      </div>
    </div>
  );
}

export default GameWon;