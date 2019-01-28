import React from 'react';
import useOnlineStatus from './useOnlineStatus';

function ChatButton() {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <h1>You are {isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default ChatButton;
