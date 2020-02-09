import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id:1, content:'Drink milk'},
      {id:2, content:'Watch movie'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id
    })

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    )
  }
}

export default App;
