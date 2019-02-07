import React from 'react';
import Button from '../components/Button';
import useOnlineStatus from './useOnlineStatus';

const ChatButton = () => {
  const isOnline = useOnlineStatus();
  return (
    <Button
      disabled={!isOnline}
      error={!isOnline}
      errorText={'You must be online to use chat'}
    >
      Chat
    </Button>
  );
};

export default ChatButton;
