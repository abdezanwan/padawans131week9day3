import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage todos={todos} addTodo={addTodo} removeTodo={removeTodo} newTodo={newTodo} setNewTodo={setNewTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
