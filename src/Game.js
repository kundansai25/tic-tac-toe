import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [key, setKey] = useState(0);

  function handleRestart() {
    setKey(prevKey => prevKey + 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board key={key} onRestart={handleRestart} />
      </div>
    </div>
  );
}

export default Game;
