import React, { useState, useReducer } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
// import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            task: ""
        }
    );

    const handleChange = evt => {
        setUserInput({ [evt.target.name]: evt.target.value });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newTodo = {
            id: uuidv4(),
            task: userInput.task, completed: false
        };
        createTodo(newTodo);
        setUserInput({ task: "" });
    };

    return (
        <form className="NewTodoForm d-flex" onSubmit={handleSubmit}>
            <input
                value={userInput.task}
                onChange={handleChange}
                id="task"
                type="text"
                name="task"
                placeholder="New Todo"
                className="form-control"
            />
            <button className="btn btn-info"><FaPlus /></button>
        </form>
    );
}

export default NewTodoForm;
