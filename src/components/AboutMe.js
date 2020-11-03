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
                        &nbsp;&nbsp;&nbsp;&nbsp;I am a beginner in the IT Sector, fast learner, hard worker and very ambitious person with the <b><em>'I can do this'</em></b> attitude!
                        I enjoy the process of problem solving on daily basis, working on improving and meeting the needs of a project at a highest level possible using logical and analytical skills. 
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;I am a career-changer from being an architect to starting as a <b><em>Front End Developer.</em></b> I took the self-directed path using online resources like Udemy, FreeCodeCamps, Codevolution.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;So far I have knowledge of HTML, CSS, Bootstrap, JavaScript, jQuery and React, but I am also eager to learn new technologies. I offer a great knowledge of a lot of other programs that I believe can benefit me in the IT Sector as well, like AutoCAD, Adobe Photoshop and Sony Vegas.
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
