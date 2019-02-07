import React from 'react';
import ToggleIcon from '../components/ToggleIcon';
import useOnlineStatus from './useOnlineStatus';

const WifiIndicator = () => {
  const isOnline = useOnlineStatus();
  return (
    <ToggleIcon
      primary={'wifi'}
      alternate={'wifi_off'}
      isPrimary={isOnline}
      disableAlt
    />
  );
};

export default WifiIndicator;
