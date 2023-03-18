import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Containers/ProductDetails'
import ProductListing from '../Containers/ProductListing'

const MainRouter = () => {
  return (
      <Routes>
        <Route path='/' Component={<ProductListing/>}/>
        <Route path='/product/:productId' Component={<ProductDetails/>}/>
        <Route>404 Not Found</Route>
      </Routes>
   
  )
}

export default MainRouter