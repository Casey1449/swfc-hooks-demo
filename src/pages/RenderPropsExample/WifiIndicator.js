import React from 'react';
import ToggleIcon from '../components/ToggleIcon';
import OnlineStatus from './OnlineStatus';

export default function WifiIndicator(props) {
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
}
