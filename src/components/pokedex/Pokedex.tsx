import './pokedex.css'

import React, { Component } from 'react';

import Divider from '../divider/Divider';
import PokemonDetail from '../pokemonDetail/PokemonDetail';
import PokemonInfo from '../pokemonInfo/PokemonInfo';
import PokemonUtils from '../../utils/PokemonUtils'

interface State {
    pokemon: any,
    currentId: number
}

const POKEMON_LIMIT = 151;

class Pokedex extends Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: null,
            currentId: 1
        };
    }

    componentDidMount() {
        const { currentId } = this.state;
        this.loadPokemon(currentId);
    }

    loadPokemon(id: number) {
        PokemonUtils.getPokemon(id).then((result: any) => {
            this.setState({ pokemon: result, currentId: id })
        });
    }

    nextPokemon() {
        const { currentId } = this.state;
        const newId = currentId >= 1 && currentId < POKEMON_LIMIT ? currentId + 1 : currentId
        this.loadPokemon(newId);
    }

    prevPokemon() {
        const { currentId } = this.state;
        const newId = currentId > 1 ? currentId - 1 : currentId
        this.loadPokemon(newId);
    }

    render() {
        const { pokemon } = this.state
        return pokemon ? (
            <div className='pokedex-container'>
                <div className="pokedex-frame" >
                    <PokemonDetail pokemon={pokemon} />
                    <Divider />
                    <PokemonInfo pokemon={pokemon} onClickDown={() => { this.nextPokemon() }} onClickUp={() => { this.prevPokemon() }} />
                </div>
            </div>
        ) : null;
    }
}

export default Pokedex