import React, { useEffect } from "react";
import M from "materialize-css";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./trendingSection.css";

export default function TrendingSection({ products }) {
  useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      duration: 500,
      dist: -50,
      shift: 50,
      numVisible: 5,
      padding: 0,
    });
  }, []);

  console.log(products);
  return (
    <div className="trending-section valign-wrapper">
      <div className="container">
        <div className="title">
          <h4 className="header">Trending</h4>
        </div>

        <div className="carousel">
          {products.map((product, index) => {
            return (
              <SampleProduct product={product} className={"carousel-item"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
