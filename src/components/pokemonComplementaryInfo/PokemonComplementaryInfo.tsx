import React, { Component } from 'react';
import Screen from '../screen/Screen'
import './pokemonComplementaryInfo.css'
import CommonUtils from '../../utils/commonUtils';
interface Props {
    pokemon: any;
}

class PokemonComplementaryInfo extends Component<Props> {
    render() {
        const { pokemon } = this.props;
        const { species } = pokemon;
        return (
            <Screen>
                <div >
                <div className="screen-title">More info</div>
                    <div className="info-stat-array">
                        <div className="info-stat">{this.statLine("Color", species.color.name)}</div>
                        <div className="info-stat">{this.statLine("Habitat", species.habitat.name)}</div>
                        <div className="info-stat">{this.statLine("Shape", species.shape.name)}</div>
                        <div className="info-stat">{this.statLine("Growth", species.growth_rate.name.replace("-"," "))}</div>
                        <div className="info-stat">{this.statLine("Height", CommonUtils.heightTransform(pokemon.height))}</div>
                        <div className="info-stat">{this.statLine("Weight", CommonUtils.weightTransform(pokemon.weight))}</div>
                    </div>
                </div>
            </Screen >

        )
    }

    private statLine(key: string, value: string) {
        return <div>
            {CommonUtils.padStats(key, value, ".", 25)}
        </div>;
    }
}

export default PokemonComplementaryInfo;