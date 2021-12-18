import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="col-md-3">
      <div className="product-container">
        {/* <div className="tag-sale"></div> */}
        <div className="product-image">
          <span className="hover-link"></span>
          <Link to={`/product/${product._id}`} className="product-link">
            view details
          </Link>
          <img
            className="img-responsive"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="product-description">
          <div className="product-label">
            <div className="product-name">
              <h1>{product.title}</h1>
              <p className="price">${product.price}</p>
              {product.categories.name}
            </div>
          </div>
          <div className="product-option">
            <div className="product-size">
              <h3>Sizes</h3>
              <p>XS,S,M,L,XL,XXL</p>
            </div>
            <div className="product-color">
              <h3>Colors</h3>
              <ul>
                {product.colors.map((color, index) => {
                  return (
                    <li
                      style={{ backgroundColor: color.code }}
                      key={index}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
