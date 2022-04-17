import { useEffect, useState } from "react"

const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/1/';

const usePokemonImage = () => {
  const [pokemonUrl, setPokemonUrl] = useState(DEFAULT_URL);
  const [pokemonImage, setPokemonImage] = useState('');

  const urlImage = (query) => (
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${query}.png`);

  const adjustPokemonNumber = (id) => {
    if (id.length === 1) return `00${id}`;
    if (id.length === 2) return `0${id}`;
    return id;
  }

  useEffect(() => {
    const getPokemonImage = async () => {
      const { id } = await fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => data);
      const pokemonNumber = adjustPokemonNumber(id.toString());
      setPokemonImage(urlImage(pokemonNumber));
    };
    getPokemonImage();
  }, [pokemonUrl])

  return [pokemonImage, setPokemonUrl];
}

export default usePokemonImage;