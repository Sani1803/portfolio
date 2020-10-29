import React, { Component } from 'react'
import './ToDoList.css';
import todolist from "./img/todolist.png";

export class ToDoList extends Component {
    render() {
        return (
            <div className="todo-section">

                <div className="descr-todo-section">
                    <div className="desc-todo">
                        <h2>Color Game Project</h2>
                        <div className="todo-info">
                        This is my first ever game made with HTML, CSS and Javascript. 
                        It is a Color Guessing Game with the help of RGB colors where you have to guess the right color.
                        </div>
                        <div className="todo-btn">
                            <button>Website</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>

                <div className="img-todo-section">
                    <img className="todo-img"src={todolist} alt="todolist"></img>
                </div>

            </div>
        )
    }
}

export default ToDoList
