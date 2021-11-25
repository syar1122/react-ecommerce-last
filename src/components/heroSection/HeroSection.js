import React from "react";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section container">
      <div className="content">
        <h2 className="header white-text">Comfort that come naturaly.</h2>

        <h5 className="header col s12 white-text text-lighten-3">
          Give a gift of comfort...
        </h5>

        <button className="waves-effect waves-teal white-text btn-flat">
          Shop Now
        </button>
      </div>
    </div>
  );
}
