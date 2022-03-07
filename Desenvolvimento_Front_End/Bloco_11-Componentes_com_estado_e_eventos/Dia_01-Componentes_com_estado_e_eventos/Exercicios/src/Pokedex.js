import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import './Pokedex.css';
import { GrFormNext } from 'react-icons/gr';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
        typePokemon: 'All',
        indexPokemon: 0,
        isNextBtnDisabled: false,
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.changePokemonType = this.changePokemonType.bind(this);
    this.getTypes = this.getTypes.bind(this);
  }

  getPokemons(type) {
    if (type === 'All') {
        return this.props.pokemons;
    }
    const { pokemons } = this.props;
    const pokeArray = pokemons.filter((element) => element.type === type);
    return pokeArray;
  }

  nextPokemon() {
    const pokemonArrayLength = this.getPokemons(this.state.typePokemon).length;
    if (this.state.indexPokemon < pokemonArrayLength - 1) {
        this.setState({ indexPokemon: this.state.indexPokemon + 1}) 
    } else {
        this.setState({ indexPokemon: 0})
    }
  }

  changePokemonType(event) {
    this.setState({
        typePokemon: event.target.innerText,
        indexPokemon: 0,
    }, () => {
      const { typePokemon } = this.state;
      const { pokemons } = this.props;
      const pokeArray = pokemons.filter((element) =>
        element.type === typePokemon);
      if (pokeArray.length === 1) {
        this.setState({ isNextBtnDisabled: true });
      } else {
        this.setState({ isNextBtnDisabled: false });
      }
    })
  }

  getTypes() {
    const { pokemons } = this.props;
    const types = pokemons.reduce((acc, element) => {
      if (!acc.includes(element.type)) {
        acc = [...acc, element.type];
      }
      return acc;
    }, []);
    return types;
  }

  render() {
      const pokemonsByType = this.getPokemons(this.state.typePokemon);
      const index = this.state.indexPokemon;
      const { getTypes, changePokemonType } = this;
      const { isNextBtnDisabled } = this.state
      return (
        <div className='pokedex'>
          <div className='filter-buttons'>
            <Button
              nameBtn="All"
              onClick={changePokemonType} 
            />
            {getTypes().map((element) =>
              <Button
                key={element}
                nameBtn={element}
                onClick={changePokemonType}
              />
            )}
          </div>
          <div className='next-pokemon-div'>
            <button
              className='next-pokemon'
              onClick={this.nextPokemon}
              disabled={isNextBtnDisabled}
            >
              Próximo <GrFormNext className='icon' />
            </button>
          </div>
          <div className="pokemon-details">
              <Pokemon pokemon={pokemonsByType[index]} /> 
          </div>
        </div>
      );
  }
}

export default Pokedex;