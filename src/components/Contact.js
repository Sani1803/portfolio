import React, { Component } from 'react'
import StaticHeader from './StaticHeader';
import './Contact.css';
import map from "./img/map.png";
import name from "./img/name.png";
import adress from "./img/adress.png";
import email from "./img/email.png";
import fb from "./img/fb.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";

export class Contact extends Component {
    render() {
        return (
            <div className="contact-section">
                <div className="contactHead">
                    <StaticHeader title="Contact" shortdesc="get in touch"/>
                </div>
                <div className="contact-info">
                    <div className="contact-text">
                        <h2>Get in Touch</h2>
                        <p className="ctext">You can contact me if you have any questions about me,
                           my skills or my projects. 
                           <br/>
                           I will response as soon as possible.
                        </p>
                        <div className="info">
                            <img className="icon-c"src={name} alt="name"></img>
                            <div className="text">
                                <div><b>Name</b></div>
                                <div>Aleksandra Gjurova</div>
                            </div>
                        </div>
                        <div className="info">
                            <img className="icon-c"src={adress} alt="adress"></img>
                            <div className="text">
                                <div><b>Address</b></div>
                                <div>Skopje, Macedonia</div>
                            </div>
                        </div>
                        <div className="info">
                            <img className="icon-c"src={email} alt="email"></img>
                            <div className="text">
                                <div><b>E-mail</b></div>
                                <div>aleksandra-gjurova@hotmail.com</div>
                            </div>
                        </div>
                        <div className="social-media">
                            <div className="container">
                                <img className="icon-c"src={fb} alt="fb"></img>
                                <img className="icon-c"src={insta} alt="insta"></img>
                                <img className="icon-c"src={linkedin} alt="linkedin"></img>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        <a href="https://www.google.com/maps/place/Skopje/@41.9991355,21.3818263,12.14z/data=!4m5!3m4!1s0x135415a58c9aa2a5:0xb2ed88c260872020!8m2!3d41.9981294!4d21.4254355?hl=en">
                        <img className = "map-img"src={map} alt="map"></img>
                        </a>
                    </div>   
                </div>          
            </div>
        )
    }
}

export default Contact
