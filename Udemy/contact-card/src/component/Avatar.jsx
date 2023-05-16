import React from 'react';
import '../App.css';
const Avatar = (props) => {
  return (
    <div>
        <img src={props.img} alt="avatar.jpeg" className='circle-image' />
    </div>
  )
}

export default Avatar