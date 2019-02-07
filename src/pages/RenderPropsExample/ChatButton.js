import React from 'react';
import OnlineStatus from './OnlineStatus';
import Button from '../components/Button';

export default function ChatButton({ isOnline }) {
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
}
