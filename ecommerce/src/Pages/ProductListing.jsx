import React, { useEffect } from "react";
import "./ProductListing.css";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/Products/Products-action";
const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      
      <div className="listing">
        <ProductComponent />
      </div>
   
    </>
  );
};

export default ProductListing;
