import React, { Component } from 'react';
import Screen from '../screen/Screen';
import PokemonName from '../pokemonName/PokemonName';
import PokemonDescription from '../pokemonDescription/PokemonDescription';
import PokemonPhoto from '../pokemonPhoto/PokemonPhoto';
import './pokemonInfo.css'
import PokemonButtons from '../pokemonButtons/PokemonButtons';

interface Props {
    pokemon: any,
    onClickUp?: () => void,
    onClickDown?: () => void
}


class PokemonInfo extends Component<Props> {
    static defaultProps = {
        onClickUp: () => { },
        onClickDown: () => { }
    };

    render() {
        const { pokemon, onClickUp, onClickDown } = this.props
        return (
            <div className="panel left-panel">
                <Screen >
                    <PokemonName name={pokemon.name} number={pokemon.order} />
                </Screen>
                <PokemonPhoto frontPhotoUri={pokemon.sprites.front_default} backPhotoUri={pokemon.sprites.back_default} />
                <PokemonButtons onClickDown={onClickDown} onClickUp={onClickUp} />
                <PokemonDescription pokemon={pokemon} />
            </div>
        )
    }
}

export default PokemonInfo;