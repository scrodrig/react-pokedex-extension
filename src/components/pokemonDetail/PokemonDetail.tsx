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
                <div className="circle-camera"></div>
                <div className="panel-title">
                    <img src="images/title.png" />
                </div>
                <div>
                    <div className="panel-camera-top">
                        <div className="panel-camera-1">
                        </div>
                        <div className="panel-camera-2"></div>
                    </div>
                    <div className="panel-camera-bottom">
                        <div className="panel-camera-3"></div>
                        <div className="inverse">
                            <div className="panel-camera-4"></div>
                        </div>
                    </div>
                </div>
                <div className="panel-row">
                    <PokemonType types={pokemon.types} />
                    <PokemonStats stats={pokemon.stats} />
                </div>
            </div>
        )
    }
}

export default PokemonDetail;