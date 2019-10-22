import React, { Component } from 'react';
import './pokedex.css'
import Divider from '../divider/Divider';
import PokemonInfo from '../pokemonInfo/PokemonInfo';
import PokemonDetail from '../pokemonDetail/PokemonDetail';

interface PokedexProps {
    pokemon: any;
}

class Pokedex extends Component<PokedexProps> {
    render() {
        const { pokemon } = this.props
        return (
            <div className='pokedex-container'>
                <div className="pokedex-frame" >
                    <PokemonDetail pokemon={pokemon} />
                    <Divider />
                    <PokemonInfo pokemon={pokemon} />
                </div>
            </div>
        );
    }
}

export default Pokedex