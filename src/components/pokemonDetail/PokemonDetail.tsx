import React, { Component } from 'react';
import PokemonType from '../type/PokemonType';
import PokemonStats from '../pokemonStats/PokemonStats'
import './pokemonDetail.css'


interface Props {
    pokemon: any;
}


class PokemonDetail extends Component<Props> {
    render() {
        const { pokemon } = this.props
        return (
            <div className="panel right-panel">
                <div className="panel-row">
                    <PokemonType types={pokemon.types} />
                    <PokemonStats stats={pokemon.stats} />
                </div>
            </div>
        )
    }
}

export default PokemonDetail;