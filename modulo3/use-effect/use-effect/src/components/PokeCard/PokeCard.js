import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'

const PokeCard = (props) => {

  const [pokemon, setPokemon] = useState({})
 
 
  const componentDidMount = () => {
        setPokemon(props.pokemon);
    }

  const componentDidUpdate = (prevProps)  => {
      
      if (prevProps.pokemon !== props.pokemon) {
        setPokemon(props.pokemon);
      }
    }


  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    useEffect(() => {

      pegaPokemon(props.pokemon);
    }, [props.pokemon])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;