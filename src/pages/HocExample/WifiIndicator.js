import React from 'react';
import ToggleIcon from '../components/ToggleIcon';
import withOnlineStatus from './withOnlineStatus';

const WifiIndicator = ({ isOnline }) => {
  return (
    <ToggleIcon
      primary={'wifi'}
      alternate={'wifi_off'}
      isPrimary={isOnline}
      disableAlt
    />
  );
};

export default withOnlineStatus(WifiIndicator);
