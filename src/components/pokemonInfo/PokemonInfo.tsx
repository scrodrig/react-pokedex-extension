import './pokemonInfo.css'

import React, { Component } from 'react'

import PokemonButtons from '../pokemonButtons/PokemonButtons'
import PokemonDescription from '../pokemonDescription/PokemonDescription'
import PokemonName from '../pokemonName/PokemonName'
import PokemonPhoto from '../pokemonPhoto/PokemonPhoto'
import Screen from '../screen/Screen'

interface Props {
    pokemon: any
    onClickUp?: () => void
    onClickDown?: () => void
}

class PokemonInfo extends Component<Props> {
    static defaultProps = {
        onClickUp: () => {},
        onClickDown: () => {}
    }

    render() {
        const { pokemon, onClickUp, onClickDown } = this.props
        return (
            <div className="panel left-panel">
                <Screen>
                    <PokemonName name={pokemon.name} number={pokemon.id} />
                </Screen>
                <PokemonPhoto
                    frontPhotoUri={pokemon.sprites.front_default}
                    backPhotoUri={pokemon.sprites.back_default}
                />
                <PokemonButtons onClickDown={onClickDown} onClickUp={onClickUp} pokemonPanel />
                <PokemonDescription pokemon={pokemon} />
            </div>
        )
    }
}

export default PokemonInfo
