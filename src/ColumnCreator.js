import React from 'react';
import Noah from './Noah';
import Obstacle from './Obstacle';

const ColumnCreator = props => {
  let col;
  if ((props.row === props.noahLocation) && (props.col == 0)) {
    col =
    <Noah
      noah={props.noah}
    />
  } else {
    col = <div className='col s1'>CELL</div>
  }
  return (
    <div>
      {col}
    </div>
  )
}

export default ColumnCreator;
