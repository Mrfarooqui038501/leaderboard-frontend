import React, { useState } from 'react';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAdd(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
