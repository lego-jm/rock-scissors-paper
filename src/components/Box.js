import React from 'react'

function Box(props) {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <div className='img_wrap'>
        <img src={props.url} alt="" />
      </div>
      <h3>Winner</h3>
    </div>
  )
}

export default Box