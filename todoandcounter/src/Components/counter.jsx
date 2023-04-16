import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount((prev)=> prev + 1)
     }
     const decrement = () =>{
       setCount((prev)=> prev - 1)
     }
  return (
    <div>
        <h1>COUNTER</h1>
      <h3>Count: {count}</h3>

      
      <button disabled={count === 0} onClick={()=>decrement()}>Dec</button>
      <button onClick={()=>increment()}>Inc</button>
    </div>
  )
}

export default Counter