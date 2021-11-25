import React, { useState, useEffect } from "react";
import "./products.css";

import { useNavigate, useParams } from "react-router";
import { useGetProductsQuery } from "../../services/app.api";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import PreLoade from "../../components/preLoader/PreLoade";

export default function Products() {
  let { data = [], isFetching, isSuccess, error } = useGetProductsQuery();
  let { catName } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { cartItems } = useSelector((state) => state.cart);
  let products;
  const cartProductId = [];
  cartItems.forEach((cartItem) => {
    cartProductId.push(cartItem._id);
  });

  console.log("cartItems", cartItems);

  if (catName !== "All") {
    products = data.filter((el) => {
      return el.category === catName;
    });
  } else {
    products = data;
  }

  console.log(catName);

  return (
    <>
      {isFetching && <PreLoade />}
      {isSuccess && data && (
        <div className="products-page container">
          <h4>{catName}</h4>
          <div className="product-list">
            {products &&
              products.map((product, index) => {
                return (
                  <div class="card" key={index}>
                    <div class="card-image">
                      <img src={product.image} alt={product.name} />
                      <span class="card-title">{`$ ${product.price} USD`}</span>
                    </div>
                    <div class="card-content">
                      <h5>{product.name}</h5>
                      <div className="spacer"></div>
                      {cartProductId.includes(product._id) ? (
                        <button
                          className="remove-cart btn"
                          onClick={() => {
                            dispatch(removeFromCart(product._id));
                          }}
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          className="add-cart btn"
                          onClick={() => {
                            cartProductId.push(product._id);
                            let cartProduct = { ...product, count: 1 };
                            dispatch(addToCart(cartProduct));
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                      <button
                        className="more-detail btn-flat"
                        onClick={() => {
                          navigate(`/product/${product._id}`);
                        }}
                      >
                        More Details ...
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
