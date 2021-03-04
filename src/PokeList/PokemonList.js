import React from 'react';
import PokeCard from '../components/PokeCard';


const PokemonList = ({ pokemon }) => {
  return (
  <div className="poke-container">
    {pokemon.map(pokeData => (
      <div className="poke-card" key={pokeData[0]}>
        <PokeCard pokeData={pokeData}/>
      </div>))}
  </div>
  )
}

export default PokemonList;