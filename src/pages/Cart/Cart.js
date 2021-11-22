import React from "react";
import { useSelector } from "react-redux";
import AddToCart from "../../components/addToCart/AddToCart";

export default function Cart() {
  let items = [];
  let { cartItems } = useSelector((state) => state.cart);
  let sum = 0;
  cartItems.forEach((element) => {
    sum += element.count * element.price;
  });
  console.log("sum", sum);
  return (
    <div className="container">
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
                  <td>{item.name}</td>
                  <td>
                    <AddToCart count={item.count} id={item._id} />
                  </td>
                  <td>{`$ ${item.price} USD`}</td>
                  <td>{item.count * item.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      sum {sum}
    </div>
  );
}
