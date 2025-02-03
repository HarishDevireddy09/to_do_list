import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const pushTask = () => {
    if (editIndex === null) {
      setTodos((prev) => [...prev, text]);
    } else {
      setTodos((prev) =>
        prev.map((todo, index) => (index === editIndex ? text : todo))
      );
      setEditIndex(null);
    }
    setText("");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const deleteTask = (indexToDelete) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const editHandler = (indexToChange) => {
    setText(todos[indexToChange]);
    setEditIndex(indexToChange);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-3">To-Do List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={pushTask}>
            {editIndex === null ? "Add" : "Update"}
          </button>
        </div>
        <button className="btn btn-danger w-100 mb-3" onClick={deleteAll}>Delete All</button>
      </div>
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => editHandler(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
