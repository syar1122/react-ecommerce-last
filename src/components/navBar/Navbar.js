import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/userSlice";
import CartCount from "../cartCount/CartCount";
import CategoriesList from "../categoriesList/CategoriesList";
import SearchBar from "../searchBar/SearchBar";
import "./navBar.css";

export default function Navbar() {
  let [drpActive, setDrpActive] = useState(false);
  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log("navbar isAuth", isAuth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="logo hide-on-down">
          syar<span>D</span>ev
        </Link>
        <a href="#" data-target="mob-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>

        <SearchBar className="center" />

        <ul id="nav-mobile" className="hide-on-down">
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
