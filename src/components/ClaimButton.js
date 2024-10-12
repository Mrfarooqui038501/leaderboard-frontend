import React from 'react';

const ClaimButton = ({ selectedUser, onClaim }) => {
  return (
    <button onClick={() => onClaim(selectedUser)} disabled={!selectedUser}>
      Claim Points
    </button>
  );
};

export default ClaimButton;
