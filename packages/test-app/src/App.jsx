import React, { Component } from 'react';
import logo from '@/logo.svg';
import '@/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Reforged by Team One',
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
          <p>This is a really long message that I dont really want to refactor into a smaller file because reasons :)</p>
        </header>
      </div>
    );
  }
}

export default App;
