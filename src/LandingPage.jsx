import React from 'react';
import Navbar from './Navbar';

function LandingPage({ todos, addTodo, removeTodo, newTodo, setNewTodo, isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="landing-page">
      <Navbar />
      <h1>To-Do</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
