import React, { Component } from 'react';
import Storage from './Storage';

class Form extends Component {
  state = {
    displayName: '',
    name: '',
  };

  componentDidMount = () => {
    const storedName = this.props.fetchItem('renderPropsName');
    if (storedName) {
      this.setState({ displayName: storedName });
    }
  };

  handleNameUpdate = e => this.setState({ name: e.target.value });

  saveName = () => {
    this.setState({ displayName: this.state.name });
    this.props.saveItem('renderPropsName', this.state.name);
  };

  render() {
    const { displayName } = this.state;
    return (
      <div>
        <h1>{displayName ? `Hi ${displayName}!` : 'No name saved'}</h1>
        <input
          type="text"
          onChange={this.handleNameUpdate}
          placeholder="name"
        />
        <button onClick={this.saveName}>Save</button>
      </div>
    );
  }
}

export default () => {
  return (
    <Storage
      render={({ fetchItem, saveItem, removeItem }) => (
        <Form
          fetchItem={fetchItem}
          saveItem={saveItem}
          removeItem={removeItem}
        />
      )}
    />
  );
};
