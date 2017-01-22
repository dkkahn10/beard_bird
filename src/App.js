import React, { Component } from 'react';
import './App.css';
import RowCreator from './RowCreator';
import GameEnd from './GameEnd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yCoord: 6,  // y coordinate
      obstacles: [],
      gameOver: false,
      intervalId: null
    }
    this.moveCharacter = this.moveCharacter.bind(this);
  }

  moveCharacter(event) {
    let newPosition = this.state.yCoord;
    if(event.keyCode === 40) {
      newPosition += 1;
    } else if(event.keyCode === 38) {
      newPosition -= 1;
    };
    if (newPosition >= 12 || newPosition <= -1) {
      this.setState({ gameOver: true });
    } else {
      this.setState({ yCoord: newPosition });
    }
  };

  conveyorBelt() {
    let intervalId = setInterval(function() {
      let obstacleArray = [...this.state.obstacles];
      let newArray = obstacleArray.map(obstacle => {
        return obstacle - 1;
      })
      this.setState({ obstacles: newArray })
    }.bind(this), 500);

    this.setState({ intervalId: intervalId });
  }

  componentDidMount() {
    document.body.addEventListener('keydown', (event) => {
      this.moveCharacter(event);
    });
    let obstacleArray = [...this.state.obstacles];
    obstacleArray.push(11)
    this.setState({ obstacles: obstacleArray })
    this.conveyorBelt();
  }

  render() {
    console.log(`Noah y-coordinate: ${this.state.yCoord}`)
    let gameScreen;
    const divStyle = {
      'borderStyle': 'solid'
    };

    let gameGrid = [];
    gameGrid.push(<div style={divStyle}></div>)
    for (let i = 0; i < 12; i++) {
      gameGrid.push(<RowCreator
        key={i}
        row={i}
        noahLocation={this.state.yCoord}
        noah={this.props.noah}
        tree={this.props.tree}
        obstacles={this.state.obstacles}
      />)
    }
    gameGrid.push(<div className='bg'></div>)

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


export default App;
