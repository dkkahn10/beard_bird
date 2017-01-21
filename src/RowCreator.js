import React from 'react';
import ColumnCreator from './ColumnCreator';

const RowCreator = props => {
  let row = [];
  for (let i = 0; i < 12; i++) {
    let coordinate = i;
    row.push(
      <ColumnCreator
        key={coordinate}
        row={props.row}
        col={i}
        noahLocation={props.noahLocation}
        noah={props.noah}
      />
    )
  }

  return (
    <div className='row'>
      {row}
    </div>
  )
}

export default RowCreator;
