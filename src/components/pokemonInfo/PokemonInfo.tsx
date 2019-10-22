import React, { Component } from 'react';
import Screen from '../screen/Screen';
import PokemonName from '../pokemonName/PokemonName';
import './pokemonInfo.css'
class PokemonInfo extends Component {
    render() {
        return (
            <div className="panel left-panel">
                <Screen >
                    <PokemonName />
                </Screen>
                <img src="pokemon.png" alt="pokemon" className="pokemon-photo" />
                <Screen >
                    <div className="pokemon-description">Pokemon description</div>
                </Screen>
            </div>
        )
    }
}

export default PokemonInfo;