import React from 'react';
import ToggleIcon from '../components/ToggleIcon';
import OnlineStatus from './OnlineStatus';

const WifiIndicator = () => {
  return (
    <OnlineStatus
      render={({ isOnline }) => (
        <ToggleIcon
          primary={'wifi'}
          alternate={'wifi_off'}
          isPrimary={isOnline}
          disableAlt
        />
      )}
    />
  );
};

export default WifiIndicator;
