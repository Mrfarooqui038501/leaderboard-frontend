import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getUsers = () => axios.get(API_URL);
export const addUser = (name) => axios.post(API_URL, { name });
export const claimPoints = (userId) => axios.post(`${API_URL}/claim/${userId}`);
export const getLeaderboard = () => axios.get(`${API_URL}/leaderboard`);
