import React from 'react'
import '../App.css';
import Avatar from './Avatar';
import Detail from "./Detail";
const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
        <h3 className='name'>{props.name}</h3>
        <Avatar img={props.img}/>
        </div>
        <div className='bottom'>
        <Detail
        personalinfo={props.tel}
       
         />
          <Detail
        personalinfo={props.email}
       
         />
        </div>
       
    </div>
  )
}

export default Card