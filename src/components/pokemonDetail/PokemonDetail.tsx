import React, { Component } from 'react';
import PokemonType from '../type/PokemonType';
import Screen from '../screen/Screen'
import './pokemonDetail.css'
class PokemonDetail extends Component {
    render() {
        return (
            <div className="panel right-panel">
                <div className="panel-row">
                    <Screen >
                        <div className="stats">
                            <div className="stat-line">
                                x.......x
                                y.......y
                                z.......z
                                </div>
                        </div>
                    </Screen>
                    <PokemonType />
                </div>
            </div>
        )
    }
}

export default PokemonDetail;