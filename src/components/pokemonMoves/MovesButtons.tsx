import React, { Component } from 'react';
import './pokemonMoves.css'

class MovesButtons extends Component {
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

export default MovesButtons;