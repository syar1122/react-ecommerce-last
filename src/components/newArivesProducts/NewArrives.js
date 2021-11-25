import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./newArives.css";

export default function NewArrives({ products }) {
  return (
    <div className="new-section">
      <div className="container">
        <div className="title left">
          <h3 className="header">New Arrives</h3>
        </div>
        <div className="products">
          <SampleProduct product={products[0]} />
          <SampleProduct product={products[1]} />
          <SampleProduct product={products[2]} />
        </div>
      </div>
    </div>
  );
}
