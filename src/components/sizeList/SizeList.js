import React, { useState } from "react";
import "./sizeList.css";

export default function SizeList({ sizes }) {
  const [size, setSize] = useState(sizes[0]);
  console.log(sizes, "sizes", size);
  return (
    <div>
      <div className="size-list">
        {sizes.map((cuSize, index) => {
          return (
            <button
              className={
                size.shorten.toUpperCase() === cuSize.shorten.toUpperCase()
                  ? "waves-effect waves-teal btn-flat active-size"
                  : "waves-effect waves-teal btn-flat"
              }
              onClick={(e) => {
                setSize(cuSize);
              }}
              key={index}
            >
              {cuSize.shorten}
            </button>
          );
        })}
      </div>
      <div>
        <p>
          HUrry up! <span>{size.quantity}</span> left in the stock
        </p>
      </div>
    </div>
  );
}
