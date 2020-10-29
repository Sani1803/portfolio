import React, { Component } from 'react'
import './CardsList.css';
import cardslist from "./img/cardslist.png";

export class CardsList extends Component {
    render() {
        return (
            <div className="cards-section">

                <div className="descr-cards-section">
                    <div className="desc-cards">
                        <h2>Color Game Project</h2>
                        <div className="cards-info">
                        This is my first ever game made with HTML, CSS and Javascript. 
                        It is a Color Guessing Game with the help of RGB colors where you have to guess the right color.
                        </div>
                        <div className="cards-btn">
                            <button>Website</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>

                <div className="img-cards-section">
                    <img className="cards-img"src={cardslist} alt="cardslist"></img>
                </div>

            </div>
        )
    }
}

export default CardsList
