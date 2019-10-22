import React, { Component } from 'react';
import Pokedex from './pokedex/Pokedex'

class Home extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '700px' }}>
                <Pokedex />
            </div>
        );
    }
}

export default Home