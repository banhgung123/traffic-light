import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TrafficLight from './components/TrafficLight';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}

export default App;
