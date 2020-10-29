import React, { Component } from 'react'
import './AboutMe.css';
import StaticHeader from './StaticHeader';
import CVimg from "./CVimg.jpg";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-section" id="about">
                <StaticHeader title="About Me" shortdesc="who I am"/>
                <div className="about-me">
                    <div className="img-container">
                        <img className = "about-me-img"src={CVimg} alt="CVimg"></img>
                    </div>
                    
                    <div className="text-container">
                        <p className="about-me-text">
                        &nbsp;&nbsp;Beginner in the IT Sector, fast learner and ambitious, having good logical, analytical and problem-solving skills, looking for a job as Front End Developer or QA Tester.
                        <br />
                        &nbsp;&nbsp;I am a career-changer from being an architect to starting as a front-end developer. I took the self-directed path using online resources like Udemy, FreeCodeCamps, Codevolution. I am ambitious, a hardworker with the 'I can do this' attitude!
                        <br />
                        &nbsp;&nbsp;So far I have knowledge of HTML, CSS, Bootstrap, JavaScript, jQuery and React. Because of being an architect I have great knowledge of a lot of programs, some of them even helped me in the IT Sector as well, like AutoCad, Adobe Photoshop and Sony Vegas.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
