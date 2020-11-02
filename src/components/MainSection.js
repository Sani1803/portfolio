import React, { Component } from 'react'
import Navbar from './Navbar';
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
            <div className="main" id="home">
                <div className="text">
                    <Navbar/>
                    <MainText/>
                </div>
            </div>
        )
    }
}

export default MainSection
