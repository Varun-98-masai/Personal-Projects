import { Routes,Route } from 'react-router-dom';
import './App.css';
import LayOut from './components/layout';
import Public from './components/public';
import Login from './features/auth/Login';
import RequireAuth from './features/auth/RequireAuth';
import Welcome from './features/auth/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayOut/>} >
        {/* public Routes */}
      <Route index element={<Public/>} />
      <Route path='login' element={<Login/>} />
  
      {/* Protected Routes */}
      <Route element={<RequireAuth/>} />
      <Route path='welcome' element={<Welcome/>} />
      </Route>
    </Routes>
  );
}

export default App;
