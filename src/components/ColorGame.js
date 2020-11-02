import React, { Component } from 'react'
import './ColorGame.css';
import colorgame from "./img/colorgame.png";

export class ColorGame extends Component {
    render() {
        return (
            <div className="cg-section">
                
                <div className="img-cg-section">
                    <img className="cg-img"src={colorgame} alt="colorgame"></img>
                    <div className="cg-middle">
                        <a href="https://sani1803.github.io/colorgame/" target="_blank">
                            <button className="cg-middle-btn">Check it Out !!!</button>
                        </a>
                    </div>
                </div>

                <div className="descr-cg-section">
                    <div className="desc-cg">
                        <h2 className="title-cg">RGB Color Game</h2>
                        <div className="cg-info">
                        It is a Color Guessing Game with the help of RGB colors where you have to guess the right color.
                        It has two modes, easy and hard. In easy mode you have three color options and in hard, six color options. 
                        <br/>
                        <br/>
                        HTML, CSS, JavaScript
                        </div>
                        <div className="cg-btns">
                            <a href="https://sani1803.github.io/colorgame/" target="_blank">
                                <button className="cg-btn" >Website</button>
                            </a> 
                            <a href="https://github.com/Sani1803/colorgame" target="_blank">
                                <button className="cg-btn1">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ColorGame
