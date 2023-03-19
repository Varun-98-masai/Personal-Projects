
import './App.css';
import './Components/Navbar.css'
import { createBrowserRouter, createRoutesFromElements,Link,Outlet,Route, RouterProvider } from 'react-router-dom';
import ProductListing from './Pages/ProductListing';
// import ProductDetails from './Pages/ProductDetails';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Root/>}>
          <Route index element={<ProductListing/>} />
          {/* <Route element={<ProductDetails/>} /> */}
       </Route>
    )
  )


  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}
const Root = () =>{

  return <>
   <div className="navbar">
      <h1>Fake Store</h1>
      <Link to="/">Products</Link>
    </div>
   <div>
    <Outlet/>
   </div>
  </>
}
export default App;
