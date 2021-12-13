import React, { useState } from "react";
import SizeList from "../sizeList/SizeList";
import "./colorList.css";

export default function ColorList({ colors, changeColor }) {
  console.log(colors);

  const [color, setColor] = useState(colors[0].code);

  return (
    <div>
      <div className="color-list">
        {colors.map((cuColor, index) => {
          return (
            <div>
              <div
                className={
                  color === cuColor.code
                    ? "color-outline color-active"
                    : "color-outline"
                }
                onClick={(e) => {
                  setColor(cuColor.code);
                  changeColor(cuColor.code);
                }}
                style={{ borderColor: cuColor.code }}
                key={index}
              >
                <div
                  className="color"
                  style={{ backgroundColor: cuColor.code }}
                ></div>
              </div>
              {cuColor.sizes.length >= 1 && (
                <div className="size-section">
                  <h6>Sizes</h6>
                  {color === cuColor.code && (
                    <SizeList sizes={cuColor.sizes}></SizeList>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
