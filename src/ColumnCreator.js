import React from 'react';
import Noah from './Noah';
import Obstacle from './Obstacle';

const ColumnCreator = props => {
  let col;
  if ((props.row === props.noahLocation) && (props.col === 0)) {
    col =
    <Noah
      noah={props.noah}
    />
  } else if ((props.row === 11) && (props.col === props.obstacles[0])) {
    console.log(`Obstacle row: ${props.row}, Obstacle col: ${props.col}`);
    col = <div className='col s1'><Obstacle tree={props.tree} /></div>
  } else {
    col = <div className='col s1'>&nbsp;</div>
  }
  return (
    <div>
      {col}
    </div>
  )
}

export default ColumnCreator;
