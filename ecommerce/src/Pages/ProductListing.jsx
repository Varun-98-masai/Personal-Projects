import React, { useEffect, useState } from 'react'
import "./ProductListing.css"
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import {setProducts} from '../Redux/Products/Products-action'
const ProductListing = () => {
  const products = useSelector((state) => state)
  const [page , setpage] = useState(0)
  const limit = 12;
  const dispatch = useDispatch();

    const fetchProducts = async() => {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`)
      .catch((err) => {
        console.log(err)
      });
      
      dispatch(setProducts(response.data));
      console.log(response.data);
    }
    useEffect(()=>{
      fetchProducts()
    },[page])
    const nextPage = () =>{
      setpage((pre) => pre + limit)
    }
    const prePage = () =>{
      setpage((pre) => pre - limit)
    }
    console.log("Page is : "+page);
  return (
    <>
    <div className='listing'>
       <ProductComponent/> 
    </div>
    <div className='Btn_Div'>
    <button  disabled={page===0} onClick={()=>prePage()}>Pre</button>
    <button onClick={()=>nextPage()}>Next</button>
    
   </div>
   </>
  )
}

export default ProductListing