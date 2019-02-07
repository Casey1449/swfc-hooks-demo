import React, { Component } from 'react';

function withOnlineStatus(WrappedComponent) {
  class withOnlineStatus extends Component {
    initialStatus =
      window &&
      window.navigator !== 'undefined' &&
      typeof window.navigator.onLine === 'boolean'
        ? window.navigator.onLine
        : true;

    state = {
      isOnline: this.initialStatus,
    };

    componentDidMount() {
      window.addEventListener('online', this.setOnline);
      window.addEventListener('offline', this.setOffline);
    }

    setOnline = () => this.setState({ isOnline: true });

    setOffline = () => this.setState({ isOnline: false });

    componentWillUnmount() {
      window.removeEventListener('online', this.setOnline);
      window.removeEventListener('offline', this.setOffline);
    }

    render() {
      return <WrappedComponent isOnline={this.state.isOnline} />;
    }
  }

  withOnlineStatus.displayName = `WithOnlineStatus(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return withOnlineStatus;
}

export withOnlineStatus;


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

export useOnlineStatus;
