import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/userSlice";
import CartCount from "../cartCount/CartCount";
import CategoriesList from "../categoriesList/CategoriesList";
import "./navBar.css";

export default function Navbar() {
  let [drpActive, setDrpActive] = useState(false);
  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log("navbar isAuth", isAuth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          E-Commerce
        </Link>
        <ul id="nav-mobile" className="left hide-on-small-only">
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
                Products <i className="material-icons right">arrow_drop_down</i>
              </div>

              {drpActive && <CategoriesList />}
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" className="right hide-on-down">
          <li>
            {!isAuth ? (
              <Link to="login">Login</Link>
            ) : (
              <Link
                to="/"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                logout<i className="material-icons right">arrow_drop_down</i>
              </Link>
            )}
          </li>
          <li>
            <Link to="cart" className="cart-link">
              <CartCount />
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
