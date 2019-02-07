import React from 'react';
import Button from '../components/Button';
import withConsoleLog from '../components/withConsoleLog';
import withOnlineStatus from './withOnlineStatus';

const ChatButton = ({ isOnline }) => {
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

export default withConsoleLog(withOnlineStatus(ChatButton));
