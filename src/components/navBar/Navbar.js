import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCount from "../cartCount/CartCount";
import CategoriesList from "../categoriesList/CategoriesList";
import "./navBar.css";

export default function Navbar() {
  let [drpActive, setDrpActive] = useState(false);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          E-Commerce
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              className="dropdown-btn"
              to="/products/All"
              onMouseEnter={() => setDrpActive(true)}
              onMouseLeave={() => setDrpActive(false)}
            >
              <div className="drp-header">
                Products <i class="material-icons right">arrow_drop_down</i>
              </div>

              {drpActive && <CategoriesList />}
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" className="right hide-on-down">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="cart">
              <CartCount />
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
