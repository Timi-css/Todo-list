import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.scss";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });

      // reset the task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button className="add-task" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
