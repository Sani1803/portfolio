import React, { Component } from 'react'
import './AboutMe.css';
import StaticHeader from './StaticHeader';
import CVimg from "./CVimg.jpg";
import painting from "./img/painting.png";
import tabletennis from "./img/tabletennis.png";
import interiordesign from "./img/interior-design.png";
import guitar from "./img/guitar.png";

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

                <div className="hobbies">
                    <div className="hobby-title">
                        <h2 className="h-title">What else i love !!!</h2>
                    </div>

                    <div className="hobby-imgs">
                        <div className="h-img">
                            <img className = "himg"src={painting} alt="painting"></img>
                            <div className="h-text">Painting</div>
                        </div>
                        <div className="h-img">
                            <img className = "himg"src={tabletennis} alt="tabletennis"></img>
                            <div className="h-text">Table Tennis</div>
                        </div>
                        <div className="h-img">
                            <img className = "himg"src={interiordesign} alt="interiordesign"></img>
                            <div className="h-text">Interior Design</div>
                        </div>
                        <div className="h-img">
                            <img className = "himg"src={guitar} alt="guitar"></img>
                            <div className="h-text">Guitar</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AboutMe
