import React from 'react';
import ChatButton from './ChatButton';
// import WifiIndicator from './WifiIndicator';

const HocExample = () => {
  return (
    <div className={'centering_wrapper'}>
      <h2 className="header">Higher Order Components Example</h2>
      <ChatButton />
      {/* <WifiIndicator /> */}
    </div>
  );
};

export default HocExample;
