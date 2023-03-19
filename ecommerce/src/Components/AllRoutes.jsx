import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductListing from '../Pages/ProductListing'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ProductListing/>} />
    </Routes>
  )
}

export default AllRoutes