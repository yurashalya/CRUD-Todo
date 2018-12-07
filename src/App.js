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

          
          {this.state.todos.map((todo, index) => 
            <div key={todo.id} className="todo-item">
            <div className="todo-item-left">
              <input type="checkbox" />
              <div className="todo-item-label">{todo.title}</div>
            </div>
            <div className="remove-item">
              &times;
            </div>
          </div>
          )}

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

            <div>
              <button>Clear Complete</button>
            </div> 
          </div>

        </div>
      </div>
    );
  }

  state = {
    todos: [
      {
        'id': 1,
        'title': 'OSDB - front-end development',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'OSDB - back-end development',
        'completed': false,
        'editing': false,
      }
    ]
  }
}

export default App;
