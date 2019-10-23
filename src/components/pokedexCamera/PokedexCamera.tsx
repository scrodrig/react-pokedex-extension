import React, { Component } from 'react';
import './pokedexCamera.css'

class PokedexCamera extends Component {
    render() {
        return (
            <div>
                <div className="circle-camera"></div>
                <div className="panel-title">
                    <img src="images/title.png" />
                </div>
                <div>
                    <div className="panel-camera-top">
                        <div className="panel-camera-1">
                        </div>
                        <div className="panel-camera-2"></div>
                    </div>
                    <div className="panel-camera-bottom">
                        <div className="panel-camera-3"></div>
                        <div className="inverse">
                            <div className="panel-camera-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokedexCamera;