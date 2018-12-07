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
        <div className="Todo-container">
          <input type="text" className="todo-input" placeholder="What needs to be done" />

          <div className="todo-item">
            <div className="todo-item-left">
              <input type="checkbox" />
              <div class="todo-item-label">Todo Item 1</div>

            </div>

            <div className="remove-item">
              &times;
            </div>
          </div>

          <div className="extra-container">
            <div><label><input type="checkbox" /> Check All </label></div>
            <div>2 items left</div>
          </div>

          <div className="extra-container">
            <div>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
