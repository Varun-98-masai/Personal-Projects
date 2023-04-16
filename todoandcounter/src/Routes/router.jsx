import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from '../Components/counter'
import Todo from '../Components/todo'

const Router = () => {
  return (
    <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Route path='/' element={<Todo/>}/>
    </Routes>
  )
}

export default Router