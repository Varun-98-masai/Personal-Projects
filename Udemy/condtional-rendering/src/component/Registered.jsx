import React from 'react'
import '../App.css';
import Input from './Input';
const Registerd = (props) => {
  return (
    <form className='form'>
    <Input type="text" placeholder="UserName"/>
    <Input type="password" placeholder="Password"/>
    { !props.isRegistered &&  <Input type="password" placeholder="Confirm Password"/>}
   
    <button type='submit'>{props.isRegistered ? "Login" : "Register"}</button>
   </form>
  )
}

export default Registerd