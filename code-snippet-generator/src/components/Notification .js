// src/components/Notification.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notification.css';

const Notification = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const requestId = 'example-request-id'; // This should be dynamic based on the code generation request

  useEffect(() => {
    const interval = setInterval(() => {
      checkStatus();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const checkStatus = async () => {
    try {
      const response = await axios.get(`/api/status/${requestId}`);
      setStatus(response.data.status);
      setLoading(false);
    } catch (err) {
      setError('Error checking status.');
      setLoading(false);
    }
  };

  return (
    <div className="notification">
      {loading ? (
        <p>Checking for updates...</p>
      ) : status === 'ready' ? (
        <p>Your code snippet is ready! <a href="/generated-code">View Code</a></p>
      ) : (
        <p>Code snippet is still being generated...</p>
      )}
     
    </div>
  );
};

export default Notification;
