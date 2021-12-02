import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTasks
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">
          TODO REACT
          <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTask} onChange={this.handleTaskChange} type="text" className="new-task" />
          <h2 className="test-label">{this.state.newTask}</h2>
        </form>
        {
          this.state.tasks.map(task =>
            <div className="task-container">
              <h3 className="task">{task}</h3>
            </div>
          )
        }
      </div>
    );
  }
}
export default App;
