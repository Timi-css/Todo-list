import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>ToDo List</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
