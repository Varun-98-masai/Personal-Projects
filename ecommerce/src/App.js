
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductListing from './Pages/ProductListing';



function App() {

  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProductListing/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
