import React from 'react'

function Box(props) {
  let result;

  if(props.title === 'Computer' && props.result !== 'Tie' && props.result !== '') {
    result = props.result === 'Winner' ? 'Loser' : 'Winner';
  } else {
    result = props.result;
  }

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <div className='img_wrap'>
        <img src={props.url} alt="" />
      </div>
      <h3>{result}</h3>
    </div>
  )
}

export default Box