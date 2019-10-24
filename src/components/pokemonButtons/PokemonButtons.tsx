import React, { Component } from 'react';
import './pokemonButtons.css'

interface Props {
    onClickUp: () => void;
    onClickDown: () => void;
}

class PokemonButtons extends Component<Props> {
    render() {
        const { onClickUp, onClickDown } = this.props;
        return (
            <div className="panel-header">
                <div className="button-group">
                    <div className="button" onClick={() => { onClickUp() }}><div className="arrow up" /></div>
                    <div className="button" onClick={() => { onClickDown() }}><div className="arrow down" /></div>
                </div >
            </div >
        )
    }
}

export default PokemonButtons;