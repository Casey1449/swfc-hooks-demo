import React from 'react';
import useOnlineStatus from './useOnlineStatus';
import Button from '../components/Button';

export default function ChatButton(props) {
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
}
