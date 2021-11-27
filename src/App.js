import { render } from '@testing-library/react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">
          TODO REACT
          <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <input type="text" className="new-task" />
      </div>
    );
  }
}
export default App;
