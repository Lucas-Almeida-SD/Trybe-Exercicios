import React from 'react';
import PropTypes from 'prop-types';
import xImage from './x.png';
import oImage from './o.svg';
import './GameCell.css';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  renderImage(playerId) {
    let result;
    if (playerId === 1) {
      result = <img data-testid="x-simbol" src={ xImage } alt="X" />;
    } else if (playerId === 2) {
      result = <img data-testid="o-simbol" src={ oImage } alt="X" />;
    } else {
      result = null;
    }
    return result;
  }

  render() {
    const { renderImage } = this;
    const { id, playerId, handleClick } = this.props;
    return (
      <div
        id={ id }
        data-testid={ `cell_${id}` }
        className="game-cell"
        onClick={ handleClick }
        aria-hidden="true"
      >
        {renderImage(playerId)}
      </div>
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.string.isRequired,
  playerId: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GameCell;
