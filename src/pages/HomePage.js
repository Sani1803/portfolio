import React, { Component } from 'react'
import MainSection from '../components/MainSection';
import AboutMe from '../components/AboutMe';
import TechnicalSkills from '../components/TechnicalSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <MainSection />
                <AboutMe />
                <TechnicalSkills/>
                <Projects/>
                <Contact/>
            </div>     
        )
    }
}

export default HomePage
