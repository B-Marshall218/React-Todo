import React from 'react';
import TaskList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"



const todoData = [
  {
    task: "Organize Garage",
    id: 12,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 12334,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoData

    };
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  }

  render() {
    return (
      <div className="App">
        <h2>List of chores for you</h2>
        <TaskList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
