import React, { useContext } from 'react';
import GameCell from './GameCell';
import './GameBoard.css';
import MyContext from './context/MyContext';

function GameBoard() {
  const { gameBoard: gameState } = useContext(MyContext);
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            content={playerId}
          />
        ))}
      </div>
    );
}

export default GameBoard;