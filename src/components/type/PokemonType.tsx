import React, { Component } from 'react';
import './pokemonType.css'
class PokemonType extends Component {
    render() {
        return (
            <div className="type-list">
                <div className="panel-header">Types</div>
                <div className="type-box">
                    <div className="type poison">Poison</div>
                    <div className="type grass">Grass</div>
                    <div className="type bug">Bug</div>
                </div>
            </div>
        )
    }
}

export default PokemonType;