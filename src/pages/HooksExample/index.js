import React from 'react';
import ChatButton from './ChatButton';
import WifiIndicator from './WifiIndicator';

const HooksExample = () => {
  return (
    <div className={'centering_wrapper'}>
      <h2 className="header">Hooks Example</h2>
      <ChatButton />
      <WifiIndicator />
    </div>
  );
};

export default HooksExample;
