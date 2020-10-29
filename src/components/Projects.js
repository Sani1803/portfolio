import React, { Component } from 'react'
import StaticHeader from './StaticHeader';
import './Projects.css';
import ToDoList from './ToDoList';
import ColorGame from './ColorGame';
import Papatap from './Papatap';
import CardsList from './CardsList';

export class Projects extends Component {
    render() {
        return (
            <div>
                <div className="prHead">
                    <StaticHeader title="Projects" shortdesc="what I have made"/>
                </div>
                <div className="projects">
                    <ColorGame/>
                    <ToDoList/>
                    <Papatap/>
                    <CardsList/>
                </div>
                
            </div>
        )
    }
}

export default Projects
