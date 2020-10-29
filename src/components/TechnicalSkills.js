import React, { Component } from 'react'
import StaticHeader from './StaticHeader';
import './TechnicalSkills.css';
import html from "./img/html.png";
import css from "./img/css.png";
import bootstrap from "./img/bootstrap.png";
import jquery from "./img/jquery.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import git from "./img/git.png";
import github from "./img/github.png";
import photoshop from "./img/photoshop.png";

export class TechnicalSkills extends Component {
    render() {
        return (
            <div className="techskills-section" id="skills">
                <div className="tsHead">
                    <StaticHeader title="Technical Skills" shortdesc="who do I use"/>
                </div>
               
                <div className="tech-skills">
                    <div className="icons"> 
                        <img className="icon"src={html} alt="html"></img>
                        <p className="logotext">HTML</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={css} alt="css"></img>
                        <p className="logotext">CSS</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={bootstrap} alt="css"></img>
                        <p className="logotext">BootStrap</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={jquery} alt="css"></img>
                        <p className="logotext">jQuery</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={javascript} alt="css"></img>
                        <p className="logotext">Java Script</p>
                    </div>
                    <br />
                    <div className="icons">
                        <img className="icon"src={react} alt="css"></img>
                        <p className="logotext">React</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={redux} alt="css"></img>
                        <p className="logotext">Redux</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={git} alt="css"></img>
                        <p className="logotext">Git</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={github} alt="css"></img>
                        <p className="logotext">Github</p>
                    </div>
                    <div className="icons">
                        <img className="icon"src={photoshop} alt="css"></img>
                        <p className="logotext">Photoshop</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TechnicalSkills
