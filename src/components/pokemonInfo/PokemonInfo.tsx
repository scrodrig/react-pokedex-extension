import React, { Component } from 'react';
import Screen from '../screen/Screen';
import PokemonName from '../pokemonName/PokemonName';
import PokemonDescription from '../pokemonDescription/PokemonDescription';
import PokemonPhoto from '../pokemonPhoto/PokemonPhoto';
import './pokemonInfo.css'
class PokemonInfo extends Component {
    render() {
        return (
            <div className="panel left-panel">
                <Screen >
                    <PokemonName />
                </Screen>
                <PokemonPhoto />
                <Screen >
                    <PokemonDescription />
                </Screen>
            </div>
        )
    }
}

export default PokemonInfo;