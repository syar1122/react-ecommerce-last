import React from "react";
import { useNavigate } from "react-router";
import "./sampleProduct.css";

export default function SampleProduct({ product }) {
  let navigate = useNavigate();
  return (
    <div
      className="sample-product-card"
      onClick={() => navigate(`product/${product._id}`)}
    >
      <img src={product.image} alt={product.title}></img>
    </div>
  );
}
