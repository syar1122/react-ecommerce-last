import React, { useEffect } from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import M from "materialize-css";
import "./newArives.css";

export default function NewArrives({ products }) {
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
  return (
    <div className="new-section">
      <div className="container">
        <div className="title">
          <h4 className="header">New Arrives</h4>
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
