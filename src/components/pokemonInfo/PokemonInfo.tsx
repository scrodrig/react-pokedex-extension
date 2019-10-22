import React, { Component } from 'react';
import Screen from '../screen/Screen';
import PokemonName from '../pokemonName/PokemonName';
import PokemonDescription from '../pokemonDescription/PokemonDescription';
import PokemonPhoto from '../pokemonPhoto/PokemonPhoto';
import './pokemonInfo.css'
import PokemonUtils from '../../utils/PokemonUtils';

interface Props {
    pokemon: any;
}


class PokemonInfo extends Component<Props> {

    render() {
        const { pokemon } = this.props
        console.log('lol', pokemon.sprites)
        return (
            <div className="panel left-panel">
                <Screen >
                    <PokemonName name={pokemon.name} number={pokemon.order} />
                </Screen>
                <PokemonPhoto frontPhotoUri={pokemon.sprites.front_default} backPhotoUri={pokemon.sprites.back_default} />
                <PokemonDescription pokemon={pokemon} />
            </div>
        )
    }
}

export default PokemonInfo;