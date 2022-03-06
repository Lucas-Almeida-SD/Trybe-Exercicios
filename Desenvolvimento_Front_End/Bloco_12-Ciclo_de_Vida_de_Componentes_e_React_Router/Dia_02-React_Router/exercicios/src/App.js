import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import FavoritePokemons from './FavoritePokemons';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favoritesPokemons: [],
    };
    this.favoritePokemonFunc = this.favoritePokemonFunc.bind(this);
    this.loadFavPokemonsAtLocalStorage = this.loadFavPokemonsAtLocalStorage.bind(this);
  }

  componentDidMount() {
    this.loadFavPokemonsAtLocalStorage();
  }

  loadFavPokemonsAtLocalStorage() {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favoritesPokemons'));
    if (favoritesPokemons) {
      this.setState({ favoritesPokemons });
    } 
  }

  saveFavPokemonsAtLocalStorage() {
    const { favoritesPokemons } = this.state;
    localStorage.setItem('favoritesPokemons', JSON.stringify(favoritesPokemons));
  }

  favoritePokemonFunc({ target }) {
    const { value } = target;
    if (target.checked) {
      this.setState((previous) => ({
        favoritesPokemons: [...previous.favoritesPokemons, value],
      }), () => this.saveFavPokemonsAtLocalStorage());
    } else {
      const { favoritesPokemons } = this.state;
      const newFavPokemons = favoritesPokemons.filter((element) =>
        element !== value);
      this.setState({ favoritesPokemons:  newFavPokemons }, 
        () => this.saveFavPokemonsAtLocalStorage());
    }
  }

  render() {
    const { favoritesPokemons } = this.state;
    return (
      <div className="App">
        <h1 className='title'> Pokédex </h1>
        <BrowserRouter>
          <section className='links'>
            <Link to="/exercise-pokedex-router/">Home</Link>
            <Link to="/exercise-pokedex-router/about">About</Link>
            <Link to="/exercise-pokedex-router/favorite-pokemons">Favorite Pokémons</Link>
          </section>
          <Switch>
            <Route path="/exercise-pokedex-router/pokemon/:pokemonName" render={(props) =>
              <PokemonDetails
                {...props}
                pokemons={pokemons}
                favoritesPokemons={favoritesPokemons}
                favoritePokemonFunc={this.favoritePokemonFunc}
              />} />
            <Route exact path="/exercise-pokedex-router/about" component={About} />
            <Route exact path="/exercise-pokedex-router/" render={() => 
              <Pokedex pokemons={pokemons} favoritesPokemons={favoritesPokemons} />}
            />
            <Route exact path="/exercise-pokedex-router/favorite-pokemons" render={() =>
              <FavoritePokemons
                favoritesPokemons={favoritesPokemons} 
                pokemons={pokemons} />} />
            <Route path="*" component={NotFound} />
          </Switch>   
        </BrowserRouter>
      </div>
    );
  }
}

export default App;