import React, { Component } from 'react';
import './App.css';
import RowCreator from './RowCreator';
import GameEnd from './GameEnd';
import Obstacle from './Obstacle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noah: 6,  // y coordinate
      obstacles: [],
      gameOver: false
    }
    this.moveCharacter = this.moveCharacter.bind(this);
  }

  moveCharacter(event) {
    let newPosition = this.state.noah;
    if(event.keyCode === 38) {
      newPosition += 1;
    } else if(event.keyCode === 40) {
      newPosition -= 1;
    };
    if (newPosition >= 12 || newPosition <= -1) {
      this.setState({gameOver: true});
    } else {
      this.setState({noah: newPosition});
    }
  };

  componentDidMount() {
    document.body.addEventListener('keydown', (event) => {
      this.moveCharacter(event);
    });
    let objectArray = this.state.obstacles;
    objectArray.push(<Obstacle />)
    this.setState({ obstacles: objectArray })
  }



  render() {
    let noah = this.props.noah;
    let tree = this.props.tree;
    let movement = this.moveCharacter;
    let grid = [];
    let gameScreen;
    const divStyle = {
      'borderStyle': 'solid'
    };

    let gameGrid = [];

    for (let i = 0; i < 12; i++) {
      gameGrid.push(<RowCreator
        key={i}
        row={i}
        noahLocation={this.state.noah}
        noah={this.props.noah}
      />)
    }

    if (this.state.gameOver) {
      gameScreen = <GameEnd/>
    } else {
      gameScreen = gameGrid;
    }

    return (
      <div>
        {gameScreen}
      </div>
    );
  }
}

// <Obstacle
//   tree={tree}
// />

export default App;
