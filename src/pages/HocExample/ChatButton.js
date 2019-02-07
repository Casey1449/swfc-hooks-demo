import React from 'react';
import withOnlineStatus from './withOnlineStatus';
import Button from '../components/Button';

function ChatButton({ isOnline }) {
  return (
    <Button
      disabled={!isOnline}
      error={!isOnline}
      errorText={'You must be online to use chat'}
    >
      Chat
    </Button>
  );
}

export default withOnlineStatus(ChatButton);
