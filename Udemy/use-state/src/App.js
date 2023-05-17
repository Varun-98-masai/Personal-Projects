
import { useState } from 'react';
import './App.css';


function App() {
  const [isDone, setIsDone ] = useState(false);
 
  const strikeThrough = {textDecoration:"line-through"}
  const strike= () => {
      setIsDone(true);
   }
   const unStrike = () => {
     setIsDone(false);
     console.log(isDone);
   }
  return (
    <div className="App">
      <p style={isDone ? strikeThrough : null}>Buy Milk</p>
      <button onClick={strike}>Change to Strike Through</button>
      <button onClick={unStrike}>Change Back</button>
    </div>
  );
}

export default App;
