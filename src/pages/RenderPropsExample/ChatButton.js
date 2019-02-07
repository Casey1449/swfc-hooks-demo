import React, { Component } from 'react';
import Button from '../components/Button';

class ChatButton extends Component {
  initialState =
    window && window.navigator && typeof window.navigator.onLine === 'boolean'
      ? window.navigator.onLine
      : true;
  state = { isOnline: this.initialState };

  componentDidMount() {
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
  }

  setOnline = () => this.setState({ isOnline: true });
  setOffline = () => this.setState({ isOnline: false });

  componentWillUnMount() {
    window.removeEventListener('online', this.setOnline);
    window.removeEventListener('offline', this.setOffline);
  }
  render() {
    return (
      <Button
        disabled={!this.state.isOnline}
        error={!this.state.isOnline}
        errorText={'You must be online to use chat'}
      >
        Chat
      </Button>
    );
  }
}

export default ChatButton;
