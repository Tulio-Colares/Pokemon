import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import pokeLogo from './PokeLogo.png';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("pikachu"); 

  const SearchPokemon = (term) => {
    setPokemon(term.toLowerCase());
  }

  const [pokeName, setPokeName] = useState("");
  const [pokeId, setPokeId] = useState();
  const [pokeOrder, setPokeOrder] = useState();
  const [pokePhoto, setPokePhoto] = useState()
  const [pokeHeight, setPokeHeight] = useState();
  const [pokeWeight, setPokeweight] = useState();
  const [pokeType, setPokeType] = useState("");

  useEffect(() => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
    setPokeName(res.data.name);
    setPokeId(res.data.id);
    setPokeOrder(res.data.order);
    setPokePhoto(res.data.sprites.other.dream_world.front_default)
    setPokeHeight(Math.round((res.data.height * 0.108084 + 0.00001) * 100) / 100);
    setPokeweight( Math.round((res.data.weight * 0.100462 + 0.00001) * 100) / 100);
    setPokeType(res.data.types[0].type.name);
  }), [pokemon]);

  return (
    <div className="pokedex">
      <SearchBar SearchPokemon={SearchPokemon} />
      <div className="logo-container">
        <img src={pokeLogo} className="pokeLogo" alt="Pokemon Logo"/>
      </div>
      <div className="pokedex-container">
        <div className="Table">
          <img className="imagem" src={pokePhoto} alt=""/>
          <div className="separador"></div>
          <div className="Info">
            <p> Id: {pokeId}</p>
            <p>Nome: {pokeName.toLowerCase().split(' ').map(
          letra => letra.charAt(0).toUpperCase() + letra.substring(1)).join(' ')}</p>
            <p>Ordem: {pokeOrder}</p> 
            <p>Altura: {pokeHeight} m</p> 
            <p>Peso: {pokeWeight} kg</p>  
            <p>Tipo: {pokeType}</p>  
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Pokedex;