import React, { Component } from 'react';
import PokemonType from '../type/PokemonType';
import PokemonStats from '../pokemonStats/PokemonStats'
import PokedexCamera from '../pokedexCamera/PokedexCamera'
import PokemonMoves from '../pokemonMoves/PokemonMoves'
import './pokemonDetail.css'


interface Props {
    pokemon: any;
}


class PokemonDetail extends Component<Props> {
    render() {
        const { pokemon } = this.props
        return (
            <div className="panel right-panel">
                <PokedexCamera />
                <div className="panel-row">
                    <PokemonType types={pokemon.types} />
                    <PokemonStats stats={pokemon.stats} />
                </div>
                <PokemonMoves moves={pokemon.moves} />
            </div>
        )
    }
}

export default PokemonDetail;