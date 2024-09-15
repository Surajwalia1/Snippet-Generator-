import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import './Dashboard.css'; // Import the CSS file
import CodeGenerator from '../components/CodeGenerator';
import Notification from '../components/Notification';

const Dashboard = () => {
  const navigate = useNavigate(); // React Router's hook for navigation

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Redirect to the login page (or home page)
    navigate('/login');
  };

  console.log("token: ", localStorage.getItem("token"));

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="header">
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </ul>
        </nav>
      </header>

      <h1>User Dashboard</h1>
      <div className="dashboard-content">
        <div className="component-wrapper">
          <CodeGenerator />
        </div>
        <div className="component-wrapper">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
