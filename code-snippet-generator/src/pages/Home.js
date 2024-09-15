// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the AI-Based Code Snippet Generator</h1>
        <p>This tool helps developers generate code snippets based on descriptions of desired functionality.</p>
        <div className="button-container">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
