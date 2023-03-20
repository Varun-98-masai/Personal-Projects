
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductDetails from './Pages/PrductDetails';
import ProductListing from './Pages/ProductListing';



function App() {

  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProductListing/>} />
      <Route path='/products/:productId' element={<ProductDetails/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
