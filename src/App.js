import React from 'react'; 
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

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

  toggleTask = itemId => {
    this.setState({
        items: this.state.items.map(item => {
            if(itemId === item.id) {
                return { 
                    ...item, 
                    completed: !item.completed 
                }
            }
            return item;
        })
    })
}

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList
          items={this.state.items}
          toggleTask={this.toggleTask}
        />
        <TodoForm
          addTask={this.addTask}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
