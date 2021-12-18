import React from "react";
import { useNavigate } from "react-router";
import "./sampleProduct.css";

export default function SampleProduct({ product, className }) {
  let navigate = useNavigate();
  console.log(product);
  return (
    <div
      className={
        className ? "sample-product-card " + className : "sample-product-card"
      }
      onClick={() => navigate(`product/${product._id}`)}
    >
      <img src={product.imageUrl} alt={product.title}></img>
      <h1>{product.title}</h1>
    </div>
  );
}
