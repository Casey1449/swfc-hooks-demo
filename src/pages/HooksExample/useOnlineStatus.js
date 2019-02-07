import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const initialState =
    window && window.navigator && typeof window.navigator.onLine === 'boolean'
      ? window.navigator.onLine
      : true;

  const [isOnline, setStatus] = useState(initialState);

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

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
