import React from 'react';
import ChatButton from './ChatButton';
import WifiIndicator from './WifiIndicator';

export default function RenderPropsExample() {
  return (
    <div className={'centering_wrapper'}>
      <h2 className="header">Render Props Example</h2>
      <ChatButton />
      <WifiIndicator />
    </div>
  );
}
