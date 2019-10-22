import React, { Component } from 'react';
import './pokemonInfo.css'
class PokemonInfo extends Component {
    render() {
        return (
            <div className="panel left-panel">
                <div className="pokemon-name screen">
                    pokemon
                    <span className="name-no">No.</span>
                </div>
                <img src="pokemon.png" alt="pokemon" className="pokemon-photo" />
                <div className="pokemon-description screen">Pokemon description</div>
            </div>
        )
    }
}

export default PokemonInfo;