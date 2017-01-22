import React from 'react';

const Noah = props => {
  let imgStyle = {
    'display': 'inlineBlock'
  }
  return(
    <div className='image'>
      <img src={props.noah} alt='Noah' height="100" width="80" style={imgStyle}/>
    </div>
  )
}

export default Noah;
