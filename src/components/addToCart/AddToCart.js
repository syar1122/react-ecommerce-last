import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../features/cartSlice";

import "./addToCart.css";

export default function AddToCart({ count, id }) {
  let [itemCount, setItemCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    setItemCount(count);
  }, [count]);

  let addItem = () => {
    dispatch(incrementQuantity(id));
    setItemCount(++itemCount);
  };

  let removeItem = () => {
    if (itemCount === 1) {
      dispatch(removeFromCart(id));
    }
    if (itemCount > 1) {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <div className="add-to-cart">
      <form>
        <button
          className="remove-btn"
          type="button"
          onClick={() => removeItem()}
        >
          {itemCount === 1 && <i className="material-icons">delete</i>}
          {itemCount > 1 && <i className="material-icons">remove</i>}
        </button>
        <input
          readOnly
          value={itemCount}
          onChange={() => setItemCount(itemCount)}
        ></input>
        <button className="add-btn" type="button" onClick={() => addItem()}>
          <i className="material-icons">add</i>
        </button>
      </form>
    </div>
  );
}
