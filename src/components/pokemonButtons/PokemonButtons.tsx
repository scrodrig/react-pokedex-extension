import React, { Component } from 'react';
import './pokemonButtons.css'

class PokemonButtons extends Component {
    render() {
        return (
            <div className="panel-header">
                <div className="button-group">
                    <div className="button"><div className="arrow up" /></div>
                    <div className="button"><div className="arrow down" /></div>
                </div>
            </div>
        )
    }
}

export default PokemonButtons;