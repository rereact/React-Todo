import React from 'react'; 
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

const items = [
  {
    task: 'Finish React Project',
    id: 1,
    completed: false
  },
  {
    task: 'ReReact',
    id: 2,
    completed: false
  },
  {
    task: 'Reeeact',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items
    }
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      items: [...this.state.items, newTask]
    })
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
