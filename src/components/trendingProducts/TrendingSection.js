import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./trendingSection.css";

export default function TrendingSection({ products }) {
  return (
    <div className="trending-section">
      <div className="container">
        <div className="title">
          <h3 className="header">Trending</h3>
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
