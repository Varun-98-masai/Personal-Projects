import React from 'react'
import '../App.css';
const Entry = (props) => {
  return (
    <div className='term'>
    <dt>
      <span className='emoji' role='img' aria-label={props.title}>
      {props.img}
      </span>
      <span>{props.title}</span>
    </dt>
    <dd>
    {props.detail}
    </dd>
  </div>
  )
}

export default Entry