import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDo: ""
        }

    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ newToDo: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.newToDo) {
            this.props.addNewToDo(this.state.newToDo);
        }
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="todo"
                        value={this.state.newToDo}
                    />
                    <br />
                    <button>Add Task</button>

                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>

        )
    }

}

export default TodoForm;