import React, { Component } from 'react';

function HOC(WrappedComponent) {
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

  return withOnlineStatus;
}

export default HOC;
