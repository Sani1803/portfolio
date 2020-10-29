import React, { Component } from 'react'
import NavBar from './NavBar';
import './MainSection.css';
import MainText from './MainText';

class MainSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="main">
                <div className="text">
                    <NavBar/>
                    <MainText/>
                </div>
            </div>
        )
    }
}

export default MainSection
