import React from "react";
import Pokemon from "./Pokemon";
import './FavoritePokemons.css';

class FavoritePokemons extends React.Component {
  renderFavPokemons() {
    const { favoritesPokemons, pokemons } = this.props;
    if (favoritesPokemons.length > 0) {
      const serchFavPokemons = pokemons.filter((element) =>
        favoritesPokemons.includes(element.name));
      return (
        serchFavPokemons.map((element) => (
          <Pokemon
            key={element.name}
            pokemon={element}
            favoritesPokemons={favoritesPokemons} />
        ))
      );
    }
    const src = 'https://i.pinimg.com/originals/65/61/1c/65611cb0e9aad4c585fa350da888b46f.gif'
    return (
      <div className="no-favorite-pokemons">
        <p>No favorite Pokémon found</p>
        <img src={src} alt="Squirtles chorando" />
      </div> 
    );
  }

  render() {
    return(
      <section className="favorite-pokemon-section">
        <h2>Favorite Pokémons</h2>
        {this.renderFavPokemons()}
      </section>
    );
  }
}

export default FavoritePokemons;
