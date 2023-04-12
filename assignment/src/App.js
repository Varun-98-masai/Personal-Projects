import React from 'react';
// import './App.css';
import Navbar from './components/navbar';
import Footer  from './components/footer';
import  Router  from './components/allroutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      
      <Footer/>
    </div>
  );
}

export default App;
