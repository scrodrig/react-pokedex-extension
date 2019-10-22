import React, { Component } from 'react';
import './pokemonPhoto.css'
class PokemonPhoto extends Component {
    render() {
        return (
            <img src="pokemon.png" alt="pokemon" className="pokemon-photo" />
        )
    }
}

export default PokemonPhoto;