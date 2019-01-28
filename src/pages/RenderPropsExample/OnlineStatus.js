import { Component } from 'react';

class OnlineStatus extends Component {
  initialStatus =
    window &&
    window.navigator !== 'undefined' &&
    typeof window.navigator.onLine === 'boolean'
      ? window.navigator.onLine
      : true;

  state = {
    isOnline: this.initialStatus,
  };

  setOnline = () => this.setState({ isOnline: true });

  setOffline = () => this.setState({ isOnline: false });

  componentDidMount() {
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnline);
    window.removeEventListener('offline', this.setOffline);
  }

  render() {
    return this.props.render({
      isOnline: this.state.isOnline,
    });
  }
}

export default OnlineStatus;
