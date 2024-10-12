import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user._id}>
            {index + 1}. {user.name}: {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
