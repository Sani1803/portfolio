import React, { Component } from 'react'
import './Patatap.css';
import patatap from "./img/patatap.png";

export class Papatap extends Component {
    render() {
        return (
            <div className="pa-section">

                <div className="img-pa-section">
                    <img className="pa-img"src={patatap} alt="patatap"></img>
                    <div className="pa-middle">
                        <a href="https://sani1803.github.io/papatap/" target="_blank">
                            <button className="pa-middle-btn">Check it Out !!!</button>
                        </a>
                    </div>
                </div>  

                <div className="descr-pa-section">
                    <div className="desc-pa">
                        <h2 className="title-pa" >PaTaTap</h2>
                        <div className="pa-info">
                        A simplified patatap clone I made while doing Colt Steel's Web Development Bootcamp on Udemy.
                        It only uses paperjs/animejs for animations and howler for sounds.
                        <br/>
                        It's very fun and easy to use. Just press different keys on your keyboard and you will get different sounds.
                        </div>
                        <div className="pa-btns">
                            <a href="https://sani1803.github.io/papatap/" target="_blank">
                                <button className="pa-btn">Website</button>
                            </a>
                            <a href="https://github.com/Sani1803/papatap" target="_blank">
                                <button className="pa-btn1">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Papatap