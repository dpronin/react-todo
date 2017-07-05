import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ToDos from './components/todos_component'
import styles from './styles/styles.scss'

class App extends Component {

  render() {
    return (
      <div>
        <ToDos
          type="text"
          value="todo"
        />
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
