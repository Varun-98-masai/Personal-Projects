import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Registration = () => {
    const [name , setName] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
         dispatch({
            type: "REGISTER",
            payload: {
                id: (new Date).getTime(),
                name, username, password
            }
         })
    }
  return (
   <form className="register">
       <input 
       type="text" 
       placeholder='Name' 
       value={name} 
       onChange={(e)=> setName(e.target.value)}
        />
       <input 
        type="text"
        placeholder='Username' 
        value={username} 
        onChange={(e)=> setUsername(e.target.value)}
        />
       <input 
        type="password"
        placeholder='Password'
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}
        />
       <input
        type="password"
        placeholder='Confirn Password'
        value={confirmPassword} 
        onChange={(e)=> setConfirmPassword(e.target.value)}
        />
       <input
        type="button"
        value="Register"
        onClick={handleSubmit} 
        />
   </form>
  )
}

export default Registration