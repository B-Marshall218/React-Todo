import React from 'react';
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ToDo from "./components/Todo";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Make Dinner',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Mow Lawn',
    id: 1528817084355,
    completed: false
  },
  {
    task: 'Finish ToDo Project',
    id: 1528817084359,
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
      todos
    }
  }

  toggleCompleted = taskId => {
    console.log("task id:", taskId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (taskId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
    console.log(this.state.todos)
  }
  addNewToDo = toDoTask => {
    console.log("todo task:", toDoTask);
    this.setState({
      todos: [
        ...this.state.todos,
        { task: toDoTask, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    console.log("clear completed")
    this.setState({
      todos: this.state.todos.filter(data => {
        return !data.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <TodoForm
            addNewToDo={this.addNewToDo}
            clearCompleted={this.clearCompleted}
          />
          <TodoList
            toggleCompleted={this.toggleCompleted}
            todos={this.state.todos}

          />

        </div>
        {this.state.todos.map(todo => <ToDo data={todo} toggleCompleted={this.toggleCompleted} />)}
      </div>
    );
  }
}

export default App;
