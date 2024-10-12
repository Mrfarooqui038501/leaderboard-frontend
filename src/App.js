import React, { useEffect, useState } from 'react';
import { getUsers, claimPoints, getLeaderboard, addUser } from './api';
import UserSelect from './components/UserSelect';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import AddUser from './components/AddUser';  
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    loadUsers();
    loadLeaderboard();
  }, []);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const loadLeaderboard = async () => {
    const response = await getLeaderboard();
    setLeaderboard(response.data);
  };

  const handleClaimPoints = async (userId) => {
    await claimPoints(userId);
    loadLeaderboard();
  };

  const handleAddUser = async (name) => {
    await addUser(name);
    loadUsers();  
    loadLeaderboard();
  };

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <AddUser onAdd={handleAddUser} /> 
      <div className="select-container">
        <UserSelect users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
      <ClaimButton selectedUser={selectedUser} onClaim={handleClaimPoints} />
      <div className="leaderboard">
        <Leaderboard users={leaderboard} />
      </div>
    </div>
  );
};

export default App;
