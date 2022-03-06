import React from 'react';
import { MdFavorite } from 'react-icons/md';

import './pokemon.css';

class Pokemon extends React.Component {
  markFavPokemons(name, favoritesPokemons) {
    if (favoritesPokemons.includes(name)) {
      return(
        <div className='favorite-icon'>
          <MdFavorite />
        </div>
      )
    }
  }

  render() {
    const { favoritesPokemons } = this.props;
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p className={`${type} type`}>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        {this.markFavPokemons(name, favoritesPokemons)}
      </div>
    );
  }
}

export default Pokemon;