import React, { Component } from 'react';
import Screen from '../screen/Screen';
import PokemonUtils from '../../utils/PokemonUtils';
import './pokemonDescription.css'

interface Props {
    pokemon: any;
}

interface State {
    description: any;
}

class PokemonDescription extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            description: "No description"
        }
    }

    componentDidMount() {
        this.changeDescription()
    }

    changeDescription() {
        const { pokemon } = this.props
        const { description } = this.state
        this.setState({
            description: new PokemonUtils().pickDescription(pokemon, "en") || description
        })
    }

    render() {
        const { description } = this.state
        return (
            <Screen onClick={() => { this.changeDescription() }} fixedHeight="120px">
                <div className="pokemon-description">
                    {description}
                </div>
            </Screen>
        )
    }
}

export default PokemonDescription;