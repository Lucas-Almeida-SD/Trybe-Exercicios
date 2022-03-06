import React from "react";
import './About.css';

class About extends React.Component {
  render() {
    const image = 'http://1.bp.blogspot.com/-LizoMRGaQ_c/UPIU6UknFXI/AAAAAAAAAUs/KKDynTNuwoo/s1600/pokedex-pro.png';
    return (
      <section className="about-section">
        <h2>About Pokédex</h2>
        <div>
          <img src={image} alt="Pokédex" />
        </div>
        <p>
        The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". 
        </p>
      </section>
    );
  }
}

export default About;
