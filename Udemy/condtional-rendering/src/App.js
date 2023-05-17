import './App.css';
import Form from './component/Form';

var isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="App">
      {/* { isLoggedIn ? <h1 className="heading">Hello</h1> : <Form/>} */}
    { currentTime > 11 &&   <h1 className='heading'>Why Are You Here</h1> }
    </div>
  );
}

export default App;
