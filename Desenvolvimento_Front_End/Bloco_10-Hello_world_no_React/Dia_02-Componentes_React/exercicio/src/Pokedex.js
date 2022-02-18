import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return (
      <main>
        <h1>Pokedex</h1>
        <section className="poke-section">
          {pokemons.map((element, index) => <Pokemon key={index} pokemons={element} />)}
        </section>
      </main>
    )
  }
}

export default Pokedex;