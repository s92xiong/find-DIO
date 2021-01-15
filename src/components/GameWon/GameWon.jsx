import React from 'react';
import "./GameWon.css";

function GameWon() {
  return (
    <div className="game-won">
      <div className="game-won-modal">
        <div className="high-scores">
          <h2>High Scores</h2>
          <ol>
            <li>JOJO 00:01:49</li>
            <li>DIO 00:02:43</li>
            <li>MARK 00:03:03</li>
            <li>ELLE 00:03:04</li>
            <li>MAIN 00:03:06</li>
            <li>ROTO 00:03:10</li>
            <li>BALL 00:03:42</li>
            <li>NANI 00:03:44</li>
            <li>FFIX 00:05:41</li>
            <li>NANI 00:08:43</li>
          </ol>
        </div>
        <div className="user-score">
          <h1>Time</h1>
          <p>Time goes here</p>
          <button>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default GameWon;