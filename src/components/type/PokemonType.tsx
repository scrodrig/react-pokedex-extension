import React, { Component } from 'react';
import './pokemonType.css'


interface Props {
    types: Array<any>;
}

class PokemonType extends Component<Props> {
    render() {
        const { types } = this.props
        const finalTypes = types.sort((a, b) => { return (a.slot - b.slot) })
        console.log('finalTypes', finalTypes)
        return (
            <div className="type-list">
                <div className="panel-header">Types</div>
                <div className="type-box">
                    {finalTypes.map((type, index) => {
                        const finalName = type.type.name
                        return (<div key={`${index}${finalName}`} className={`type ${finalName}`}>{finalName}</div>)
                    })}

                </div>
            </div>
        )
    }
}

export default PokemonType;