import React from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({ pokeData }) => {
  const pokemonIndex = pokeData[1].split('/')[pokeData[1].split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`

  return (
    <div>
      <Link to={`pokemon/${pokemonIndex}`} >
        <p className="index">{pokemonIndex}</p>
        <p><img src={imageUrl} alt={pokeData[0]} /></p>
        <h3>{pokeData[0].toLowerCase().split(' ').map(
          letra => letra.charAt(0).toUpperCase() + letra.substring(1)).join(' ')}
        </h3>
      </Link>
    </div>
  )
}

export default PokeCard;