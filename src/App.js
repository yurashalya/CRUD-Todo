import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div clasName="Todo-container">
          <input type="text" className="todo-input" placeholder="What needs to be done" />
        </div>
      </div>
    );
  }
}

export default App;
