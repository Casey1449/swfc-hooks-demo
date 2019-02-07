import React from 'react';
import Button from '../components/Button';
import ConsoleLog from '../components/ConsoleLog';
import OnlineStatus from './OnlineStatus';

const ChatButton = () => {
  return (
    <ConsoleLog
      render={() => (
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
      )}
    />
  );
};

export default ChatButton;
