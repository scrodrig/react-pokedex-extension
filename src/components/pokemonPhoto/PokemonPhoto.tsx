import React, { Component } from 'react';
import './pokemonPhoto.css'

interface Props {
    frontPhotoUri: string;
    backPhotoUri: string;
}

interface State {
    front: boolean;
}

class PokemonPhoto extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            front: true
        }
    }

    flipPokemon() {
        const { front } = this.state
        this.setState({
            front: !front
        })
    }


    render() {
        const { frontPhotoUri, backPhotoUri } = this.props
        const { front } = this.state
        return (
            <div className="pokemon-photo-frame" onClick={() => { this.flipPokemon() }}>
                {front ?
                    <img src={frontPhotoUri} alt="pokemon" className="pokemon-photo" />
                    : <img src={backPhotoUri} alt="pokemon" className="pokemon-photo" />}
            </div>
        )
    }
}

export default PokemonPhoto;