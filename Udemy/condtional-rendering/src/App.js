import './App.css';
// import Login from './component/Login';
import Registerd from './component/Registered';

// var isLoggedIn = false;
var userIsRegistered = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="App">
       <Registerd isRegistered={userIsRegistered}/>
    
    </div>
  );
}

export default App;
