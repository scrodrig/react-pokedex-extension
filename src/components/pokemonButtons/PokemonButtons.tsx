import './pokemonButtons.css'

import React, { Component } from 'react'

interface Props {
    onClickUp?: () => void
    onClickDown?: () => void
    onClickLeft?: () => void
    onClickRight?: () => void
    pokemonPanel?: boolean
}

class PokemonButtons extends Component<Props> {
    static defaultProps = {
        onClickUp: () => {},
        onClickDown: () => {},
        onClickLeft: () => {},
        onClickRight: () => {},
        pokemonPanel: false
    }

    render() {
        const { onClickUp, onClickDown, pokemonPanel } = this.props
        return (
            <div className="panel-header">
                <div className="button-group">
                    {pokemonPanel ? (
                        <div className="button" onClick={onClickDown}>
                            <div className="arrow left" />
                        </div>
                    ) : null}
                    <div className="button" onClick={onClickUp}>
                        <div className="arrow up" />
                    </div>
                    <div className="button" onClick={onClickDown}>
                        <div className="arrow down" />
                    </div>
                    {pokemonPanel ? (
                        <div className="button" onClick={onClickDown}>
                            <div className="arrow right" />
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default PokemonButtons
