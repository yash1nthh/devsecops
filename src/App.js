import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="todo-form">
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Enter a new task" 
          />
          <button onClick={addTodo}>Add Task</button>
        </div>
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="todo-item">
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={() => toggleTodo(todo.id)} 
                />
                <span className="task-text">{todo.task}</span>
              </div>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
