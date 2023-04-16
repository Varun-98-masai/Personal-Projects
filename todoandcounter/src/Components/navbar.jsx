import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-around",border:"1px solid black"}}>
      <Link to='/'><h3>Todo</h3></Link> 
       <Link to='/counter'> <h3>Counter</h3></Link> 
    </div>
  )
}

export default Navbar