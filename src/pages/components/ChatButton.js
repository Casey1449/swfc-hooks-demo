import React from 'react';
import Button from 'antd/lib/button';

export default function ChatButton({ isOnline }) {
  return (
    <div>
      <Button size={'large'} disabled={!isOnline}>
        Chat
      </Button>
      {!isOnline && (
        <span style={{ color: 'red' }}>
          You must be online to use live chat
        </span>
      )}
    </div>
  );
}
