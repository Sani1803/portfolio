import React, { Component } from 'react'
import './AboutMe.css';
import StaticHeader from './StaticHeader';
import CVimg from "./CVimg.jpg";
import painting from "./img/painting.png";
import tabletennis from "./img/tabletennis.png";
import interiordesign from "./img/interior-design.png";
import guitar from "./img/guitar.png";

import {Modal} from 'react-bootstrap'
import int0 from "./img/interior/00int.jpg";
import int1 from "./img/interior/01int.jpg";
import int2 from "./img/interior/02int.jpg";
import int3 from "./img/interior/03int.jpg";
import int4 from "./img/interior/04int.jpg";
import int5 from "./img/interior/05int.jpg";
import int6 from "./img/interior/06int.jpg";
import int7 from "./img/interior/07int.jpg";
import int8 from "./img/interior/08int.jpg";
import int9 from "./img/interior/09int.jpg";
import int10 from "./img/interior/10int.jpg";
import int11 from "./img/interior/11int.jpg";
import int12 from "./img/interior/12int.jpg";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class AboutMe extends Component {

    constructor(){
        super();
        this.state = {
            showHide : false,
            imagesList: [
                {
                    original: int0,
                    thumbnail: int0,
                },
                {
                    original: int1,
                    thumbnail: int1,
                },
                {
                    original: int2,
                    thumbnail: int2,
                },
                {
                    original: int3,
                    thumbnail: int3,
                },
                {
                    original: int4,
                    thumbnail: int4,
                },
                {
                    original: int5,
                    thumbnail: int5,
                },
                {
                    original: int6,
                    thumbnail: int6,
                },
                {
                    original: int7,
                    thumbnail: int7,
                },
                {
                    original: int8,
                    thumbnail: int8,
                },
                {
                    original: int9,
                    thumbnail: int9,
                },
                {
                    original: int10,
                    thumbnail: int10,
                },
                {
                    original: int11,
                    thumbnail: int11,
                },
                {
                    original: int12,
                    thumbnail: int12,
                }
            ]
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

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
                            <img className = "himg modalinterior"src={interiordesign} alt="interiordesign" onClick={() => this.handleModalShowHide()}></img>
                            <div className="h-text modalinteriortext" onClick={() => this.handleModalShowHide()}>Interior Design</div>
                        </div>
            
                        <Modal size="lg" show={this.state.showHide}>
                            <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title className="modal-title">Interior Design - 3D Visualization</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ImageGallery
                                    items={this.state.imagesList}
                                    showBullets={true}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                    Close
                                </Button> */}
                            </Modal.Footer>
                        </Modal>

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
