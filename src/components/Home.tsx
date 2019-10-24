import React, { Component } from 'react';
import Pokedex from './pokedex/Pokedex'

class Home extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Pokedex />
            </div>
        )
    }
}

export default Home