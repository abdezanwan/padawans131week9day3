import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/todos">Todo List</a>
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    </div>
  );
}

export default Navbar;
