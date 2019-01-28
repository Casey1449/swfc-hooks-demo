import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const initialStatus =
    window &&
    window.navigator !== 'undefined' &&
    typeof window.navigator.onLine === 'boolean'
      ? window.navigator.onLine
      : true;

  let [isOnline, setOnlineStatus] = useState(initialStatus);

  const setOnline = () => setOnlineStatus(true);

  const setOffline = () => setOnlineStatus(false);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
