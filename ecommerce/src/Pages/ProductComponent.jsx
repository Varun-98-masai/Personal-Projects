import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import "./ProductComponent.css"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   console.log(products);
    const renderList = products.map((product) =>{
        const {id, title, images,price } = product;
       
        return (
            <div>
                <Link to={`/products/${id}`} >
            <div className='Container'>

                <div className='Image'>
                    <img src={images[0]} alt={title} />
                </div>
                <div className='Content'>
                    <h2 className='header'>{title}</h2>
                    <h3> ${price}</h3>

                    
                </div>
            </div>
            </Link>
        </div>
        )
    });
   
   
  return <>{renderList}</>
}

export default ProductComponent