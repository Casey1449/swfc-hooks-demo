import React from 'react';
import OnlineStatus from './OnlineStatus';

function ChatButton({ isOnline }) {
  return (
    <div>
      <h1>You are {isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default () => {
  return (
    <OnlineStatus
      render={({ isOnline }) => <ChatButton isOnline={isOnline} />}
    />
  );
};
