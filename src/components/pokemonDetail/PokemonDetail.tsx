import React, { Component } from 'react';
import PokemonType from '../type/PokemonType';
import './pokemonDetail.css'
class PokemonDetail extends Component {
    render() {
        return (
            <div className="panel right-panel">
                <div className="panel-row">
                    <div className="screen stats">
                        <div className="stat-line">
                            x.......x
                            y.......y
                            z.......z
                                </div>
                    </div>
                    <PokemonType />
                </div>
            </div>
        )
    }
}

export default PokemonDetail;