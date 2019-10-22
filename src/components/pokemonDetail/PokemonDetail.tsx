import React, { Component } from 'react';
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
                    <div className="type-list">
                        <div className="panel-header">Types</div>
                        <div className="type-box">
                            <div className="type poison">Poison</div>
                            <div className="type grass">Grass</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonDetail;