import React, { Component } from 'react';
import './divider.css'
class Divider extends Component {
    render() {
        return (
            <div className="divider">
                <div className="gap" />
                <div className="hinge" />
                <div className="gap" />
                <div className="hinge" />
                <div className="gap" />
                <div className="hinge" />
                <div className="gap" />
            </div>
        )
    }
}

export default Divider;