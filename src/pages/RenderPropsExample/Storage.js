import React, { Component } from 'react';

class Storage extends Component {
  fetchItem = key => localStorage.getItem(key);

  saveItem = (key, data) => localStorage.setItem(key, data);

  removeItem = key => localStorage.removeItem(key);

  render() {
    return (
      <span>
        {this.props.render({
          fetchItem: this.fetchItem,
          saveItem: this.saveItem,
          removeItem: this.removeItem,
        })}
      </span>
    );
  }
}

export default Storage;
