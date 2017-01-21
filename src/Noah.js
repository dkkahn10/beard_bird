import React from 'react';

const Noah = props => {
  return(
    <div onKeyDown={props.movement}>
      <img src={props.noah} alt='Noah' height="100" width="80" />
    </div>
  )
}

export default Noah;
