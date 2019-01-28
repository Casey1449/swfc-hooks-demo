import React from 'react';
import withOnlineStatus from './withOnlineStatus';

function ChatButton({ isOnline }) {
  return (
    <div>
      <h1>You are {isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default withOnlineStatus(ChatButton);
