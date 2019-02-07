import React from 'react';
import ToggleIcon from '../components/ToggleIcon';

const WifiIndicator = () => {
  return (
    <ToggleIcon
      primary={'wifi'}
      alternate={'wifi_off'}
      // isPrimary={isOnline}
      disableAlt
    />
  );
};

export default WifiIndicator;
