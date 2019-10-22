import React, { Component } from 'react';
import './pokedex.css'
import Divider from '../divider/Divider';
import PokemonInfo from '../pokemonInfo/PokemonInfo';
import PokemonDetail from '../pokemonDetail/PokemonDetail';
class Pokedex extends Component {
    render() {
        return (
            <div className='pokedex-container'>
                <div className="pokedex-frame" >
                    <PokemonDetail />
                    <Divider />
                    <PokemonInfo />
                </div>
            </div>
        );
    }
}

export default Pokedex