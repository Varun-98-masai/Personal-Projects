import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [ username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const login = () =>{
       

      const payload =  users.find( user => user.username === username && user.password === password)
      
      if(payload){
         dispatch({
            type: 'LOGIN',
            payload,
         })
         alert("Successfully logged in")
      }else{
        alert("wrong credentials !!")
      }
    }

  return (
   <form className="login">
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
        type="button" 
        value="Login" 
        onClick={login}
        />
   </form>
  )
}

export default Login