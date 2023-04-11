import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Profile from "./profile"
import Home from './home';
import Followers from './followers';

const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route  path='/profile' element={<Profile/>}/>
    <Route path='/followers' element={<Followers/>} />
   </Routes>
  )
}

export default Router