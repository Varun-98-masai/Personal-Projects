import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import "./ProductComponent.css"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   console.log(products);
    const renderList = products.map((product) =>{
        const {id, title, image,price } = product;
        return (
            <div>
                <Link to={`/products/${id}`} >
            <div className='Container'>

                <div className='Image'>
                    <img src={image} alt={title} />
                </div>
                <div className='Content'>
                    <div className='header'>{title}</div>
                    <div> $ {price}</div>

                    
                </div>
            </div>
            </Link>
        </div>
        )
    });
   
   
  return <>{renderList}</>
}

export default ProductComponent