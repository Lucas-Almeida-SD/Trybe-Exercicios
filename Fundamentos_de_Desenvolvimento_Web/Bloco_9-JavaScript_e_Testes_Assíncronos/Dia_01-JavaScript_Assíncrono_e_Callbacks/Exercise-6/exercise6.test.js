// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    let filterPokemon = (pokemon) => pokemon.name === 'Arceus';
    getPokemonDetails(filterPokemon, (errorMessage, _pokemonMessage) => {
      try {
        expect(errorMessage).toStrictEqual(new Error ('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    })
  });

  let filterPokemon = (pokemon) => pokemon.name === 'Bulbasaur';
  const expectResult = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;
  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(filterPokemon, (_errorMessage, pokemonMessage) => {
      try {
        expect(pokemonMessage).toBe(expectResult);
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});
