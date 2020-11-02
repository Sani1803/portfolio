import React, { Component } from 'react'
import './ToDoList.css';
import todolist from "./img/todolist.png";

export class ToDoList extends Component {
    render() {
        return (
            <div className="todo-section">

                <div className="descr-todo-section">
                    <div className="desc-todo">
                        <h2 className="title-todo">To-Do-List</h2>
                        <div className="todo-info">
                        It is a simple To-Do app. And who doesn't need one?
                        Make your to-do list, add you items / chores and
                        when you finish with them, just click the delete button. 
                        If you want to add another item that you forgot, just click the + sign.                   
                        <br/>
                        <br/>
                        HTML, CSS, JavaScript, jQuery
                        </div>
                        <div className="todo-btns">
                            <a href="https://sani1803.github.io/todolist/" target="_blank">
                                <button className="todo-btn">Website</button>
                            </a>
                            <a href="https://github.com/Sani1803/todolist" target="_blank">
                                <button className="todo-btn1">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="img-todo-section">
                    <img className="todo-img"src={todolist} alt="todolist"></img>
                    <div className="todo-middle">
                        <a href="https://sani1803.github.io/todolist/" target="_blank">
                            <button className="todo-middle-btn">Check it Out !!!</button>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default ToDoList
