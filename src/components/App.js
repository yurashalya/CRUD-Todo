import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodosRemaining from './TodosRemaining'
import TodoItem from './TodoItem'
import TodosCheckAll from './TodosCheckAll'
import TodosFiltered from './TodosFiltered'
import TodosClearCompleted from './TodosClearCompleted'
import { inject, observer } from 'mobx-react';
 

@inject('TodoStore')
@observer

class App extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Todo-container">
          <input type="text" className="todo-input" placeholder="What needs to be done"
            ref={TodoStore.todoInput} onKeyUp={TodoStore.addTodo}
          />
 
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
          {TodoStore.todosFiltered.map((todo, index) => 
          <TodoItem 
            key = {todo.id}
            todo = {todo}
            index = {index}
          />
          
          )}

          </ReactCSSTransitionGroup>

          <div className="extra-container">
            <TodosCheckAll  />
            <TodosRemaining />
          </div>

          <div className="extra-container">
            <TodosFiltered  />

            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >

            {TodoStore.todosCompletedCount > 0 &&
              <TodosClearCompleted />
            }
            </ReactCSSTransitionGroup>

          </div>
        </div> 
      </div>
    );
  }

  // todoInput = React.createRef();

  state = {
    filter: 'all',
    beforeEditCache: '',
    idForTodo: 3,
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

  
  // remaining = () => {
  //   return this.state.todos.filter(todo => !todo.completed).length;
  // }

  // anyRemaining = () => {
  //   return this.remaining() !== 0;
  // }

  // todosCompletedCount = () => {
  //   return this.state.todos.filter(todo => todo.completed).length;
  // }

  // clearCompleted = () => {
  //   this.setState((prevState, props) => {
  //     return {
  //       todos: prevState.todos.filter(todo => !todo.completed)
  //     };
  //   });
  // }

  // updateFilter = filter => {
  //   this.setState({ filter });
  // }

  // todosFiltered = () => {
  //   if (this.state.filter === 'all') {
  //     return this.state.todos;
  //   } else if (this.state.filter === 'active') {
  //     return this.state.todos.filter(todo => !todo.completed);
  //   } else if (this.state.filter === 'completed') {
  //     return this.state.todos.filter(todo => todo.completed);
  //   }

  //   return this.state.todos;
  // }

  // checkAllTodos = (event) => {

  //   event.persist();

  //   this.setState((prevState, props) => {
  //     let todos = prevState.todos;

  //     todos.forEach((todo) => todo.completed = event.target.checked);

  //     return { todos };
  //   });
  // }
}



export default App;


