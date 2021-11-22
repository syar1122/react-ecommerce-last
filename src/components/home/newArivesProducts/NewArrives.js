import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./newArives.css";

let imageUrls = [
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/6UDHZdgWynsJcSfsmIX64N/b53a54073a1ad9637d078e2dbf1f59dc/TB1WNNT_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZERS_NAVY_NIGHT_DARK_NAVY.png",
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/7jIk8r7tE8mnDrjFYA8vyX/d84a27ad37d948e4d2f79b48f6862e04/Hoodie-Women-Pine-01.jpg",
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/5BZdow4aM2mmBuVx9FYTkR/f37590420646fdce490a70a006bbba7c/Allbirds_Q4_Accessories_13896.png.png",
];

export default function NewArrives({ products }) {
  return (
    <div className="new-section">
      <div className="container">
        <div className="title left">
          <h3 className="header">New Arrives</h3>
        </div>
        <div className="products">
          <SampleProduct product={products[0]} />
          <SampleProduct product={products[1]} />
          <SampleProduct product={products[2]} />
        </div>
      </div>
    </div>
  );
}
