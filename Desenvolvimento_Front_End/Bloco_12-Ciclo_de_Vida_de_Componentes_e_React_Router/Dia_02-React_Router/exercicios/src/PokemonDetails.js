import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import NotFound from './NotFound';
import Pokemon from './Pokemon';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  pokemonDetail(foundPokemon, name, summary, foundAt) {
    const { favoritesPokemons, favoritePokemonFunc } = this.props;
    const isChecked = favoritesPokemons.includes(name);
    return (
      <Route exact path={`/exercise-pokedex-router/pokemon/${name}`} render={() =>
        <section className="pokemon-details-section">
          <section className='pokemon-details'>
            <h2>{name} Details</h2>
            <Pokemon pokemon={foundPokemon} favoritesPokemons={favoritesPokemons} />
            <div className='favorite-pokemon-div'>
              <input
              type="checkbox"
              name={name}
              value={name}
              id="favorite-pokemon"
              checked={isChecked}
              onChange={favoritePokemonFunc} />
              <label htmlFor="favorite-pokemon">Pokémon favorito?</label>
          </div>
          </section> 
          <section className='summary-section'>
            <h2>Summary</h2>
            <p>{summary}</p>
          </section>
          <section className='locations-section'>
            <h2>Game Locations of {name}</h2>
            {foundAt.map((element, index) => (
              <figure key={index}>
                <img src={element.map} alt={element.location} />
                <figcaption>{element.location}</figcaption>
              </figure>
            ))}
          </section>
        </section> 
      }/>
    );
  }

  existPokemon(foundPokemon) {
    if (foundPokemon) {
      const {
        name,
        summary,
        foundAt,
      } = foundPokemon;
      return ( 
        this.pokemonDetail(foundPokemon, name, summary, foundAt)
      );
    }
    return <Route path="*" component={NotFound} />
  }

  render() {
    const { pokemons } = this.props;
    const { pokemonName } = this.props.match.params;
    const foundPokemon = pokemons.find((element) => element.name === pokemonName);
    return(
      <div>
        {this.existPokemon(foundPokemon)}
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  favoritesPokemons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  favoritePokemonFunc: PropTypes.func.isRequired,
}

export default PokemonDetails;
