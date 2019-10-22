import React, { Component } from 'react';
import Screen from '../screen/Screen'
import CommonUtils from '../../utils/commonUtils'
import './pokemonStats.css'

interface Props {
    stats: Array<any>;
}

class PokemonStats extends Component<Props> {
    render() {
        const { stats } = this.props;
        return (
            <Screen>
                <div className="stats">
                    {stats.map((stat, index) => {
                        return (
                            <div key={`${index}${stat.stat.name}`} className="stat-line">
                                {this.statLine(stat.stat.name, stat.base_stat)}
                            </div>
                        )
                    })}
                </div>
            </Screen >

        )
    }

    private statLine(key: string, value: string) {
        return <div>
            {CommonUtils.padStats(key, value, ".", 20)}
        </div>;
    }
}

export default PokemonStats;