import React, { Component } from 'react';
import Pokedex from './pokedex/Pokedex'
import PokemonUtils from '../utils/PokemonUtils'

interface State {
    pokemon: any;
}

class Home extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: null,
        };
    }

    componentDidMount() {
        new PokemonUtils().getPokemon(1).then((result) => {
            this.setState({ pokemon: result })
            console.log(this.state.pokemon)
        });
    }

    render() {
        const { pokemon } = this.state;
        return pokemon ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Pokedex pokemon={pokemon} />
            </div>
        ) : null;
    }
}

export default Home