import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = () => {
  return apiClient.get('/users');
};

export const createUser = (userData) => {
  return apiClient.post('/users', userData);
};
