import React, { Component } from 'react'
import './NavBar.css';
import { Link } from 'react-scroll';

class NavBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        return (
            <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                <Link activeClass="active" to="about" spy={true} smooth={true} duration={600}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={600}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                Projects    
                            </li>
                            <li>
                                Contact    
                            </li>
                        </ul>
                    </nav>
            </div>
        )
    }
}


export default NavBar
