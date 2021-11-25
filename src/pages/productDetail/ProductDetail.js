import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Magnifire from "../../components/magnifire/Magnifire";
import { useGetProductByIdQuery } from "../../services/app.api";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import "./productDetail.css";
import PreLoade from "../../components/preLoader/PreLoade";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let { id } = useParams();
  let { data, isFetching, error } = useGetProductByIdQuery(id);
  let cartIdArray = [];
  cartItems.forEach((item) => {
    cartIdArray.push(item._id);
  });
  console.log(cartIdArray, data);

  return (
    <>
      {isFetching && <PreLoade />}
      {data && (
        <div className="product-detail container">
          <div className="img-wrapper">
            {data && <Magnifire image={data.image} />}
          </div>
          <div className="detail-wrapper">
            <h5>{data.name}</h5>
            <span className="helper-text">{data.category}</span>
            <h6>{`$  ${data.price}`}</h6>

            <p>{data.description}</p>
            <div className="spacer"></div>

            {!cartIdArray.includes(data._id) ? (
              <button
                className="btn"
                onClick={() => {
                  let product = { ...data, count: 1 };
                  dispatch(addToCart(product));
                }}
              >
                ADD TO CART
              </button>
            ) : (
              <button
                className="btn red"
                onClick={() => {
                  dispatch(removeFromCart(data._id));
                }}
              >
                REMOVE FROM CART
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
