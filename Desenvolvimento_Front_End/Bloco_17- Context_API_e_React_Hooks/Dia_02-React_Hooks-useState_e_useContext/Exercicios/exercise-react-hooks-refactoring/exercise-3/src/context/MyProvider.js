import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleActivePlayer = () => {
    if (activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    const newState = [...gameBoard];
    let newActivePlayer = activePlayer;

    if (gameBoard[cellClicked] === 0) {
      newState[cellClicked] = activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else newState[cellClicked] = gameBoard[cellClicked];

      setActivePlayer(newActivePlayer);
      setGameBoard(newState);
    };

  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const contextValue = { gameBoard, updateState, resetGame }
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider