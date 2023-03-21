import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../Redux/Products/Products-action";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log("selected product  " + product);
  const { image, title, description, price } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err" + err);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    fetchProductDetail();
  }, [productId]);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="container2">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="information">
            <h1>{title}</h1>
            <h4>{description}</h4>

            <h1>${price}</h1>
            <button>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
