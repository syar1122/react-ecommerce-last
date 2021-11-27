import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cartCount.css";

export default function CartCount() {
  let [cartItem, setCartItem] = useState([]);

  let { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartItems) setCartItem(cartItems);
  }, [cartItems]);
  return <span className="badge">{cartItem.length}</span>;
}
