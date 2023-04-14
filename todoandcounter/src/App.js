
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [todo,setTodo] = useState("");

  const increment = () =>{
     setCount((prev)=> prev + 1)
  }
  const decrement = () =>{
    setCount((prev)=> prev - 1)
  }
  

  const handleTodo = (e) =>{
     console.log(e.target);
     setTodo(e.target.value)
  }
  console.log(todo);
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h3>Count: {count}</h3>

      
      <button disabled={count === 0} onClick={()=>decrement()}>Dec</button>
      <button onClick={()=>increment()}>Inc</button>
      <h1>TODO</h1>
      <input type="text" value={todo} placeholder='Add todo' onChange={(e) => setTodo(e.target.value)} />
      <button >Add</button>
    
      <h1>{todo}</h1>
    </div>
  );
}

export default App;
