import React, { Component } from 'react';
import './screen.css'
class Screen extends Component {
    render() {
        return (
            <div className="screen">
                {this.props.children}
            </div>
        )
    }
}

export default Screen;