import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import nextId from 'react-id-generator';

import "./App.css"
 
class App extends Component {
  state = {
  todos: [
    {
      id: nextId(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: nextId(),
      title: 'Dinner with family',
      completed: false
    },
    {
      id: nextId(),
      title: 'Meeting with boss',
      completed: false
    }
  ]
}

// Toggle Complete
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
    }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: nextId(),
      title,
      completed: false
    } 
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {  
      return (
      <div className="App">
        <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
       </div> 
    );
  }
}

export default App;