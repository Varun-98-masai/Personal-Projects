import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Profile from "./profile"
import Home from './home';
import Followers from './followers';
import Register from './register';

const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route  path='/profile' element={<Profile/>}/>
    <Route path='/followers' element={<Followers/>} />
    <Route  path='/register' element={<Register/>}/>
   </Routes>
  )
}

export default Router