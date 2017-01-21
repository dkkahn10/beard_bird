import React, { Component } from 'react';
import './App.css';
import Bird from './Bird';
import Obstacle from './Obstacle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: 6,  // y coordinate
      obstacles: []
    }
  }

  render() {
    let noah = this.props.noah;
    let tree = this.props.tree;

    return (
      <div className="App">
        <p>Our Game</p>
        <Bird
          noah={noah}
        />
        <Obstacle
          tree={tree}
        />
      </div>
    );
  }
}

export default App;
