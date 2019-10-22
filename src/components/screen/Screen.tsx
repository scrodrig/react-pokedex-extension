import React, { Component } from 'react';
import './screen.css'

interface Props {
    onClick?: () => void,
    fixedHeight?: string
}

class Screen extends Component<Props> {

    static defaultProps = {
        onClick: () => { },
        fixedHeight: "auto"
    };

    render() {
        const { onClick, fixedHeight } = this.props
        return (
            <div className="screen" style={{ height: fixedHeight }} onClick={onClick}>
                {this.props.children}
            </div>
        )
    }
}

export default Screen;