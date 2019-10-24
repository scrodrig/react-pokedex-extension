import React, { Component } from 'react';
import PokemonMove from './PokemonMove';
import PokemonButtons from '../pokemonButtons/PokemonButtons';
import PokemonUtils from '../../utils/PokemonUtils';
import './pokemonMoves.css'

interface Props {
    moves: Array<any>;
}

interface State {
    currentMove: any;
    currentIndex: number;
}

class PokemonMoves extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentMove: this.clearMove(),
            currentIndex: 0
        }
        const { moves } = this.props;
        const { currentIndex } = this.state;
        this.openMove(moves[currentIndex]);
    }

    clearMove() {
        return {
            type: {},
            target: {},
            name: ""
        }
    }

    openMove(item: any) {
        const { move } = item
        PokemonUtils.loadMove(move.url).then((response) => {
            this.setState({
                currentMove: response
            })
            console.log(this.state.currentMove)
        }).catch(() => {
            this.setState({
                currentMove: this.clearMove()
            })
        })
    }

    nextMove() {
        const { moves } = this.props;
        const { currentIndex } = this.state;
        const index = currentIndex > moves.length ? currentIndex + 1 : currentIndex
        this.openMove(index + 1)
    }

    prevMove() {
        const { currentIndex } = this.state;
        const index = currentIndex > 0 ? currentIndex - 1 : currentIndex
        this.openMove(index - 1)
    }

    render() {
        const { currentMove, currentIndex } = this.state
        const { moves } = this.props
        const level = moves[currentIndex].version_group_details[0].level_learned_at
        return (
            <div>
                <div className="panel-header">Moves</div>
                <PokemonMove move={currentMove} level={level} />
                <PokemonButtons />
            </div>
        )
    }
}

export default PokemonMoves;