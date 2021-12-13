import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./trendingSection.css";

export default function TrendingSection({ products }) {
  console.log(products);
  return (
    <div className="trending-section">
      <div className="container">
        <div className="title">
          <h3 className="header">Trending</h3>
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
