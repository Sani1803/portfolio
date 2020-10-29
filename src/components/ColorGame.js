import React, { Component } from 'react'
import './ColorGame.css';
import colorgame from "./img/colorgame.png";

export class ColorGame extends Component {
    render() {
        return (
            <div className="cg-section">

                <div className="img-cg-section">
                    <img className="cg-img"src={colorgame} alt="colorgame"></img>
                </div>

                <div className="descr-cg-section">
                    <div className="desc-cg">
                        <h2>Color Game Project</h2>
                        <div className="cg-info">
                        This is my first ever game made with HTML, CSS and Javascript. 
                        It is a Color Guessing Game with the help of RGB colors where you have to guess the right color.
                        </div>
                        <div className="cg-btn">
                            <button>Website</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ColorGame
