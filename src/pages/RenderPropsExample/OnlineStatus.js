import { Component } from 'react';

class OnlineStatus extends Component {
  initialState =
    window && window.navigator && typeof window.navigator.onLine === 'boolean'
      ? window.navigator.onLine
      : true;

  state = {
    isOnline: this.initialState,
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
    return this.props.render({ isOnline: this.state.isOnline });
  }
}

export default OnlineStatus;
