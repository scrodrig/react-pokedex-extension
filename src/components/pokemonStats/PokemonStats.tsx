import React, { Component } from 'react';
import './pokemonStats.css'
class PokemonStats extends Component {

    padStats(key: string, value: string, separetor: string, length: number) {
        value = value || "";
        let output = `${key.toString()}${separetor.repeat(length - (value.toString().length + key.toString().length))}${value.toString()}`;
        return output;
    }

    render() {
        return (
            <div className="stats">
                <div className="stat-line">
                    {this.statLine('attack', '12')}
                    {this.statLine('defense', '18')}
                </div>
            </div>
        )
    }

    private statLine(key: string, value: string) {
        return <div>
            {this.padStats(key, value, ".", 18)}
        </div>;
    }
}

export default PokemonStats;