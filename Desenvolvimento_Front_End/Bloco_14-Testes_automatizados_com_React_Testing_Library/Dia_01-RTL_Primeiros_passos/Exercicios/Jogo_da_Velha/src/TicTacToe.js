import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkTheWinner = this.checkTheWinner.bind(this);
    this.restartFunc = this.restartFunc.bind(this);
    this.renderWinner = this.renderWinner.bind(this);
  }

  handleClick({ currentTarget }) {
    const { checkTheWinner } = this;
    const { activePlayer, winner, gameBoard } = this.state;
    const isMarked = currentTarget.id.split('-')[1] !== '0';
    if (!winner && !isMarked) {
      const divPosition = currentTarget.id.split('-')[2];
      if (activePlayer === 1) {
        gameBoard[divPosition] = 1;
        this.setState({ gameBoard, activePlayer: 2 }, checkTheWinner());
      } else {
        gameBoard[divPosition] = 2;
        this.setState({ gameBoard, activePlayer: 1 }, checkTheWinner());
      }
    }
  }

  numbers() {
    const n0 = 0;
    const n1 = 1;
    const n2 = 2;
    const n3 = 3;
    const n4 = 4;
    const n5 = 5;
    const n6 = 6;
    const n7 = 7;
    const n8 = 8;
    return ([n0, n1, n2, n3, n4, n5, n6, n7, n8]);
  }

  lineFunc(gameBoard, numbers) {
    const n3 = 3;
    const positions1 = [numbers[0], numbers[1], numbers[2]];
    const positions2 = [numbers[3], numbers[4], numbers[5]];
    const positions3 = [numbers[6], numbers[7], numbers[8]];
    const line1 = gameBoard.filter((e, index) => (
      e === gameBoard[0] && e !== 0 && positions1.includes(index)));
    const line2 = gameBoard.filter((e, index) => (
      e === gameBoard[3] && e !== 0 && positions2.includes(index)));
    const line3 = gameBoard.filter((e, index) => (
      e === gameBoard[6] && e !== 0 && positions3.includes(index)));
    return (line1.length === n3 || line2.length === n3 || line3.length === n3);
  }

  columnFunc(gameBoard, numbers) {
    const n3 = 3;
    const positions1 = [numbers[0], numbers[3], numbers[6]];
    const positions2 = [numbers[1], numbers[4], numbers[7]];
    const positions3 = [numbers[2], numbers[5], numbers[8]];
    const column1 = gameBoard.filter((e, index) => (
      e === gameBoard[0] && e !== 0 && positions1.includes(index)));
    const column2 = gameBoard.filter((e, index) => (
      e === gameBoard[1] && e !== 0 && positions2.includes(index)));
    const column3 = gameBoard.filter((e, index) => (
      e === gameBoard[2] && e !== 0 && positions3.includes(index)));
    return (column1.length === n3 || column2.length === n3 || column3.length === n3);
  }

  diagonalFunc(gameBoard, numbers) {
    const n3 = 3;
    const positions1 = [numbers[0], numbers[4], numbers[8]];
    const positions2 = [numbers[2], numbers[4], numbers[6]];
    const diagonal1 = gameBoard.filter((e, index) => (
      e === gameBoard[0] && e !== 0 && positions1.includes(index)));
    const diagonal2 = gameBoard.filter((e, index) => (
      e === gameBoard[2] && e !== 0 && positions2.includes(index)));
    return (diagonal1.length === n3 || diagonal2.length === n3);
  }

  winner(checksPlayer1, checksPlayer2) {
    if (checksPlayer1.length > checksPlayer2.length) {
      return 'Player 1 (X)';
    }
    return 'Player 2 (O)';
  }

  checkTheWinner() {
    const { gameBoard } = this.state;
    const { numbers, lineFunc, columnFunc, diagonalFunc, winner } = this;
    const n = numbers();
    const checksPlayer1 = gameBoard.filter((element) => element === 1);
    const checksPlayer2 = gameBoard.filter((element) => element === 2);
    const n4 = 4;
    const n5 = 5;
    if (lineFunc(gameBoard, n)
      || columnFunc(gameBoard, n)
      || diagonalFunc(gameBoard, n)) {
      this.setState({ winner: winner(checksPlayer1, checksPlayer2) });
    } else if (checksPlayer1.length === n5 && checksPlayer2.length === n4) {
      this.setState({ winner: 'Empate' });
    }
  }

  restartFunc() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: undefined,
    });
  }

  renderWinner() {
    const { restartFunc } = this;
    const { winner } = this.state;
    let result = 'Empate';
    if (winner) {
      if (winner !== 'Empate') {
        result = `Winner: ${winner}`;
      }
      return (
        <div>
          <h2 data-testid="game-result">{result}</h2>
          <button type="button" onClick={ restartFunc }>Reiniciar</button>
        </div>
      );
    }
  }

  render() {
    const { handleClick, renderWinner } = this;
    const { gameBoard } = this.state;
    return (
      <>
        <GameBoard gameState={ gameBoard } handleClick={ handleClick } />
        {renderWinner()}
      </>
    );
  }
}

export default TicTacToe;
