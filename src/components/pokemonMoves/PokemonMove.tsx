import React, { Component } from "react";
import Screen from '../screen/Screen';
import CommonUtils from '../../utils/commonUtils';
import './pokemonMove.css'

interface Props {
    move: any;
    level: number;
}


class PokemonMove extends Component<Props> {
    render() {
        const { move, level } = this.props
        return (
            <div style={{ flex: 1 }}>
                <Screen>
                    <div className="screen-title">Moves stats</div>
                    <div className="move-panel">
                        <div className="move-left">
                            <div className="move-stat">{CommonUtils.padStats("Accuracy", move.accuracy, ".", 15)}</div>
                            <div className="move-stat">{CommonUtils.padStats("Power", move.power, ".", 15)}</div>
                            <div className="move-stat">{CommonUtils.padStats("PP", move.pp, ".", 15)}</div>
                            <div className="move-stat">{CommonUtils.padStats("Learn at", `${level}`, ".", 15)}</div>
                        </div>
                        <div className="move-right">
                            <div className="move-type">{`Type:${move.type.name}`}</div>
                            <div className="move-name">{move.name.replace("-"," ")}</div>
                        </div>
                    </div>
                </Screen>
            </div>
        )
    }
}

export default PokemonMove