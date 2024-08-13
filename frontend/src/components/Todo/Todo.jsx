import React, { useState } from "react";
// import "./Todo.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleClick = evt => {
        remove(evt.target.id);
    };
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, task);
        toggleFrom();
    };
    const handleChange = evt => {
        setTask(evt.target.value);
    };
    const toggleCompleted = evt => {
        toggleComplete(evt.target.id);
    };

    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={handleChange} value={task} type="text" className="form-control" />
                    <button className="btn btn-danger"><TiTick /></button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="Todo">
                <li
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >
                    {todo.task}
                </li>
                <div className="Todo-buttons">
                    <button onClick={toggleFrom} className="btn btn-info">
                        <MdEdit />
                    </button>
                    <button onClick={handleClick} className="btn btn-danger" >
                        <MdDelete id={todo.id} />
                    </button>
                </div>
            </div>
        );
    }
    return result;
}

export default Todo;
