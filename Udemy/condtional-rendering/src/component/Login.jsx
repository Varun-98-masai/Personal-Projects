import React from 'react'
import '../App.css';
import Input from './Input';
const Login = () => {
  return (
    <form className='form'>
    <Input type="text" placeholder="UserName"/>
    <Input type="password" placeholder="Password"/>
    <button type='submit'>Login</button>
   </form>
  )
}

export default Login