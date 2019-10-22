import React, { Component } from 'react';
import './pokemonName.css'

interface Props {
    name: string,
    number: string,
}

class PokemonName extends Component<Props> {
    render() {
        const { name, number } = this.props;
        return (
            <div className="pokemon-name">
                {name}
                <span className="name-no">No.{number}</span>
            </div>
        )
    }
}

export default PokemonName;