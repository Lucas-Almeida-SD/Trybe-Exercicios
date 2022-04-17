import { useEffect, useState } from 'react';
import './App.css';
import usePokemonImage from './hooks/usePokemonImage';

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonImage, setPokemonUrl] = usePokemonImage();

  useEffect(() => {
    const getPokemons = async () => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then((response) => response.json())
        .then((data) => setPokemonList(data))
    };
    getPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <img src={ pokemonImage } alt={ pokemonImage } />
      <ul>
        {(pokemonList) && 
          pokemonList.results.map(({ name, url }) => (
            <li key={ name } onClick={ () => setPokemonUrl(url) }>{name}</li>))}
      </ul>
    </div>
  );
}

export default App;
