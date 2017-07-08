import React, { Component } from 'react'
import ListItem from './list_item'

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      placeholder: 'Enter todo name',
      done: [],
      creating: true,
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      var todos = this.state.todos;
      var newTodo = {
        name: e.target.value,
        key : (Math.random() *  100).toString(32)
      }
      todos.push(newTodo);
      this.setState({todos: todos });
      e.target.value = '';
    }
  }

  do = (name, id) => {
    var todos = this.state.todos;
    var done = this.state.done;
    this.setState({
      creating: false
    });
    done.push({
      name: name,
      key : (Math.random() *  100).toString(32)
    })
    setTimeout(() => {
      this.setState({
        todos: todos.filter(todo => todo.key != id),
        done: done
      });
    }, 300);
  }

  delete = (name, id) => {
    var done = this.state.done;
    this.setState({
      creating: false
    });
    setTimeout(() => {
      this.setState({
        done: done.filter(todo => todo.key != id),
      });
    }, 300);
  }

  render() {
    return (
      <div className = 'fade-in'>
        <input
        type="text"
        className = "input"
        placeholder={this.state.placeholder}
        onKeyPress={this.handleKeyPress} />
        <ul className = 'todos' >
          {this.state.todos.map(x =>
            <ListItem
              style="todo"
              onClick={this.do}
              id={x.key}
              key={x.key}
              item={x}/>
          )}
        </ul>
        <ul className = 'todos' >
          {this.state.done.map(x =>
            <ListItem
              style="done"
              onClick={this.delete}
              id={x.key}
              key={x.key}
              item={x}/>
          )}
        </ul>
      </div>
    )
  }
}

export default ToDos;
