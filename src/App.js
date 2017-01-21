import React, { Component } from 'react';
import './App.css';
import Bird from './Bird';
import Obstacle from './Obstacle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noah: 6,  // y coordinate
      obstacles: []
    }
  }

  render() {
    let noah = this.props.noah;
    let tree = this.props.tree;
    let grid = [];
      for (let i = 0; i < 12; i++) {
        if (this.state.noah === i) {
          grid.push(
            <div className='row' key={i}>
              <Bird
                noah={noah}
              />
            </div>
          )
        } else {
          grid.push(
            <div className='row' key={i}>&nbsp;</div>
          )
        }
      }
      
    return (
      <div>
        {grid}
      </div>
    );
  }
}

// <Obstacle
//   tree={tree}
// />

export default App;
