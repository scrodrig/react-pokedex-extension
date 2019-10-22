import React, { Component } from 'react';
import PokemonType from '../type/PokemonType';
import Screen from '../screen/Screen'
import PokemonStats from '../pokemonStats/PokemonStats'
import './pokemonDetail.css'

class PokemonDetail extends Component {
    render() {
        return (
            <div className="panel right-panel">
                <div className="panel-row">
                    <Screen >
                        <PokemonStats />
                    </Screen>
                    <PokemonType />
                </div>
            </div>
        )
    }
}

export default PokemonDetail;