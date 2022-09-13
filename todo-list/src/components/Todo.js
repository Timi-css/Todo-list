import React from "react";
import "./Todo.scss";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="form-div" style={{ display: "flex" }}>
      <input
        className="task-input"
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button className="cancel-task" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}

export default Todo;
