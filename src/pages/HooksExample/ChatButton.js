import React from 'react';
import Button from '../components/Button';

export default function ChatButton(props) {
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
