import React, { Component } from 'react';

function withConsoleLog(WrappedComponent) {
  class withConsoleLog extends Component {
    componentDidMount() {
      console.log("You used the 'withConsoleLog' HOC!");
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  withConsoleLog.displayName = `withConsoleLog(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'AnonComponent'})`;
  return withConsoleLog;
}

export default withConsoleLog;
