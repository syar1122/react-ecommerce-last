import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Magnifire from "../../components/magnifire/Magnifire";
import { useGetProductByIdQuery } from "../../services/app.api";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import "./productDetail.css";
import PreLoade from "../../components/preLoader/PreLoade";
import SizeList from "../../components/sizeList/SizeList";
import ColorList from "../../components/colorList/ColorList";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let { id } = useParams();

  let { data = {}, isFetching } = useGetProductByIdQuery(id);
  let { product } = data;
  if (product) {
    console.log("product detail", product.colors);
  }
  const [size, setSize] = useState("xs");
  const [color, setColor] = useState("black");

  let cartIdArray = [];
  cartItems.forEach((item) => {
    cartIdArray.push(item._id);
  });

  let changeSize = (size) => {
    console.log("change size", size);
    setSize(size);
  };
  let changeColor = (color) => {
    console.log("change color", color);
    setColor(color);
  };
  return (
    <>
      {isFetching && <PreLoade />}
      {product && (
        <div className="container">
          <div className="product-detail">
            <div className="img-wrapper">
              {product && <Magnifire image={product.imageUrl} />}
            </div>
            <div className="detail-wrapper">
              <div className="detail-title">
                <h5>{product.title}</h5>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  {product.categories.name}
                </span>
              </div>

              <h6>{`$  ${product.price}`}</h6>

              <p>{product.description}</p>

              <hr></hr>
              {/* <div className="size-section">
                <h6>SIZES</h6>
                <SizeList
                  sizes={product.colors.sizes}
                  changeSize={changeSize}
                ></SizeList>
              </div> */}

              {product.colors.length > 0 && (
                <div className="color-section">
                  <h6>COLORS</h6>
                  <ColorList
                    colors={product.colors}
                    changeColor={changeColor}
                  ></ColorList>
                </div>
              )}

              {!cartIdArray.includes(product._id) ? (
                <button
                  className="btn"
                  onClick={() => {
                    let cartProduct = {
                      ...product,
                      count: 1,
                      size: size,
                      color: color,
                    };
                    dispatch(addToCart(cartProduct));
                  }}
                >
                  ADD TO CART
                </button>
              ) : (
                <button
                  className="btn red"
                  onClick={() => {
                    dispatch(removeFromCart(product._id));
                  }}
                >
                  REMOVE FROM CART
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
