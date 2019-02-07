import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="page-title">
            SWFL Coders Hooks Demo{' '}
            <span role="img" aria-label="flame emoji">
              🔥
            </span>
          </h1>
        </header>
        <Tabs />
      </div>
    );
  }
}

export default App;
