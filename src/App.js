import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
    }
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">
          TODO REACT
          <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <input onChange={this.handleTaskChange} type="text" className="new-task" />
        <h2 className="test-label">{this.state.newTask}</h2>
      </div>
    );
  }
}
export default App;
