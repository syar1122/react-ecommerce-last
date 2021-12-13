import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./newArives.css";

export default function NewArrives({ products }) {
  return (
    <div className="new-section">
      <div className="container">
        <div className="title">
          <h3 className="header">New Arrives</h3>
        </div>
        <div className="products">
          {products.map((product, index) => {
            return <SampleProduct product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
