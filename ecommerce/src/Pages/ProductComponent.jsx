import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import "./ProductComponent.css"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   
    const renderList = products.map((product) =>{
        const {id, title, image,price, category} = product;
        return (
            <div>
            <div className='Container'>
                <div className='Image'>
                    <img src={image} alt={title} />
                </div>
                <div className='Content'>
                    <div className='header'>{title}</div>
                    <div> $ {price}</div>
                </div>
            </div>
        </div>
        )
    });
   
   
  return <>{renderList}</>
}

export default ProductComponent