import React, { Component } from 'react'
import './CardsList.css';
import cardslist from "./img/cardslist.png";

export class CardsList extends Component {
    render() {
        return (
            <div className="cards-section">

                <div className="descr-cards-section">
                    <div className="desc-cards">
                        <h2 className="title-cards">Card List filter</h2>
                        <div className="cards-info">
                        It's a react app for filtering data. You have different type of cards taken from the server and with
                        this app you can filter them by: text, color and type. You can also use the ascending/descending option, to sort them
                        by alphabetical order.
                        <br/>
                        <br/>
                        <br/>
                        HTML, CSS, JavaScript, React
                        </div>
                        <div className="cards-btns">
                            <button className="cards-btn">Website</button>
                            <button className="cards-btn1">Code</button>
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
