import React from 'react';
import Button from '../components/Button';
import OnlineStatus from './OnlineStatus';

const ChatButton = () => {
  return (
    <OnlineStatus
      render={({ isOnline }) => (
        <Button
          disabled={!isOnline}
          error={!isOnline}
          errorText={'You must be online to use chat'}
        >
          Chat
        </Button>
      )}
    />
  );
};

export default ChatButton;
