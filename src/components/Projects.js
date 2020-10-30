import React, { Component } from 'react'
import StaticHeader from './StaticHeader';
import './Projects.css';
import ToDoList from './ToDoList';
import ColorGame from './ColorGame';
import Patatap from './Patatap';
import CardsList from './CardsList';

export class Projects extends Component {
    render() {
        return (
            <div className="pr-section">
                <div className="prHead">
                    <StaticHeader title="Projects" shortdesc="what I have made"/>
                </div>
                <div className="projects">
                    <ColorGame/>
                    <ToDoList/>
                    <Patatap/>
                    <CardsList/>
                </div>
                
            </div>
        )
    }
}

export default Projects
