import React from 'react'
import '../App.css';
const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
        <h3 className='name'>{props.name}</h3>
        <img src={props.img} alt="image.png" className='circle-image' />
        </div>
        <div className='bottom'>
        <p className='info'>{props.tel}</p>
        <p className='info'>{props.email}</p>
        </div>
       
    </div>
  )
}

export default Card