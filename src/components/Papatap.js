import React, { Component } from 'react'
import './Papatap.css';
import papatap from "./img/papatap.png";

export class Papatap extends Component {
    render() {
        return (
            <div className="pa-section">

                <div className="img-pa-section">
                    <img className="pa-img"src={papatap} alt="papatap"></img>
                </div>

                <div className="descr-pa-section">
                    <div className="desc-pa">
                        <h2>Color Game Project</h2>
                        <div className="pa-info">
                        This is my first ever game made with HTML, CSS and Javascript. 
                        It is a Color Guessing Game with the help of RGB colors where you have to guess the right color.
                        </div>
                        <div className="pa-btn">
                            <button>Website</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Papatap