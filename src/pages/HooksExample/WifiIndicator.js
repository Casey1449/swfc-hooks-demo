import React from 'react';
import useOnlineStatus from './useOnlineStatus';

export default function WifiIcon() {
  const isOnline = useOnlineStatus();
  return (
    <i className={`material-icons ${isOnline ? 'active' : 'inactive'}`}>
      {isOnline ? 'wifi' : 'wifi_off'}
    </i>
  );
}
