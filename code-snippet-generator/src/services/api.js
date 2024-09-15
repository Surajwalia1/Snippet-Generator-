// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`, // Replace with your backend URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {

    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const signup = (credentials) => API.post('/auth/register', credentials);
export const generateCode = (description) => API.post('/generate', { description });
export const fetchNotifications = () => API.get('/notifications');
