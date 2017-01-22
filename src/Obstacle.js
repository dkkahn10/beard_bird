import React from 'react';

const Obstacle = props => {
  let imgStyle = {
    'display': 'inlineBlock'
  }
  return (
    <div className='image'>
      <img src={props.tree} alt="Tree" height="100" style={imgStyle}/>
    </div>
  )
}

export default Obstacle;
