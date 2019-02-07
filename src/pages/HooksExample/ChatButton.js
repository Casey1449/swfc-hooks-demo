import React from 'react';
import Button from '../components/Button';
import useConsoleLog from '../components/useConsoleLog';
import useOnlineStatus from './useOnlineStatus';

const ChatButton = () => {
  useConsoleLog();
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
