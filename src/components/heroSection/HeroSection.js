import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section container">
      <div className="content">
        <h2 className="header white-text">Comfort that come naturaly.</h2>

        <h5 className="header col s12 white-text text-lighten-3">
          Give a gift of comfort...
        </h5>

        <Link className="white-text btn" to="/products/Men">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
