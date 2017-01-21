import React, { Component } from 'react';
import './App.css';
import Noah from './Noah';
import Obstacle from './Obstacle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noah: 6,  // y coordinate
      obstacles: []
    }
    this.moveCharacter = this.moveCharacter.bind(this);
  }

  moveCharacter(event) {
    if(event.keyCode == 37) {
      let newPosition = this.state.noah + 1;
      this.setState({noah: newPosition});
    } else if(event.keyCode == 40) {
      let newPosition = this.state.noah - 1;
      this.setState({noah: newPosition});
    };
  };

  render() {
    let noah = this.props.noah;
    let tree = this.props.tree;
    let movement = this.moveCharacter;
    let grid = [];
      for (let i = 0; i < 12; i++) {
        if (this.state.noah === i) {
          grid.push(
            <div className='row' key={i}>
              <Noah
                noah={noah}
                movement={movement}
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
