import React, { Component } from 'react';

// Pokemon verileri
const pokemonData = [
  { id: 1, name: 'Pikachu', type: 'Electric' },
  { id: 2, name: 'Charizard', type: 'Fire/Flying' },
  // Diğer Pokemon verileri buraya eklenebilir
];

// Ana oyun bileşeni
class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null
    };
  }
  
  // Seçilen Pokemon'u ayarla
  selectPokemon = (pokemon) => {
    this.setState({ selectedPokemon: pokemon });
  };
  
  // Pokemon bileşeni
  Pokemon = ({ pokemon }) => {
    return (
      <div onClick={() => this.selectPokemon(pokemon)}>
        <h3>{pokemon.name}</h3>
        <p>Type: {pokemon.type}</p>
      </div>
    );
  };
  
  render() {
    const { selectedPokemon } = this.state;
    
    return (
      <div>
        <h2>Pokemon Game</h2>
        <p>Select a Pokemon:</p>
        <div className="pokemon-list">
          {pokemonData.map((pokemon) => (
            <this.Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        {selectedPokemon && (
          <div>
            <h3>Selected Pokemon</h3>
            <p>Name: {selectedPokemon.name}</p>
            <p>Type: {selectedPokemon.type}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Pokemon;
