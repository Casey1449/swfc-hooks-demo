import React, { Component } from 'react';

function withLocalStorage(WrappedComponent) {
  class HOC extends Component {
    fetchItem = key => localStorage.getItem(key);

    saveItem = (key, data) => localStorage.setItem(key, data);

    removeItem = key => localStorage.removeItem(key);

    render() {
      return (
        <WrappedComponent
          fetchItem={this.fetchItem}
          saveItem={this.saveItem}
          removeItem={this.removeItem}
          {...this.props}
        />
      );
    }
  }

  return HOC;
}

export default withLocalStorage;
