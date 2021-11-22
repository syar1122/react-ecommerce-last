import React, { useState, useEffect } from "react";
import "./products.css";

import { useParams } from "react-router";
import { useGetProductsQuery } from "../../services/app.api";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const CART_LOCAL_STORAGE = JSON.parse(
  localStorage.getItem("cartProduct") || "[]"
);

export default function Products() {
  let { data = [], isLoading, error } = useGetProductsQuery();
  let { catName } = useParams();
  const dispatch = useDispatch();
  let { cartItems } = useSelector((state) => state.cart);
  let products;
  const cartProductId = [];
  cartItems.forEach((cartItem) => {
    cartProductId.push(cartItem._id);
  });

  console.log("cartItems", cartItems);

  let addToCartl = (product) => {
    // let cartProduct = { ...product, count: 1 };
    // let cartProductArray = cart || [];
    // cartProductArray.push(cartProduct);
    // console.log(cartProductArray);
    // setCart(cartProductArray);
    // localStorage.setItem("cartProduct", JSON.stringify(cart));
  };

  if (catName !== "All") {
    products = data.filter((el) => {
      return el.category === catName;
    });
  } else {
    products = data;
  }

  console.log(catName);

  return (
    <div className="container">
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
                  <h6>{product.name}</h6>
                  {cartProductId.includes(product._id) ? (
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(product._id));
                      }}
                    >
                      remove
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        cartProductId.push(product._id);
                        let cartProduct = { ...product, count: 1 };
                        dispatch(addToCart(cartProduct));
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
