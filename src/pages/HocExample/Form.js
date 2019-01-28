import React, { Component } from 'react';
import withLocalStorage from './withLocalStorage';

class Form extends Component {
  state = {
    sortBy: '',
  };

  handleChange = e => this.setState({ sortBy: e.target.value });

  render() {
    return (
      <>
        <div id="txtboxLabel">Sort by</div>
        <select value={this.state.sortBy} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </>
    );
  }
}

export default withLocalStorage(Form);
