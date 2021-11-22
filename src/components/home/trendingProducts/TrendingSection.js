import React from "react";
import SampleProduct from "../sampleProduct/SampleProduct";
import "./trendingSection.css";

let imageUrls = [
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/14tuNJEGH6QiAkgYg29FJC/90d8cbc1845196fd875a02a0cc5cb5ea/AB001MT080_SHOE_ANGLE_GLOBAL_SMALLBIRDS_FLUFF_NATURAL_WHITE_WHITE.png.png",
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/49tgBAiOEUlhlvKlfSfg5M/76da732a28e8bb6d7e2a46e100d46558/mens-wrum-pdp.jpg",
  "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/2mNlpkZK1D5SSllnBuqTwA/10531d7aef80ad21d19392f6b988de6f/Allbirds_Q4_Accessories_10460.png.png",
];

export default function TrendingSection({ products }) {
  return (
    <div className="trending-section">
      <div className="container">
        <div className="title left">
          <h3 className="header">Trending</h3>
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
