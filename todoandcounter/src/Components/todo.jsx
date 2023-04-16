import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [todoInput,setTodoInput] = useState("");
  
    
    
  
    const handleTodo = () =>{
       const newTodo ={
        id: Date.now(),
        title: todoInput
       }
       setTodo([...todo, newTodo]);
      //  setTodo("");
    }
    const deleteTodo = (id) =>{
      const updateTodo = todo.filter((el) => el.id !== id)
      setTodo(updateTodo);
    }
  return (
    <div>
         <h1>TODO</h1>
      <input
       type="text" 
       value={todoInput} 
       placeholder='Add todo' 
       onChange={(e) => setTodoInput(e.target.value)} 
       />
      <button onClick={ (e) => handleTodo(e)} >Add</button>
    <div>
      {todo.map((el)=>(
        <div key={el.id} style={{gap:"20px"}} > 
         <h1>{el.title}</h1> 
          <button onClick={()=> deleteTodo(el.id)} >delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Todo;