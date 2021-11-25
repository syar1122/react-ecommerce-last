import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../../components/addToCart/AddToCart";
import { clearCart } from "../../features/cartSlice";
import "./cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { cartItems } = useSelector((state) => state.cart);
  let sum = 0;
  cartItems.forEach((element) => {
    sum += element.count * element.price;
  });
  console.log("sum", sum);
  return (
    <div className="container">
      {cartItems.length < 1 && <h1>your cart is empty</h1>}
      {cartItems.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Item Count</th>
                <th>Item Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems &&
                cartItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <h6>{item.name}</h6>
                      </td>
                      <td>
                        <AddToCart count={item.count} id={item._id} />
                      </td>
                      <td>{`$ ${item.price} USD`}</td>
                      <td style={{ fontWeight: "500px" }}>
                        $ {parseFloat(item.count * item.price).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="actions">
            <button
              className="btn-flat"
              type="button"
              onClick={() => {
                navigate("/products/All");
              }}
            >
              GO BACK SHOPPING
            </button>
            <button
              className="btn red"
              type="button"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              CLEAR CART
            </button>

            <button className="btn" type="button">
              CHECKOUT
            </button>
            <div className="sum">
              <h5>Total : $ {parseFloat(sum).toFixed(2)}</h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
