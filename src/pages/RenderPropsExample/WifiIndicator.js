import React from 'react';
import ToggleIcon from '../components/ToggleIcon';

export default function WifiIndicator({ isOnline }) {
  return (
    <ToggleIcon
      primary={'wifi'}
      alternate={'wifi_off'}
      isPrimary={isOnline}
      disableAlt
    />
  );
}
